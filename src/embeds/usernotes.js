export let page_usernotes = `
<div id="un_list" style="border:3px solid grey;width:25vw;height:90%"></div>
        <div id="un_render" style="width:77vw;height:100%">
            <div id="un_tools" style="width:100%;display: flex;flex-direction: row;flex-wrap: wrap;">
                <select id="un_rendermode" class="_in_aq" style="width: 100px;color:red;"
                    value="edit">
                    <option value="edit">edit</option>
                    <option value="preview">preview</option>
                </select>
                <select id="un_viewership" class="_in_aq" style="width: 100px;color:red;">
                    <option value="private">private</option>
                    <option value="public_view">public(view_only)</option>
                    <option value="public">public</option>
                </select>
                <input id="un_title" type="text" class="_in_aq" style="width:20vw;" value="Notes Title">
                <button id="un_save" class="rpl tst_btn" style="height: 30px;">Save</button>
                <button id="un_print" class="rpl tst_btn" style="height: 30px;">Print</button>
                <input id="un_colorpicker" type="color" name="favcolor" value="#ff0000"
                    style="width:5vw;height:30px;background-color: transparent;border:none" onchange="notesUIHandler()">
            </div>
            <div id="un_edit" style="height:90%;width:100%">
                <div class="summernote" id="un_editable" style="height:90%">Notes</div>
            </div>
            <div id="un_preview" style="height:90%;width:100%;overflow:scroll">
            </div>
            <iframe style="display: none;" id="un_print_iframe"></iframe>
        </div>
`
export default {page_usernotes}