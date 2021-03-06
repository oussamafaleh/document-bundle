import DecoupledEditorBase  from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Template from './ckeditor5-templating/src/template';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
    Essentials,
    Alignment,
    FontSize,
    FontFamily,
    FontColor,
    FontBackgroundColor,
    UploadAdapter,
    Autoformat,
    Bold,
    Italic,
    Strikethrough,
    Underline,
    BlockQuote,
    CKFinder,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    Table,
    TableToolbar,
    Template,
    PageBreak,
    CloudServices

];

// Editor configuration.
DecoupledEditor.defaultConfig = {
    toolbar: {
        items: [
            'template',
            '|',
            'heading',
            '|',
            'pageBreak',
            '|',
            'fontfamily',
            'fontsize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'alignment',
            '|',
            'numberedList',
            'bulletedList',
            '|',
            'indent',
            'outdent',
            '|',
            'blockquote',
            'imageUpload',
            'insertTable',
            'mediaEmbed',
            '|',
            'undo',
            'redo'
        ]
    },
    image: {
        styles: [
            'full',
            'alignLeft',
            'alignRight'
        ],
        toolbar: [
            'imageStyle:alignLeft',
            'imageStyle:full',
            'imageStyle:alignRight',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
};
