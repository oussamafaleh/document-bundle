import {Controller} from 'stimulus';

import prettyFileIcons from 'pretty-file-icons';
/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
import $ from 'jquery'
export default class extends Controller {

    static values = { filename: String }

    connect() {

        console.log(this.filename);
        this.getIcon(this.filename);
       // console.log(process);
    }


    getIcon(fileName){
        var item = prettyFileIcons.getIcon(this.element.getAttribute('id'))
        var img = document.createElement('img');
        img.src = '/assets/img/svg/' + item + '.svg';
        img.setAttribute('alt', item);
        img.setAttribute('title', item);
        this.element.appendChild(img) ;

    }
}
