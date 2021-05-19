/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/linkediting
 */

import  Plugin  from '@ckeditor/ckeditor5-core/src/plugin';
import  MouseObserver  from '@ckeditor/ckeditor5-engine/src/view/observer/mouseobserver';
import { Input, TwoStepCaretMovement, inlineHighlight, findAttributeRange } from '@ckeditor/ckeditor5-typing/src';
import  ClipboardPipeline  from '@ckeditor/ckeditor5-clipboard/src/clipboardpipeline';
import { keyCodes } from '@ckeditor/ckeditor5-utils/src/keyboard';

import TemplateCommand from './template-command.js';
import CancelTemplateCommand from './canceltemplatecommand';
import ManualDecorator from './utils/manualdecorator';
import {
	createLinkElement,
	createTemplateElement,
	ensureSafeUrl,
	getLocalizedDecorators,
	normalizeDecorators
} from './utils';

import '../theme/template.css';

const HIGHLIGHT_SELECTED_CLASS = 'ck-template_selected';

const DECORATOR_MANUAL = 'manual';

/**
 * The link engine feature.
 *
 * It introduces the `templateVar="url"` attribute in the model which renders to the view as a `<a href="url">` element
 * as well as `'template'` and `'unlink'` commands.
 *
 * @extends module:core/plugin~Plugin
 */
export default class TemplateEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'TextTemplateEditing';
	}

	/**
	 * @inheritDoc
	 */
	static get requires() {
		// Clipboard is required for handling cut and paste events while typing over the link.
		return [ TwoStepCaretMovement, Input, ClipboardPipeline ];
	}

	/**
	 * @inheritDoc
	 */
	constructor( editor ) {
		super( editor );

		editor.config.define( 'template', {
			addTargetToExternalLinks: false
		} );
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow link attribute on all inline nodes.
		editor.model.schema.extend( '$text', { allowAttributes: 'templateVar' } );

		editor.conversion.for( 'dataDowncast' )
			.attributeToElement( { model: 'templateVar', view: createTemplateElement } );

		editor.conversion.for( 'editingDowncast' )
			.attributeToElement( { model: 'templateVar', view: ( id, conversionApi ) => {
				console.log(id);
				return createTemplateElement(  id , conversionApi );
			} } );

		editor.conversion.for( 'upcast' )
			.elementToAttribute( {
				view: {
					name: 'span',
					attributes: {
						id: true
					}
				},
				model: {
					key: 'templateVar',
					value: viewElement => viewElement.getAttribute( 'id' )
				}
			} );

		// Create linking commands.
		editor.commands.add( 'template', new TemplateCommand( editor ) );
		editor.commands.add( 'canceltemplate', new CancelTemplateCommand( editor ) );

		// const linkDecorators = getLocalizedDecorators( editor.t, normalizeDecorators( editor.config.get( 'link.decorators' ) ) );
		//
		//
		// this._enableManualDecorators( linkDecorators.filter( item => item.mode === DECORATOR_MANUAL ) );

		// Enable two-step caret movement for `templateVar` attribute.
		const twoStepCaretMovementPlugin = editor.plugins.get( TwoStepCaretMovement );
		twoStepCaretMovementPlugin.registerAttribute( 'templateVar' );

		// Setup highlight over selected link.
		inlineHighlight( editor, 'templateVar', 'span', HIGHLIGHT_SELECTED_CLASS );

		// Change the attributes of the selection in certain situations after the link was inserted into the document.
		this._enableInsertContentSelectionAttributesFixer();

		// Handle a click at the beginning/end of a link element.
		this._enableClickingAfterLink();

		// Handle typing over the link.
		this._enableTypingOverLink();

		// Handle removing the content after the link element.
		this._handleDeleteContentAfterLink();
	}


	/**
	 * Processes an array of configured {@link module:link/link~LinkDecoratorManualDefinition manual decorators},
	 * transforms them into {@link module:link/utils~ManualDecorator} instances and stores them in the
	 * {@link module:link/linkcommand~TemplateCommand#manualDecorators} collection (a model for manual decorators state).
	 *
	 * Also registers an {@link module:engine/conversion/downcasthelpers~DowncastHelpers#attributeToElement attribute-to-element}
	 * converter for each manual decorator and extends the {@link module:engine/model/schema~Schema model's schema}
	 * with adequate model attributes.
	 *
	 * @private
	 * @param {Array.<module:link/link~LinkDecoratorManualDefinition>} manualDecoratorDefinitions
	 */
	_enableManualDecorators( manualDecoratorDefinitions ) {
		if ( !manualDecoratorDefinitions.length ) {
			return;
		}

		const editor = this.editor;
		const command = editor.commands.get( 'template' );
		const manualDecorators = command.manualDecorators;

		manualDecoratorDefinitions.forEach( decorator => {
			editor.model.schema.extend( '$text', { allowAttributes: decorator.id } );

			// Keeps reference to manual decorator to decode its name to attributes during downcast.
			manualDecorators.add( new ManualDecorator( decorator ) );

			editor.conversion.for( 'downcast' ).attributeToElement( {

				model: decorator.id,
				view: ( manualDecoratorName, { writer } ) => {
					if ( manualDecoratorName ) {
						const attributes = manualDecorators.get( decorator.id ).attributes;
						const element = writer.createAttributeElement( 'span', attributes, { priority: 5 } );
						writer.setCustomProperty( 'template', true, element );
						console.log('id');
						return element;
					}
				} } );

			editor.conversion.for( 'upcast' ).elementToAttribute( {
				view: {
					name: 'span',
					attributes: manualDecorators.get( decorator.id ).attributes
				},
				model: {
					key: decorator.id
				}
			} );
		} );
	}

	/**
	 * Starts listening to {@link module:engine/model/model~Model#event:insertContent} and corrects the model
	 * selection attributes if the selection is at the end of a link after inserting the content.
	 *
	 * The purpose of this action is to improve the overall UX because the user is no longer "trapped" by the
	 * `templateVar` attribute of the selection and they can type a "clean" (`templateVar`–less) text right away.
	 *
	 * See https://github.com/ckeditor/ckeditor5/issues/6053.
	 *
	 * @private
	 */
	_enableInsertContentSelectionAttributesFixer() {
		const editor = this.editor;
		const model = editor.model;
		const selection = model.document.selection;
		const linkCommand = editor.commands.get( 'template' );

		this.listenTo( model, 'insertContent', () => {
			const nodeBefore = selection.anchor.nodeBefore;
			const nodeAfter = selection.anchor.nodeAfter;

			// NOTE: ↰ and ↱ represent the gravity of the selection.

			// The only truly valid case is:
			//
			//		                                 ↰
			//		...<$text templateVar="foo">INSERTED[]</$text>
			//
			// If the selection is not "trapped" by the `templateVar` attribute after inserting, there's nothing
			// to fix there.
			if ( !selection.hasAttribute( 'templateVar' ) ) {
				return;
			}

			// Filter out the following case where a link with the same href (e.g. <a href="foo">INSERTED</a>) is inserted
			// in the middle of an existing link:
			//
			// Before insertion:
			//		                       ↰
			//		<$text templateVar="foo">l[]ink</$text>
			//
			// Expected after insertion:
			//		                               ↰
			//		<$text templateVar="foo">lINSERTED[]ink</$text>
			//
			if ( !nodeBefore ) {
				return;
			}

			// Filter out the following case where the selection has the "templateVar" attribute because the
			// gravity is overridden and some text with another attribute (e.g. <b>INSERTED</b>) is inserted:
			//
			// Before insertion:
			//
			//		                       ↱
			//		<$text templateVar="foo">[]link</$text>
			//
			// Expected after insertion:
			//
			//		                                                          ↱
			//		<$text bold="true">INSERTED</$text><$text templateVar="foo">[]link</$text>
			//
			if ( !nodeBefore.hasAttribute( 'templateVar' ) ) {
				return;
			}

			// Filter out the following case where a link is a inserted in the middle (or before) another link
			// (different URLs, so they will not merge). In this (let's say weird) case, we can leave the selection
			// attributes as they are because the user will end up writing in one link or another anyway.
			//
			// Before insertion:
			//
			//		                       ↰
			//		<$text templateVar="foo">l[]ink</$text>
			//
			// Expected after insertion:
			//
			//		                                                             ↰
			//		<$text templateVar="foo">l</$text><$text templateVar="bar">INSERTED[]</$text><$text templateVar="foo">ink</$text>
			//
			if ( nodeAfter && nodeAfter.hasAttribute( 'templateVar' ) ) {
				return;
			}

			model.change( writer => {
				removeLinkAttributesFromSelection( writer, linkCommand.manualDecorators );
			} );
		}, { priority: 'low' } );
	}

	/**
	 * Starts listening to {@link module:engine/view/document~Document#event:mousedown} and
	 * {@link module:engine/view/document~Document#event:selectionChange} and puts the selection before/after a link node
	 * if clicked at the beginning/ending of the link.
	 *
	 * The purpose of this action is to allow typing around the link node directly after a click.
	 *
	 * See https://github.com/ckeditor/ckeditor5/issues/1016.
	 *
	 * @private
	 */
	_enableClickingAfterLink() {
		const editor = this.editor;
		const linkCommand = editor.commands.get( 'template' );

		editor.editing.view.addObserver( MouseObserver );

		let clicked = false;

		// Detect the click.
		this.listenTo( editor.editing.view.document, 'mousedown', () => {
			clicked = true;
		} );

		// When the selection has changed...
		this.listenTo( editor.editing.view.document, 'selectionChange', () => {
			if ( !clicked ) {
				return;
			}

			// ...and it was caused by the click...
			clicked = false;

			const selection = editor.model.document.selection;

			// ...and no text is selected...
			if ( !selection.isCollapsed ) {
				return;
			}

			// ...and clicked text is the link...
			if ( !selection.hasAttribute( 'templateVar' ) ) {
				return;
			}

			const position = selection.getFirstPosition();
			const linkRange = findAttributeRange( position, 'templateVar', selection.getAttribute( 'templateVar' ), editor.model );

			// ...check whether clicked start/end boundary of the link.
			// If so, remove the `templateVar` attribute.
			if ( position.isTouching( linkRange.start ) || position.isTouching( linkRange.end ) ) {
				editor.model.change( writer => {
					removeLinkAttributesFromSelection( writer, linkCommand.manualDecorators );
				} );
			}
		} );
	}

	/**
	 * Starts listening to {@link module:engine/model/model~Model#deleteContent} and {@link module:engine/model/model~Model#insertContent}
	 * and checks whether typing over the link. If so, attributes of removed text are preserved and applied to the inserted text.
	 *
	 * The purpose of this action is to allow modifying a text without loosing the `templateVar` attribute (and other).
	 *
	 * See https://github.com/ckeditor/ckeditor5/issues/4762.
	 *
	 * @private
	 */
	_enableTypingOverLink() {
		const editor = this.editor;
		const view = editor.editing.view;

		// Selection attributes when started typing over the link.
		let selectionAttributes;

		// Whether pressed `Backspace` or `Delete`. If so, attributes should not be preserved.
		let deletedContent;

		// Detect pressing `Backspace` / `Delete`.
		this.listenTo( view.document, 'delete', () => {
			deletedContent = true;
		}, { priority: 'high' } );

		// Listening to `model#deleteContent` allows detecting whether selected content was a link.
		// If so, before removing the element, we will copy its attributes.
		this.listenTo( editor.model, 'deleteContent', () => {
			const selection = editor.model.document.selection;

			// Copy attributes only if anything is selected.
			if ( selection.isCollapsed ) {
				return;
			}

			// When the content was deleted, do not preserve attributes.
			if ( deletedContent ) {
				deletedContent = false;

				return;
			}

			// Enabled only when typing.
			if ( !isTyping( editor ) ) {
				return;
			}

			if ( shouldCopyAttributes( editor.model ) ) {
				selectionAttributes = selection.getAttributes();
			}
		}, { priority: 'high' } );

		// Listening to `model#insertContent` allows detecting the content insertion.
		// We want to apply attributes that were removed while typing over the link.
		this.listenTo( editor.model, 'insertContent', ( evt, [ element ] ) => {
			deletedContent = false;

			// Enabled only when typing.
			if ( !isTyping( editor ) ) {
				return;
			}

			if ( !selectionAttributes ) {
				return;
			}

			editor.model.change( writer => {
				for ( const [ attribute, value ] of selectionAttributes ) {
					writer.setAttribute( attribute, value, element );
				}
			} );

			selectionAttributes = null;
		}, { priority: 'high' } );
	}

	/**
	 * Starts listening to {@link module:engine/model/model~Model#deleteContent} and checks whether
	 * removing a content right after the "templateVar" attribute.
	 *
	 * If so, the selection should not preserve the `templateVar` attribute. However, if
	 * the {@link module:typing/twostepcaretmovement~TwoStepCaretMovement} plugin is active and
	 * the selection has the "templateVar" attribute due to overriden gravity (at the end), the `templateVar` attribute should stay untouched.
	 *
	 * The purpose of this action is to allow removing the link text and keep the selection outside the link.
	 *
	 * See https://github.com/ckeditor/ckeditor5/issues/7521.
	 *
	 * @private
	 */
	_handleDeleteContentAfterLink() {
		const editor = this.editor;
		const model = editor.model;
		const selection = model.document.selection;
		const view = editor.editing.view;
		const linkCommand = editor.commands.get( 'template' );

		// A flag whether attributes `templateVar` attribute should be preserved.
		let shouldPreserveAttributes = false;

		// A flag whether the `Backspace` key was pressed.
		let hasBackspacePressed = false;

		// Detect pressing `Backspace`.
		this.listenTo( view.document, 'delete', ( evt, data ) => {
			hasBackspacePressed = data.domEvent.keyCode === keyCodes.backspace;
		}, { priority: 'high' } );

		// Before removing the content, check whether the selection is inside a link or at the end of link but with 2-SCM enabled.
		// If so, we want to preserve link attributes.
		this.listenTo( model, 'deleteContent', () => {
			// Reset the state.
			shouldPreserveAttributes = false;

			const position = selection.getFirstPosition();
			const templateVar = selection.getAttribute( 'templateVar' );

			if ( !templateVar ) {
				return;
			}

			const linkRange = findAttributeRange( position, 'templateVar', templateVar, model );

			// Preserve `templateVar` attribute if the selection is in the middle of the link or
			// the selection is at the end of the link and 2-SCM is activated.
			shouldPreserveAttributes = linkRange.containsPosition( position ) || linkRange.end.isEqual( position );
		}, { priority: 'high' } );

		// After removing the content, check whether the current selection should preserve the `templateVar` attribute.
		this.listenTo( model, 'deleteContent', () => {
			// If didn't press `Backspace`.
			if ( !hasBackspacePressed ) {
				return;
			}

			hasBackspacePressed = false;

			// Disable the mechanism if inside a link (`<$text url="foo">F[]oo</$text>` or <$text url="foo">Foo[]</$text>`).
			if ( shouldPreserveAttributes ) {
				return;
			}

			// Use `model.enqueueChange()` in order to execute the callback at the end of the changes process.
			editor.model.enqueueChange( writer => {
				removeLinkAttributesFromSelection( writer, linkCommand.manualDecorators );
			} );
		}, { priority: 'low' } );
	}
}

// Make the selection free of link-related model attributes.
// All link-related model attributes start with "link". That includes not only "templateVar"
// but also all decorator attributes (they have dynamic names).
//
// @param {module:engine/model/writer~Writer} writer
// @param {module:utils/collection~Collection} manualDecorators
function removeLinkAttributesFromSelection( writer, manualDecorators ) {
	writer.removeSelectionAttribute( 'templateVar' );

	for ( const decorator of manualDecorators ) {
		writer.removeSelectionAttribute( decorator.id );
	}
}

// Checks whether selection's attributes should be copied to the new inserted text.
//
// @param {module:engine/model/model~Model} model
// @returns {Boolean}
function shouldCopyAttributes( model ) {
	const selection = model.document.selection;
	const firstPosition = selection.getFirstPosition();
	const lastPosition = selection.getLastPosition();
	const nodeAtFirstPosition = firstPosition.nodeAfter;

	// The text link node does not exist...
	if ( !nodeAtFirstPosition ) {
		return false;
	}

	// ...or it isn't the text node...
	if ( !nodeAtFirstPosition.is( '$text' ) ) {
		return false;
	}

	// ...or isn't the link.
	if ( !nodeAtFirstPosition.hasAttribute( 'templateVar' ) ) {
		return false;
	}

	// `textNode` = the position is inside the link element.
	// `nodeBefore` = the position is at the end of the link element.
	const nodeAtLastPosition = lastPosition.textNode || lastPosition.nodeBefore;

	// If both references the same node selection contains a single text node.
	if ( nodeAtFirstPosition === nodeAtLastPosition ) {
		return true;
	}

	// If nodes are not equal, maybe the link nodes has defined additional attributes inside.
	// First, we need to find the entire link range.
	const linkRange = findAttributeRange( firstPosition, 'templateVar', nodeAtFirstPosition.getAttribute( 'templateVar' ), model );

	// Then we can check whether selected range is inside the found link range. If so, attributes should be preserved.
	return linkRange.containsRange( model.createRange( firstPosition, lastPosition ), true );
}

// Checks whether provided changes were caused by typing.
//
// @params {module:core/editor/editor~Editor} editor
// @returns {Boolean}
function isTyping( editor ) {
	const input = editor.plugins.get( 'Input' );

	return input.isInput( editor.model.change( writer => writer.batch ) );
}
