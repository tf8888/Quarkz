export function log(title, msg, action, actionname, type) {
  var no = Math.floor(Math.random() * 10000)
  var html = `
    <div id="msg_popup_`+ no + `" class="overlay">
    <div class="popup">
        <center>
            <h2 id="msg_popup_txt_`+ no + `">Note</h2>
        </center>
        <a class="close_btn"
            onclick="document.getElementById('msg_popup_`+ no + `').remove()">&times;</a>
        <p id="msg_popup_content_`+ no + `"></p>
        <button class="tst_btn rpl" id="msg_action_`+ no + `"></button>
    </div>
    </div>
    `
  if (type == 1) {
    dE("output").insertAdjacentHTML("beforeend", html)
  } else if (type == 3) {
    var html = `
    <div id="msg_popup_`+ no + `" class="overlay">
    <div class="popup">
        <center>
            <h2 id="msg_popup_txt_`+ no + `">` + title + `</h2>
        </center>
        <a class="close_btn"
            onclick="document.getElementById('msg_popup_`+ no + `').remove()">&times;</a>
        <p id="msg_popup_content_`+ no + `">` + msg + `</p>
        <button class="tst_btn rpl" id="msg_info_`+ no + `" onclick = "window.open('` + action + `', '_blank');">Info</button>
        <button class="tst_btn rpl" id="msg_syllabus_`+ no + `" onclick = "window.open('` + actionname + `', '_blank');">Syllabus</button>
    </div>
    </div>
    `
    dE("quarkz_body").insertAdjacentHTML("beforeend", html)
  } else {
    dE("quarkz_body").insertAdjacentHTML("beforeend", html)
  }
  dE("msg_popup_" + no).style.visibility = "visible"
  dE("msg_popup_" + no).style.opacity = "1"
  if (type == 3) { return }
  dE("msg_action_" + no).style.display = "none"
  document.getElementById("msg_popup_txt_" + no).innerText = title
  document.getElementById("msg_popup_content_" + no).innerText = msg
  if (action == undefined) { action = function () { } } else { dE("msg_action_" + no).style.display = "block" }
  if (actionname == undefined) { actionname = "" }
  dE("msg_action_" + no).onclick = action
  dE("msg_action_" + no).innerText = actionname
  return "msg_popup_" + no
}
export function qp_test(title, item) {
  var html = `
  <div id="msg_popup_qp" class="overlay">
    <div class="it_popup">
        <center>
            <h2 id="msg_popup_txt_qp">`+ title + `</h2><a class="close_btn"
            onclick="document.getElementById('msg_popup_qp').remove()">&times;</a>
        </center>
        <div id = "container">
        `+ item + `
        </div>
    </div>
    </div>
  `;
  dE("output").insertAdjacentHTML("beforeend", html)
  dE("msg_popup_qp").style.visibility = "visible"
  dE("msg_popup_qp").style.opacity = "1"
}

export function report_stuff() {
  var html = `
  <div id="msg_popup_report" class="overlay">
    <div class="it_popup">
        <center>
            <h2 id="msg_popup_txt_report">Report Error</h2><a class="close_btn"
            onclick="document.getElementById('msg_popup_report').remove()">&times;</a>
        </center>
        <div style = "display:flex;flex-direction:row;flex-wrap:wrap;overflow-y:scroll;height:80%;justify-content:center;">
          <div id="db_rep_les" class = "db_class">
          <span style="font-size: 25px;color:var(--clr16)">Lesson</span>
          <div>
            <input type="checkbox" id="incorrect-video" name="problem[]" value="incorrect-video">
            <label for="wrong-answer">Incorrect/No Video</label>
          </div>
          <div>
            <input type="checkbox" id="incorrect-theory" name="problem[]" value="incorrect-theory">
            <label for="wrong-answer">Incorrect/No Theory</label>
          </div>
          <div>
            <input type="checkbox" id="wrong-image" name="problem[]" value="wrong-image">
            <label for="confusing-image">Wrong/Incomplete/No Image(s) or Video(s)</label>
          </div>
          </div>
        <div id="db_rep_les" class = "db_class">
        <span style="font-size: 25px;color:var(--clr16)">Question(Question Bank/Test)</span>
          <div>
            <input type="checkbox" id="incorrect-answer-key" name="problem[]" value="incorrect-answer-key">
            <label for="wrong-answer">Incorrect Answer Key</label>
          </div>
          <div>
            <input type="checkbox" id="wrong-solution" name="problem[]" value="wrong-solution">
            <label for="incomplete-answer">Wrong/Incomplete Solution</label>
          </div>
          <div>
            <input type="checkbox" id="wrong-question" name="problem[]" value="wrong-question">
            <label for="confusing-question">Wrong/Incomplete Question</label>
          </div>
          <div>
            <input type="checkbox" id="wrong-explanation" name="problem[]" value="wrong-explanation">
            <label for="confusing-explanation">Wrong Explanation</label>
          </div>
          <div>
            <input type="checkbox" id="wrong-image" name="problem[]" value="wrong-image">
            <label for="confusing-image">Wrong/Incomplete/No Image(s) or Video(s)</label>
          </div>
          </div>
          <div id="db_rep_les" class = "db_class">
          <span style="font-size: 25px;color:var(--clr16)">Other Issues</span>
          <div>
            <input type="checkbox" id="other-issue" name="problem[]" value="other-issue">
            <label for="other-issue">Other Issue</label>
          </div>
          <textarea placeholder="(Optional)" style="height: 50px;resize: none;" id="extra_comment"></textarea>
          </div>
        </div>
        <center><button class="tst_btn rpl" id = "popup_report">Report</button></center>
    </div>
    
    </div>
  `;
  dE("output").insertAdjacentHTML("beforeend", html)
  dE("msg_popup_report").style.visibility = "visible"
  dE("msg_popup_report").style.opacity = "1"
  const bc = new BroadcastChannel("Quarkz!");
  let isFirstTab = true;
  bc.postMessage(`QZCODE-REPORT`);
}

export default { log, qp_test, report_stuff }