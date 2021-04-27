import {Controller} from 'stimulus';
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



    connect() {
    }



    stopPropagation(event) {
        // The event won't be propagated up to the document NODE and
        // therefore delegated events won't be fired
        event.stopPropagation();
    }

    folderListFucntion(event) {
        const arg = event.currentTarget.dataset;
        jQuery(document).ready(function ($) {
            var moveLFolderList = $('div#move_list')


            $.ajax({
                method: "GET",
                url: "/api/folder/list-sub-item/" + arg.folderMovingIn,
                data: {
                    index: -1,
                    type: "folder",
                    user_code: "0970229e-4867-4ada-b0ac-a199446cbc21"
                }

            }).done(function (res) {
                moveLFolderList.empty();
                let data = res.results.data;

                ///////////////////////fill dropdown list with folders

                $('<span/>')
                    .addClass('dropdown-item dropdown-header')
                    .text(res.results.parent_folder)
                    .appendTo(moveLFolderList);
                $('<div/>')
                    .addClass('dropdown-divider')
                    .appendTo(moveLFolderList);
                $.each(data.rows, function (i) {
                    // var id = 'move_list' + i;
                    let listItem = $('<div/>')
                        .addClass('d-flex  flex-row m-2 border-bottom')
                        .appendTo(moveLFolderList);
                    $('<div/>')
                        .addClass('dropdown-divider')
                        .appendTo(listItem);
                    $('<i/>')
                        .addClass('fas fa-folder mr-2')
                        .appendTo(listItem);
                    let liFolder = $('<a/>')
                        .attr('href', "#")
                        .attr('data-folder-to-move', arg.folderToMove)
                        .attr('data-folder-moving-in', data.rows[i].code)
                        .attr('data-action', "click->folder#folderListFucntion")
                        .text(data.rows[i].label)
                        .appendTo(listItem);

                    /* ********
                      move to specific folder content in dropdown list
                      by refilling the dropdown menu       *************  */

                    let url = arg.path;
                    url = url.replace("itemC", arg.folderToMove);
                    url = url.replace("newParentC", data.rows[i].code);
                    url = url.replace("userC", "0970229e-4867-4ada-b0ac-a199446cbc21");
                    console.log(url)
                    let moveForm = $('<form/>')
                        .addClass('ml-auto')
                        .attr('action', url)
                        .attr('method', 'post')
                        .appendTo(listItem);
                    let submitButton = $('<button/>')
                        .addClass('btn btn-block btn-outline-secondary  p-0 mb-1')
                        .attr('type', 'submit')
                        .appendTo(moveForm);
                    $('<i/>')
                        .addClass('fas fa-chevron-circle-down mr-1 ml-1')
                        .appendTo(submitButton);

                });
            });
        })


    };
}
