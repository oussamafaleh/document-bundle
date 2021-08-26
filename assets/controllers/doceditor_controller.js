import {Controller} from 'stimulus';
import DecoupledEditor from '../DocDecoupledEditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

const URL_BASE = process.env.url;
/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
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
                },

            })
            .then(editor => {


               // CKEditorInspector.attach( editor );
                const toolbarContainer = document.querySelector('.document-editor__toolbar');
                toolbarContainer.appendChild(editor.ui.view.toolbar.element);


                window.editor = editor;
                this.editor = editor;
                this.match();

            })
            .catch(err => {
                console.error(err);
            });

    }
    saveTemplate(){
            const tempFileName = document.querySelector('#template_label').value;
            const editorData = this.editor.getData();
            var file = new File([editorData], tempFileName+".html", {type: "text/html", lastModified: new Date()})

            console.log(file);
            var url = URL_BASE+'/api/file/upload-template';
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            formData.append("file", file);
            formData.append("parent_code", "b7d39fc9-297e-489e-ae3e-59573b15b4f1" );
            formData.append("user_code", "0970229e-4867-4ada-b0ac-a199446cbc21");
            xhr.onreadystatechange = () =>  {
                if(xhr.readyState === 4){
                    if (  xhr.status == 200) {
                        let data = xhr.responseText;
                        console.log(data);
                    }
                }


            }
            xhr.open("POST", url  );
            xhr.send(formData);

            // ...

    }

    match(){
        let matchedTags =  document.querySelectorAll('span[data-template-var]');
        let form = document.getElementById("template-form");
        Array.from(matchedTags).map(element => {
            const formGroup = document.createElement("div" );
            formGroup.className = "form-group";
            const label =  document.createElement("label" );
            label.innerText = element.innerHTML;
            formGroup.appendChild(label);
            if(element.getAttribute('data-template-type') == 'Short text'){
                var input = document.createElement("input" );
                input.className = "form-control";
                input.type = "text";
                input.id = element.getAttribute('data-template-var');
                input.placeholder = "enter"
            };
            if(element.getAttribute('data-template-type') == 'Long text'){
                var input = document.createElement("textarea" );
                input.className = "form-control";
                input.id = element.getAttribute('data-template-var');
                input.placeholder = "enter"
            };

            formGroup.appendChild(input);
            form.appendChild(formGroup);

        })
    }
    format(){
        let form = document.getElementById("template-form").getElementsByClassName("form-control");
        form.forEach( (element) => {
            console.log(document.querySelector('data-template-var='+element.id));
            //console.log(element);
            document.querySelector('span[data-template-var='+element.id+']').innerText = element.value;
           // document.querySelector('span[data-template-var='+element.id+']').removeAttribute('data-template-type');
           // document.querySelector('span[data-template-var='+element.id+']').removeAttribute('data-template-var');




        })

    }
    // textTestCallback(range) {
    //     if (!range.collapsed) {
    //         return null;
    //     }
    //
    //     return DecoupledEditor.plugins.textMatch.match(range, matchCallback);
    // }
    //
    // matchCallback(text, offset) {
    //     var pattern = /\[{2}([A-z]|\])*$/,
    //         match = text.slice(0, offset)
    //             .match(pattern);
    //
    //     if (!match) {
    //         return null;
    //     }
    //
    //     return {
    //         start: match.index,
    //         end: offset
    //     };
    // }
    //
    // dataCallback(matchInfo, callback) {
    //     var data = PLACEHOLDERS.filter(function (item) {
    //         var itemName = '[[' + item.name + ']]';
    //         return itemName.indexOf(matchInfo.query.toLowerCase()) == 0;
    //     });
    //
    //     callback(data);
    // }
    //
    // changeTemplateItem(match) {
    //
    //     return match[1];
    // }
    // addPleholder( id ){
    //     const item = {
    //         id : id,
    //         question : "",
    //         type : "input"
    //     }
    // }
}
