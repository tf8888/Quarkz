export function log(title, msg, action, actionname, type) {
    var no = Math.floor(Math.random() * 10000)
    var html = `
    <div id="msg_popup_`+ no + `" class="overlay">
    <div class="popup">
        <center>
            <h2 id="msg_popup_txt_`+ no + `">Note</h2>
        </center>
        <a class="close"
            onclick="document.getElementById('msg_popup_`+ no + `').remove()">&times;</a>
        <p id="msg_popup_content_`+ no + `"></p>
        <button class="tst_btn rpl" id="msg_action_`+ no + `"></button>
    </div>
    </div>
    `
    if (type == 1) {
      dE("output").insertAdjacentHTML("beforeend", html)
    } else if (type == 3){
      var html = `
    <div id="msg_popup_`+ no + `" class="overlay">
    <div class="popup">
        <center>
            <h2 id="msg_popup_txt_`+ no + `">`+title+`</h2>
        </center>
        <a class="close"
            onclick="document.getElementById('msg_popup_`+ no + `').remove()">&times;</a>
        <p id="msg_popup_content_`+ no + `">`+msg+`</p>
        <button class="tst_btn rpl" id="msg_info_`+ no + `" onclick = "window.open('`+action+`', '_blank');">Info</button>
        <button class="tst_btn rpl" id="msg_syllabus_`+ no + `" onclick = "window.open('`+actionname+`', '_blank');">Syllabus</button>
    </div>
    </div>
    `
    dE("quarkz_body").insertAdjacentHTML("beforeend", html)
    }else {
      dE("quarkz_body").insertAdjacentHTML("beforeend", html)
    }
    dE("msg_popup_" + no).style.visibility = "visible"
    dE("msg_popup_" + no).style.opacity = "1"
    if (type == 3){return}
    dE("msg_action_" + no).style.display = "none"
    document.getElementById("msg_popup_txt_" + no).innerText = title
    document.getElementById("msg_popup_content_" + no).innerText = msg
    if (action == undefined) { action = function () { } } else { dE("msg_action_" + no).style.display = "block" }
    if (actionname == undefined) { actionname = "" }
    dE("msg_action_" + no).onclick = action
    dE("msg_action_" + no).innerText = actionname
    return "msg_popup_" + no
  }
  export default {log}