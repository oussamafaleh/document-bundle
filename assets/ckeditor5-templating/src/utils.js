/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/utils
 */

import { upperFirst } from 'lodash-es';

const ATTRIBUTE_WHITESPACES = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g; // eslint-disable-line no-control-regex
const SAFE_URL = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;

// Simplified email test - should be run over previously found URL.
const EMAIL_REG_EXP = /^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i;

// The regex checks for the protocol syntax ('xxxx://' or 'xxxx:')
// or non-word characters at the beginning of the link ('/', '#' etc.).
const PROTOCOL_REG_EXP = /^((\w+:(\/{2,})?)|(\W))/i;
const HIGHLIGHT_CLASS = 'ck-template';
/**
 * A keystroke used by the {@link module:link/linkui~TemplateUi link UI feature}.
 */
export const TEMPLATE_KEYSTROKE = 'Ctrl+E';
export const SAVE_KEYSTROKE = 'Ctrl+Shift+S';

/**
 * Returns `true` if a given view node is the link element.
 *
 * @param {module:engine/view/node~Node} node
 * @returns {Boolean}
 */
export function isLinkElement( node ) {
	return node.is( 'attributeElement' ) && !!node.getCustomProperty( 'template' );
}

/**
 * Creates a link {@link module:engine/view/attributeelement~AttributeElement} with the provided `href` attribute.
 *
 * @param {String} href
 * @param {module:engine/conversion/downcastdispatcher~DowncastConversionApi} conversionApi
 * @returns {module:engine/view/attributeelement~AttributeElement}
 */
export function createTemplateElement( id, { writer } ) {
	//if(id !== null){

		// Priority 5 - https://github.com/ckeditor/ckeditor5-link/issues/121.
		const linkElement = writer.createAttributeElement( 'span',  { class: HIGHLIGHT_CLASS , 'data-template-var' : id }, { priority: 5 } );
		writer.setCustomProperty( 'template', true, linkElement );

		return linkElement;
	//}
}

/**
 * Returns a safe URL based on a given value.
 *
 * A URL is considered safe if it is safe for the user (does not contain any malicious code).
 *
 * If a URL is considered unsafe, a simple `"#"` is returned.
 *
 * @protected
 * @param {*} url
 * @returns {String} Safe URL.
 */
export function ensureSafeUrl( url ) {
	url = String( url );

	return isSafeUrl( url ) ? url : '#';
}

// Checks whether the given URL is safe for the user (does not contain any malicious code).
//
// @param {String} url URL to check.
function isSafeUrl( url ) {
	const normalizedUrl = url.replace( ATTRIBUTE_WHITESPACES, '' );

	return normalizedUrl.match( SAFE_URL );
}

/**
 * Returns the {@link module:link/link~LinkConfig#decorators `config.link.decorators`} configuration processed
 * to respect the locale of the editor, i.e. to display the {@link module:link/link~LinkDecoratorManualDefinition label}
 * in the correct language.
 *
 * **Note**: Only the few most commonly used labels are translated automatically. Other labels should be manually
 * translated in the {@link module:link/link~LinkConfig#decorators `config.link.decorators`} configuration.
 *
 * @param {module:utils/locale~Locale#t} t shorthand for {@link module:utils/locale~Locale#t Locale#t}
 * @param {Array.<module:link/link~LinkDecoratorDefinition>} The decorator reference
 * where the label values should be localized.
 * @returns {Array.<module:link/link~LinkDecoratorDefinition>}
 */
export function getLocalizedDecorators( t, decorators ) {
	const localizedDecoratorsLabels = {
		'Open in a new tab': t( 'Open in a new tab' ),
		'Downloadable': t( 'Downloadable' )
	};

	decorators.forEach( decorator => {
		if ( decorator.label && localizedDecoratorsLabels[ decorator.label ] ) {
			decorator.label = localizedDecoratorsLabels[ decorator.label ];
		}
		return decorator;
	} );

	return decorators;
}

/**
 * Converts an object with defined decorators to a normalized array of decorators. The `id` key is added for each decorator and
 * is used as the attribute's name in the model.
 *
 * @param {Object.<String, module:link/link~LinkDecoratorDefinition>} decorators
 * @returns {Array.<module:link/link~LinkDecoratorDefinition>}
 */
export function normalizeDecorators( decorators ) {
	const retArray = [];

	if ( decorators ) {
		for ( const [ key, value ] of Object.entries( decorators ) ) {
			const decorator = Object.assign(
				{},
				value,
				{ id: `link${ upperFirst( key ) }` }
			);
			retArray.push( decorator );
		}
	}

	return retArray;
}

/**
 * Returns `true` if the specified `element` is an image and it can be linked (the element allows having the `linkHref` attribute).
 *
 * @params {module:engine/model/element~Element|null} element
 * @params {module:engine/model/schema~Schema} schema
 * @returns {Boolean}
 */
export function isImageAllowed( element, schema ) {
	if ( !element ) {
		return false;
	}

	return element.is( 'element', 'image' ) && schema.checkAttribute( 'image', 'linkHref' );
}

/**
 * Returns `true` if the specified `value` is an email.
 *
 * @params {String} value
 * @returns {Boolean}
 */
export function isEmail( value ) {
	return EMAIL_REG_EXP.test( value );
}

/**
 * Adds the protocol prefix to the specified `link` when:
 *
 * * it does not contain it already, and there is a {@link module:link/link~LinkConfig#defaultProtocol `defaultProtocol` }
 * configuration value provided,
 * * or the link is an email address.
 *
 *
 * @params {String} link
 * @params {String} defaultProtocol
 * @returns {Boolean}
 */
export function addLinkProtocolIfApplicable( link, defaultProtocol ) {
	const protocol = isEmail( link ) ? 'mailto:' : defaultProtocol;
	const isProtocolNeeded = !!protocol && !PROTOCOL_REG_EXP.test( link );

	return link && isProtocolNeeded ? protocol + link : link;
}











/**
 * A plugin that converts custom attributes for elements that are wrapped in <figure> in the view.
 */
class CustomFigureAttributes {
	/**
	 * Plugin's constructor - receives an editor instance on creation.
	 */
	constructor( editor ) {
		// Save reference to the editor.
		this.editor = editor;
	}

	/**
	 * Sets the conversion up and extends the table & image features schema.
	 *
	 * Schema extending must be done in the "afterInit()" call because plugins define their schema in "init()".
	 */
	afterInit() {
		const editor = this.editor;

		// Define on which elements the CSS classes should be preserved:
		setupCustomClassConversion( 'img', 'image', editor );
		setupCustomClassConversion( 'table', 'table', editor );

		editor.conversion.for( 'upcast' ).add( upcastCustomClasses( 'figure' ), { priority: 'low' } );

		// Define custom attributes that should be preserved.
		setupCustomAttributeConversion( 'img', 'image', 'id', editor );
		setupCustomAttributeConversion( 'table', 'table', 'id', editor );
	}
}

/**
 * Sets up a conversion that preserves classes on <img> and <table> elements.
 */
function setupCustomClassConversion( viewElementName, modelElementName, editor ) {
	// The 'customClass' attribute stores custom classes from the data in the model so that schema definitions allow this attribute.
	editor.model.schema.extend( modelElementName, { allowAttributes: [ 'customClass' ] } );

	// Defines upcast converters for the <img> and <table> elements with a "low" priority so they are run after the default converters.
	editor.conversion.for( 'upcast' ).add( upcastCustomClasses( viewElementName ), { priority: 'low' } );

	// Defines downcast converters for a model element with a "low" priority so they are run after the default converters.
	// Use `downcastCustomClassesToFigure` if you want to keep your classes on <figure> element or `downcastCustomClassesToChild`
	// if you would like to keep your classes on a <figure> child element, i.e. <img>.
	editor.conversion.for( 'downcast' ).add( downcastCustomClassesToFigure( modelElementName ), { priority: 'low' } );
	// editor.conversion.for( 'downcast' ).add( downcastCustomClassesToChild( viewElementName, modelElementName ), { priority: 'low' } );
}

/**
 * Sets up a conversion for a custom attribute on the view elements contained inside a <figure>.
 *
 * This method:
 * - Adds proper schema rules.
 * - Adds an upcast converter.
 * - Adds a downcast converter.
 */
function setupCustomAttributeConversion( viewElementName, modelElementName, viewAttribute, editor ) {
	// Extends the schema to store an attribute in the model.
	const modelAttribute = `custom${ viewAttribute }`;

	editor.model.schema.extend( modelElementName, { allowAttributes: [ modelAttribute ] } );

	editor.conversion.for( 'upcast' ).add( upcastAttribute( viewElementName, viewAttribute, modelAttribute ) );
	editor.conversion.for( 'downcast' ).add( downcastAttribute( modelElementName, viewElementName, viewAttribute, modelAttribute ) );
}

/**
 * Creates an upcast converter that will pass all classes from the view element to the model element.
 */
function upcastCustomClasses( elementName ) {
	return dispatcher => dispatcher.on( `element:${ elementName }`, ( evt, data, conversionApi ) => {
		const viewItem = data.viewItem;
		const modelRange = data.modelRange;

		const modelElement = modelRange && modelRange.start.nodeAfter;

		if ( !modelElement ) {
			return;
		}

		// The upcast conversion picks up classes from the base element and from the <figure> element so it should be extensible.
		const currentAttributeValue = modelElement.getAttribute( 'customClass' ) || [];

		currentAttributeValue.push( ...viewItem.getClassNames() );

		conversionApi.writer.setAttribute( 'customClass', currentAttributeValue, modelElement );
	} );
}

/**
 * Creates a downcast converter that adds classes defined in the `customClass` attribute to a <figure> element.
 *
 * This converter expects that the view element is nested in a <figure> element.
 */
function downcastCustomClassesToFigure( modelElementName ) {
	return dispatcher => dispatcher.on( `insert:${ modelElementName }`, ( evt, data, conversionApi ) => {
		const modelElement = data.item;

		const viewFigure = conversionApi.mapper.toViewElement( modelElement );

		if ( !viewFigure ) {
			return;
		}

		// The code below assumes that classes are set on the <figure> element.
		conversionApi.writer.addClass( modelElement.getAttribute( 'customClass' ), viewFigure );
	} );
}

/**
 * Creates a downcast converter that adds classes defined in the `customClass` attribute to a <figure> child element.
 *
 * This converter expects that the view element is nested in a <figure> element.
 */
function downcastCustomClassesToChild( viewElementName, modelElementName ) {
	return dispatcher => dispatcher.on( `insert:${ modelElementName }`, ( evt, data, conversionApi ) => {
		const modelElement = data.item;

		const viewFigure = conversionApi.mapper.toViewElement( modelElement );

		if ( !viewFigure ) {
			return;
		}

		// The code below assumes that classes are set on the element inside the <figure>.
		const viewElement = findViewChild( viewFigure, viewElementName, conversionApi );

		conversionApi.writer.addClass( modelElement.getAttribute( 'customClass' ), viewElement );
	} );
}

/**
 * Helper method that searches for a given view element in all children of the model element.
 *
 * @param {module:engine/view/item~Item} viewElement
 * @param {String} viewElementName
 * @param {module:engine/conversion/downcastdispatcher~DowncastConversionApi} conversionApi
 * @return {module:engine/view/item~Item}
 */
function findViewChild( viewElement, viewElementName, conversionApi ) {
	const viewChildren = Array.from( conversionApi.writer.createRangeIn( viewElement ).getItems() );

	return viewChildren.find( item => item.is( 'element', viewElementName ) );
}

/**
 * Returns the custom attribute upcast converter.
 */
function upcastAttribute( viewElementName, viewAttribute, modelAttribute ) {
	return dispatcher => dispatcher.on( `element:${ viewElementName }`, ( evt, data, conversionApi ) => {
		const viewItem = data.viewItem;
		const modelRange = data.modelRange;

		const modelElement = modelRange && modelRange.start.nodeAfter;

		if ( !modelElement ) {
			return;
		}

		conversionApi.writer.setAttribute( modelAttribute, viewItem.getAttribute( viewAttribute ), modelElement );
	} );
}

/**
 * Returns the custom attribute downcast converter.
 */
function downcastAttribute( modelElementName, viewElementName, viewAttribute, modelAttribute ) {
	return dispatcher => dispatcher.on( `insert:${ modelElementName }`, ( evt, data, conversionApi ) => {
		const modelElement = data.item;

		const viewFigure = conversionApi.mapper.toViewElement( modelElement );
		const viewElement = findViewChild( viewFigure, viewElementName, conversionApi );

		if ( !viewElement ) {
			return;
		}

		conversionApi.writer.setAttribute( viewAttribute, modelElement.getAttribute( modelAttribute ), viewElement );
	} );
}
