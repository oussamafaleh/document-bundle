/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/ui/linkactionsview
 */

import { ButtonView, View, ViewCollection, FocusCycler } from '@ckeditor/ckeditor5-ui/src';
import { FocusTracker, KeystrokeHandler } from '@ckeditor/ckeditor5-utils/src';
import { icons } from '@ckeditor/ckeditor5-core/src';

import { ensureSafeUrl } from '../utils';

// See: #8833.
// eslint-disable-next-line ckeditor5-rules/ckeditor-imports
import '@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css';
import '../../theme/templateactions.css';

import unlinkIcon from '../../theme/icons/unlink.svg';

/**
 * The link actions view class. This view displays the link preview, allows
 * unlinking or editing the link.
 *
 * @extends module:ui/view~View
 */
export default class TemplateActionsView extends View {
	/**
	 * @inheritDoc
	 */
	constructor( locale ) {
		super( locale );

		const t = locale.t;

		/**
		 * Tracks information about DOM focus in the actions.
		 *
		 * @readonly
		 * @member {module:utils/focustracker~FocusTracker}
		 */
		this.focusTracker = new FocusTracker();

		/**
		 * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
		 *
		 * @readonly
		 * @member {module:utils/keystrokehandler~KeystrokeHandler}
		 */
		this.keystrokes = new KeystrokeHandler();

		/**
		 * The href preview view.
		 *
		 * @member {module:ui/view~View}
		 */
		this.previewButtonView = this._createPreviewButton();

		/**
		 * The unlink button view.
		 *
		 * @member {module:ui/button/buttonview~ButtonView}
		 */
		this.unlinkButtonView = this._createButton( t( 'Cancel Template Var' ), unlinkIcon, 'cancelTemplate' );

		/**
		 * The edit link button view.
		 *
		 * @member {module:ui/button/buttonview~ButtonView}
		 */
		this.editButtonView = this._createButton( t( 'Edit Template Var' ), icons.pencil, 'edit' );

		/**
		 * The value of the "href" attribute of the link to use in the {@link #previewButtonView}.
		 *
		 * @observable
		 * @member {String}
		 */
		this.set( 'data-template-var' );

		/**
		 * A collection of views that can be focused in the view.
		 *
		 * @readonly
		 * @protected
		 * @member {module:ui/viewcollection~ViewCollection}
		 */
		this._focusables = new ViewCollection();

		/**
		 * Helps cycling over {@link #_focusables} in the view.
		 *
		 * @readonly
		 * @protected
		 * @member {module:ui/focuscycler~FocusCycler}
		 */
		this._focusCycler = new FocusCycler( {
			focusables: this._focusables,
			focusTracker: this.focusTracker,
			keystrokeHandler: this.keystrokes,
			actions: {
				// Navigate fields backwards using the Shift + Tab keystroke.
				focusPrevious: 'shift + tab',

				// Navigate fields forwards using the Tab key.
				focusNext: 'tab'
			}
		} );

		this.setTemplate( {
			tag: 'div',

			attributes: {
				class: [
					'ck',
					'ck-link-actions',
					'ck-responsive-form'
				],

				// https://github.com/ckeditor/ckeditor5-link/issues/90
				tabindex: '-1'
			},

			children: [
				this.previewButtonView,
				this.editButtonView,
				this.unlinkButtonView
			]
		} );
	}

	/**
	 * @inheritDoc
	 */
	render() {
		super.render();

		const childViews = [
			this.previewButtonView,
			this.editButtonView,
			this.unlinkButtonView
		];

		childViews.forEach( v => {
			// Register the view as focusable.
			this._focusables.add( v );

			// Register the view in the focus tracker.
			this.focusTracker.add( v.element );
		} );

		// Start listening for the keystrokes coming from #element.
		this.keystrokes.listenTo( this.element );
	}

	/**
	 * Focuses the fist {@link #_focusables} in the actions.
	 */
	focus() {
		this._focusCycler.focusFirst();
	}

	/**
	 * Creates a button view.
	 *
	 * @private
	 * @param {String} label The button label.
	 * @param {String} icon The button icon.
	 * @param {String} [eventName] An event name that the `ButtonView#execute` event will be delegated to.
	 * @returns {module:ui/button/buttonview~ButtonView} The button view instance.
	 */
	_createButton( label, icon, eventName ) {
		const button = new ButtonView( this.locale );

		button.set( {
			label,
			icon,
			tooltip: true
		} );

		button.delegate( 'execute' ).to( this, eventName );

		return button;
	}

	/**
	 * Creates a link href preview button.
	 *
	 * @private
	 * @returns {module:ui/button/buttonview~ButtonView} The button view instance.
	 */
	_createPreviewButton() {
		const button = new ButtonView( this.locale );
		const bind = this.bindTemplate;
		const t = this.t;

		button.set( {
			withText: true,
			tooltip: t( 'template valiable id' )
		} );

		button.extendTemplate( {
			attributes: {
				class: [
					'ck',
					'ck-link-actions__preview'
				],
				id: bind.to( 'data-template-var', id => id  ) ,
				target: '_blank',
				rel: 'noopener noreferrer'
			}
		} );

		button.bind( 'label' ).to( this, 'data-template-var', id => {
			return id || t( 'This variable has no id' );
		} );

		button.bind( 'isEnabled' ).to( this, 'data-template-var', id => !!id );

		button.template.tag = 'span';
		button.template.eventListeners = {};

		return button;
	}
}

/**
 * Fired when the {@link #editButtonView} is clicked.
 *
 * @event edit
 */

/**
 * Fired when the {@link #unlinkButtonView} is clicked.
 *
 * @event unlink
 */
