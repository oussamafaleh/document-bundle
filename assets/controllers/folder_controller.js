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



    Rename(event) {
        
           
       // item_code , parent_code
        $('button#rename_btn').on('click', function () {
            var label = $('input#label').val()
            $.ajax({
                method: "PATCH",
                url: "/item/renameItem/" + item_code ,
                data: JSON.stringify({label: label}),
            }).done(function (res) {
                console.log(res)

            }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.responseText)
            })
        })
    }

    //-------------------

    ShareEMail() {
        const arg = event.currentTarget.dataset;
        let item_code = arg.sharedItemEmail;
      
        $("#btnShare").on('click', function (event) {
            event.preventDefault();
            var email = $('input#share_email').val()
            console.log(email)
            var roles = [];
            $("#find-table input:checkbox:checked").map(function () {
                roles.push($(this).val());
            });
            console.log(roles);

            $.ajax({
                method: "POST",
                url: "/api/item/shareWithOthers/" + item_code,
                data: JSON.stringify({email: email, roles: roles}),
            }).done(function (res) {
                console.log(res)

            }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.responseText)
            })
        });


    }

    

    ShareLink() {

        const arg = event.currentTarget.dataset;
        let item_code = arg.sharedItemLink;
      
        $("#shareLink_btn").on('click', function (event) {
            event.preventDefault();
            var roles = Array();

            $("#find-tablelink input:checkbox:checked").map(function (item) {
                roles.push($(this).val());
            });

            console.log(typeof (roles))
            $.ajax({
                method: "POST",
                url: "/api/item/shareLinks/" + item_code,
                data: JSON.stringify({roles: roles}),
            }).done(function (res) {
                var link = res.results.data.link;
                $("#link-data").append(JSON.stringify(link));

            }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.responseText)
            })
        });


    }


    CancelShareLink(item_code) {
       
       $('button#cancel_btn').on('click', function () {
           $.ajax({
               method: "DELETE",
               url: "/api/item/CancelshareLink/" + item_code ,
           }).done(function (res) {
               console.log(res)

           }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
               console.log(XMLHttpRequest.responseText)
           })
       })
   };



   DownloadZip() {
        const arg = event.currentTarget.dataset;
        console.log(arg)
        $("#btn_zip").on('click', function (event) {
            event.preventDefault();
            var items = Array();

          
            $("#find-tableZip input:checkbox:checked").map(function (item) {
                items.push($(this).val());
            });
          
            $.ajax({
                method: "GET",
                url: "/api/item/downloadZip" ,
                data: JSON.stringify({items: items}),
            }).done(function (res) {
                console.log(res)
                console.log("ok")
            }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.responseText)
            })
        });


    };




}
