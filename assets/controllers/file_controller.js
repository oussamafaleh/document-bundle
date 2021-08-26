import {Controller} from 'stimulus';
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
    connect() {


    }
    classify(){
        const arg = event.currentTarget.dataset
        let file = this.element.querySelector("#document_file").files[0];
        var url = URL_BASE+'/api/rule/evaluate';
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        formData.append("file", file);
        formData.append("user_code", arg.user);
        xhr.onreadystatechange = () =>  {
            if(xhr.readyState === 4){
                if (  xhr.status == 200) {
                    let data = JSON.parse(xhr.responseText);
                    this.showClassifications(data.results);
                }
            }


        }
        xhr.open("POST", url  );
        xhr.send(formData);
    }


    showClassifications( data ) {
        console.log(data)
    }
}
