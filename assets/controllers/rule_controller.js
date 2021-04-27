import {Controller} from 'stimulus';
import Prism from 'prismjs';
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
            'operator':{
                pattern : /[A-Z]+/,
            }
        }
       // const html = Prism.highlight(code, Prism.languages.rule, 'rule');
    }
//(label CONTAIN \"stage\" CLASSIFY \"stage\") IF_NULL ( \"stage\" in file_index  CLASSIFY \"oussama\")
    highlight(){
        Prism.languages.rule = {
            'number':{
                pattern : /[0-9]+(?:\.[0-9]+)?([Ee][\+\-][0-9]+)?/
            },
            'punctuation':{
                pattern : /[(){};:,]/
            },
            'operator':{
                pattern : /[A-Z]+/,
            }
        }
        let rule = document.getElementById("rule");
        rule.innerHTML = Prism.highlight(rule.textContent, Prism.languages.rule, 'rule');
        this.placeCaretAtEnd( rule );
    }

    placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }


}
