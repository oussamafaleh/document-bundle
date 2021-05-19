/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/linkcommand
 */

import  Command  from '@ckeditor/ckeditor5-core/src/command';
import  findAttributeRange  from '@ckeditor/ckeditor5-typing/src/utils/findattributerange';
import { Collection, toMap, first } from '@ckeditor/ckeditor5-utils/src/';

import AutomaticDecorators from './utils/automaticdecorators';
import { isImageAllowed } from './utils';

/**
 * The link command. It is used by the {@link module:link/link~Link link feature}.
 *
 * @extends module:core/command~Command
 */
export default class TemplateCommand extends Command {
	/**
	 * The value of the `'linkHref'` attribute if the start of the selection is located in a node with this attribute.
	 *
	 * @observable
	 * @readonly
	 * @member {Object|undefined} #value
	 */

	constructor( editor ) {
		super( editor );

		/**
		 * A collection of {@link module:link/utils~ManualDecorator manual decorators}
		 * corresponding to the {@link module:link/link~LinkConfig#decorators decorator configuration}.
		 *
		 * You can consider it a model with states of manual decorators added to the currently selected link.
		 *
		 * @readonly
		 * @type {module:utils/collection~Collection}
		 */
		this.manualDecorators = new Collection();



	}

	/**
	 * Synchronizes the state of {@link #manualDecorators} with the currently present elements in the model.
	 */
	restoreManualDecoratorStates() {
		console.log(this.manualDecorators );
		for ( const manualDecorator of this.manualDecorators ) {
			manualDecorator.value = this._getDecoratorStateFromModel( manualDecorator.id );
		}
	}

	/**
	 * @inheritDoc
	 */
	refresh() {
		const model = this.editor.model;
		const doc = model.document;

		const selectedElement = first( doc.selection.getSelectedBlocks() );

		// A check for the `LinkImage` plugin. If the selection contains an element, get values from the element.
		// Currently the selection reads attributes from text nodes only. See #7429 and #7465.
		if ( isImageAllowed( selectedElement, model.schema ) ) {
			this.value = selectedElement.getAttribute( 'templateVar' );
			this.isEnabled = model.schema.checkAttribute( selectedElement, 'templateVar' );
		} else {
			this.value = doc.selection.getAttribute( 'templateVar' );
			this.isEnabled = model.schema.checkAttributeInSelection( doc.selection, 'templateVar' );
		}

		for ( const manualDecorator of this.manualDecorators ) {
			manualDecorator.value = this._getDecoratorStateFromModel( manualDecorator.id );
		}
	}

	/**
	 * Executes the command.
	 *
	 * When the selection is non-collapsed, the `linkHref` attribute will be applied to nodes inside the selection, but only to
	 * those nodes where the `linkHref` attribute is allowed (disallowed nodes will be omitted).
	 *
	 * When the selection is collapsed and is not inside the text with the `linkHref` attribute, a
	 * new {@link module:engine/model/text~Text text node} with the `linkHref` attribute will be inserted in place of the caret, but
	 * only if such element is allowed in this place. The `_data` of the inserted text will equal the `href` parameter.
	 * The selection will be updated to wrap the just inserted text node.
	 *
	 * When the selection is collapsed and inside the text with the `linkHref` attribute, the attribute value will be updated.
	 *
	 * # Decorators and model attribute management
	 *
	 * There is an optional argument to this command that applies or removes model
	 * {@glink framework/guides/architecture/editing-engine#text-attributes text attributes} brought by
	 * {@link module:link/utils~ManualDecorator manual link decorators}.
	 *
	 * Text attribute names in the model correspond to the entries in the {@link module:link/link~LinkConfig#decorators configuration}.
	 * For every decorator configured, a model text attribute exists with the "link" prefix. For example, a `'linkMyDecorator'` attribute
	 * corresponds to `'myDecorator'` in the configuration.
	 *
	 * To learn more about link decorators, check out the {@link module:link/link~LinkConfig#decorators `config.link.decorators`}
	 * documentation.
	 *
	 * Here is how to manage decorator attributes with the link command:
	 *
	 *		const linkCommand = editor.commands.get( 'link' );
	 *
	 *		// Adding a new decorator attribute.
	 *		linkCommand.execute( 'http://example.com', {
	 *			linkIsExternal: true
	 *		} );
	 *
	 *		// Removing a decorator attribute from the selection.
	 *		linkCommand.execute( 'http://example.com', {
	 *			linkIsExternal: false
	 *		} );
	 *
	 *		// Adding multiple decorator attributes at the same time.
	 *		linkCommand.execute( 'http://example.com', {
	 *			linkIsExternal: true,
	 *			linkIsDownloadable: true,
	 *		} );
	 *
	 *		// Removing and adding decorator attributes at the same time.
	 *		linkCommand.execute( 'http://example.com', {
	 *			linkIsExternal: false,
	 *			linkFoo: true,
	 *			linkIsDownloadable: false,
	 *		} );
	 *
	 * **Note**: If the decorator attribute name is not specified, its state remains untouched.
	 *
	 * **Note**: {@link module:link/unlinkcommand~UnlinkCommand#execute `Canceltemplatecommand#execute()`} removes all
	 * decorator attributes.
	 *
	 * @fires execute
	 * @param {Object} templateVar Template destination.
	 * @param {Object} [manualDecoratorIds={}] The information about manual decorator attributes to be applied or removed upon execution.
	 */
	execute( templateVar, manualDecoratorIds = {} ) {
		console.log(templateVar);
		console.log(manualDecoratorIds);
		const model = this.editor.model;
		const selection = model.document.selection;
		// Stores information about manual decorators to turn them on/off when command is applied.
		const truthyManualDecorators = [];
		const falsyManualDecorators = [];

		for ( const name in manualDecoratorIds ) {
			if ( manualDecoratorIds[ name ] ) {
				truthyManualDecorators.push( name );
			} else {
				falsyManualDecorators.push( name );
			}
		}

		model.change( writer => {
			// If selection is collapsed then update selected link or insert new one at the place of caret.
			if ( selection.isCollapsed ) {
				const position = selection.getFirstPosition();

				// When selection is inside text with `linkHref` attribute.
				if ( selection.hasAttribute( 'templateVar' ) ) {
					// Then update `linkHref` value.
					const varRange = findAttributeRange( position, 'templateVar', selection.getAttribute( 'templateVar' ), model );

					writer.setAttribute( 'templateVar', templateVar.id, varRange );
					model.schema.setAttributeProperties( 'templateVar', {
						type: templateVar.type
					} );


					truthyManualDecorators.forEach( item => {
						writer.setAttribute( item, true, varRange );
					} );

					falsyManualDecorators.forEach( item => {
						writer.removeAttribute( item, varRange );
					} );

					// Put the selection at the end of the updated link.
					writer.setSelection( writer.createPositionAfter( varRange.end.nodeBefore ) );
				}
				// If not then insert text node with `linkHref` attribute in place of caret.
				// However, since selection is collapsed, attribute value will be used as data for text node.
				// So, if `templateVar.label` is empty, do not create text node.
				else if ( templateVar.id !== '' ) {
					const attributes = toMap( selection.getAttributes() );

					attributes.set( 'templateVar', templateVar.id );
					model.schema.setAttributeProperties( 'templateVar', {
						type: templateVar.type
					} );
					truthyManualDecorators.forEach( item => {
						attributes.set( item, true );
					} );

					const { end: positionAfter } = model.insertContent( writer.createText( templateVar.id, attributes ), position );

					// Put the selection at the end of the inserted link.
					// Using end of range returned from insertContent in case nodes with the same attributes got merged.
					writer.setSelection( positionAfter );
				}

				// Remove the `linkHref` attribute and all link decorators from the selection.
				// It stops adding a new content into the link element.
				[ 'templateVar', ...truthyManualDecorators, ...falsyManualDecorators ].forEach( item => {
					writer.removeSelectionAttribute( item );
				} );
			} else {
				// If selection has non-collapsed ranges, we change attribute on nodes inside those ranges
				// omitting nodes where the `linkHref` attribute is disallowed.
				const ranges = model.schema.getValidRanges( selection.getRanges(), 'templateVar' );

				// But for the first, check whether the `linkHref` attribute is allowed on selected blocks (e.g. the "image" element).
				const allowedRanges = [];

				for ( const element of selection.getSelectedBlocks() ) {
					if ( model.schema.checkAttribute( element, 'templateVar' ) ) {
						allowedRanges.push( writer.createRangeOn( element ) );
					}
				}

				// Ranges that accept the `linkHref` attribute. Since we will iterate over `allowedRanges`, let's clone it.
				const rangesToUpdate = allowedRanges.slice();

				// For all selection ranges we want to check whether given range is inside an element that accepts the `linkHref` attribute.
				// If so, we don't want to propagate applying the attribute to its children.
				for ( const range of ranges ) {
					if ( this._isRangeToUpdate( range, allowedRanges ) ) {
						rangesToUpdate.push( range );
					}
				}

				for ( const range of rangesToUpdate ) {
					writer.setAttribute( 'templateVar', templateVar.id, range );
					model.schema.setAttributeProperties( 'templateVar', {
						type: templateVar.type
					} );

					truthyManualDecorators.forEach( item => {
						writer.setAttribute( item, true, range );
					} );

					falsyManualDecorators.forEach( item => {
						writer.removeAttribute( item, range );
					} );
				}
			}
		} );
	}

	/**
	 * Provides information whether a decorator with a given name is present in the currently processed selection.
	 *
	 * @private
	 * @param {String} decoratorName The name of the manual decorator used in the model
	 * @returns {Boolean} The information whether a given decorator is currently present in the selection.
	 */
	_getDecoratorStateFromModel( decoratorName ) {
		const model = this.editor.model;
		const doc = model.document;

		const selectedElement = first( doc.selection.getSelectedBlocks() );

		// A check for the `LinkImage` plugin. If the selection contains an element, get values from the element.
		// Currently the selection reads attributes from text nodes only. See #7429 and #7465.
		if ( isImageAllowed( selectedElement, model.schema ) ) {
			return selectedElement.getAttribute( decoratorName );
		}

		return doc.selection.getAttribute( decoratorName );
	}

	/**
	 * Checks whether specified `range` is inside an element that accepts the `linkHref` attribute.
	 *
	 * @private
	 * @param {module:engine/view/range~Range} range A range to check.
	 * @param {Array.<module:engine/view/range~Range>} allowedRanges An array of ranges created on elements where the attribute is accepted.
	 * @returns {Boolean}
	 */
	_isRangeToUpdate( range, allowedRanges ) {
		for ( const allowedRange of allowedRanges ) {
			// A range is inside an element that will have the `linkHref` attribute. Do not modify its nodes.
			if ( allowedRange.containsRange( range ) ) {
				return false;
			}
		}

		return true;
	}
}
