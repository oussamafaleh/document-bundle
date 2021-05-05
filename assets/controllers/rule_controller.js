import {Controller} from 'stimulus';
import Prism from 'prismjs';
import Tribute from "tributejs";
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
        Prism.languages.rule = {
            'number':{
                pattern : /[0-9]+(?:\.[0-9]+)?([Ee][\+\-][0-9]+)?/
            },
            'punctuation':{
                pattern : /[(){};:,]/
            },
            'string':{
                pattern : /\\"[0-9a-zA-Z-_]+\\"/
            },
            'operator':{
                pattern : /\b[A-Z_]+\b/,
            }
        }

        this.getOperators((operators)=>{

            this.ruleAutocomplete(operators);
            }
        );
    }
    ruleAutocomplete(operators){

        console.log(operators);
        var tribute = new Tribute({
            values: operators,
            selectTemplate: function(item) {
                return   item.original.key;
            },
        //    containerClass: "d-flex justify-content-between tribute-container",
            menuItemTemplate: function(item) {
                return   '<div class="d-flex justify-content-between">'+item.string + '<i class="far fa-question-circle help" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2"></i></div>';
            },
            autocompleteMode: true
        });
        tribute.attach(document.getElementById("editing"));
    }
    highlight(){

        let text = document.getElementById("editing");

        let rule = document.getElementById("highlighting-content");

        rule.focus();
        rule.innerHTML = Prism.highlight(text.value, Prism.languages.rule, 'rule');
        this.sync_scroll( text );
    }

    check_tab( event) {
        let element = document.getElementById("editing");
        let code = element.value;
        if (event.key == "Tab") {
            /* Tab key pressed */
            event.preventDefault(); // stop normal
            let before_tab = code.slice(0, element.selectionStart); // text before tab
            let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
            let cursor_pos = element.selectionEnd + 2; // after tab placed, where cursor moves to - 2 for 2 spaces
            element.value = before_tab + "  " + after_tab; // add tab char - 2 spaces
            // move cursor
            element.selectionStart = cursor_pos;
            element.selectionEnd = cursor_pos;
        }

    }
    sync_scroll(element) {
        /* Scroll result to scroll coords of event - sync with textarea */
        let result_element = document.querySelector("#highlighting");
        // Get and set x and y
        result_element.scrollTop = element.scrollTop;
        result_element.scrollLeft = element.scrollLeft;
    }

    getOperators( cb) {
        var URL = "http://localhost:8080/api/rule";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            var data = [];
            if(xhr.readyState === 4){
                if (  xhr.status == 200) {
                    console.log(xhr.responseText);
                    data = JSON.parse(xhr.responseText).results.operators;

                } else if (xhr.status === 403) {
                    data = [];
                }
                cb(data);

            }

            };
        xhr.open("GET", URL , false);
        xhr.send();
    }

}


