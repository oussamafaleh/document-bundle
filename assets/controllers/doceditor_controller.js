import {Controller} from 'stimulus';
import DecoupledEditor from '../DocDecoupledEditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import TextTemplating from '../texttemplating';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
//import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
export default class extends Controller {
    static targets = ["doc-variables"]


    connect() {

        DecoupledEditor
            .create(document.querySelector('.document-editor__editable'), {

                typing: {
                    transformations: {

                        extra: [
                            {
                                from: /(\[{2})([a-z]+)(\]{2})$/,
                                to: matches => [null, this.changeTemplateItem(matches), null]//  //
                            }
                        ],
                    }
                }

            })
            .then(editor => {


                CKEditorInspector.attach( editor );
                const toolbarContainer = document.querySelector('.document-editor__toolbar');
                toolbarContainer.appendChild(editor.ui.view.toolbar.element);


                window.editor = editor;
                this.editor = editor;

            })
            .catch(err => {
                console.error(err);
            });
    }


    textTestCallback(range) {
        if (!range.collapsed) {
            return null;
        }

        return DecoupledEditor.plugins.textMatch.match(range, matchCallback);
    }

    matchCallback(text, offset) {
        var pattern = /\[{2}([A-z]|\])*$/,
            match = text.slice(0, offset)
                .match(pattern);

        if (!match) {
            return null;
        }

        return {
            start: match.index,
            end: offset
        };
    }

    dataCallback(matchInfo, callback) {
        var data = PLACEHOLDERS.filter(function (item) {
            var itemName = '[[' + item.name + ']]';
            return itemName.indexOf(matchInfo.query.toLowerCase()) == 0;
        });

        callback(data);
    }

    changeTemplateItem(match) {

        return match[1];
    }
    addPleholder( id ){
        const item = {
            id : id,
            question : "",
            type : "input"
        }
    }
}
