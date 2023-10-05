/*
Copyright 2021-23 Quarkz By Mr Techtroid

All rights reserved by [Mr Techtroid]. This work is not open-source.

No part of these HTML, CSS, and JavaScript files may be reproduced, distributed, 
or transmitted in any form or by any means, including photocopying, recording, 
or other electronic or mechanical methods, without the prior written permission 
of the author, except in the case of brief quotations embodied in critical reviews 
and certain other noncommercial uses permitted by copyright law.

For permission requests, please contact [Mr Techtroid] at mrtechtroid@outlook.com .
*/
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth";
import { getFirestore, orderBy, limit, writeBatch, collection, addDoc, onSnapshot, deleteDoc, arrayUnion, arrayRemove, setDoc, updateDoc, getDocs, doc, serverTimestamp, getDoc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from 'firebase/storage';
import { page_about } from "../embeds/about";
import { page_chapter, page_edit_chapter, page_list_chapter } from "../embeds/chapter"
import { page_cyberhunt } from "../embeds/cyb";
import { page_app_info, page_ariel, page_bug_report, page_dashboard, page_notes, page_updates, page_schedule, error_page, page_edit_exams, page_uploads } from "../embeds/dashboard";
import { page_downloads, page_jee_main, download_links_list, downloads_render } from "../embeds/downloads";
import { page_finished_test } from "../embeds/finished_test";
import { page_forum } from "../embeds/forum";
import { page_functions } from "../embeds/functions";
import { log, qp_test, report_stuff } from "../embeds/log";
import { page_login } from "../embeds/login";
import { page_printable } from "../embeds/printable";
import { page_profile } from "../embeds/profile";
import { page_qbnkvid } from "../embeds/qbnkvid";
import { page_register } from "../embeds/register";
import { page_analytics } from "../embeds/analytics";
import { page_settings } from "../embeds/settings";
import { page_sims, page_edit_sims, page_list_sims } from "../embeds/sims";
import { page_test_instructions } from "../embeds/test_instructions";
import { page_test_end, page_test_list, page_test_v1 } from "../embeds/tests"
import { page_toc } from '../embeds/toc'
import { page_topic, page_edit_topic } from "../embeds/topics";
import { page_edit_user } from "../embeds/user";
import { page_usernotes } from "../embeds/usernotes"
import { page_store, page_store_edit } from "../embeds/store"
import { page_vidchat, page_createvidchat } from "../embeds/vidchat";
import { sd, sha256, makeid, mobileCheck, areObjectsEqual, areEqual, getServerTime, fullEle, dE, sortObj, sortObjv2, renderMarkedMath, mergeById, qCorrector, playSoundEffect, showLS, antiCopyEle, shuffleArrayWithSeed, buildHtmlTable, studentRanker,getAvatarURL } from '../js/helper'
import { sysaccess } from "./reworkui";
import { page_batch_list, page_edit_batch } from "../embeds/admin";
import Chart, { scales } from 'chart.js/auto';
import { page_ch_solver, page_ch_list } from "../embeds/codehunt";

const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register(new URL('../js/sw.js', import.meta.url), { type: 'module' }); 
  return swRegistration;
}
registerServiceWorker()

const firebaseConfig = {
  apiKey: "AIzaSyDN8T7Pmw5e-LzmC3nAHEqI0Uk7FF7y6fc",
  authDomain: "quarkz.firebaseapp.com",
  projectId: "quarkz",
  storageBucket: "quarkz.appspot.com",
  messagingSenderId: "1050835442263",
  appId: "1:1050835442263:web:e7d05ca9373f2f6083a112",
  measurementId: "G-1Y3S45VWFH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
  });

const storage = getStorage();

// Login Page
// Sign In A User
async function signIn() {
  var email = dE("lg_uname").value;
  var password = dE("lg_pass").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      userdetails.email = email
      creMng("dashboard", 1);
      addToast("success","Login Successful!")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      addToast("error","Login Denied. Wrong Username or Password.")
      dE("lg_pass").value = ""
    });
}

// Sign Out A User
function signOutUser() {
  signOut(getAuth());
  userdetails = []
  creMng("login", 1);
  addToast("success","Logout Successful!")
  window.location.reload()
}

// Register A User
function signUp() {
  var email = dE("rg_uname").value;
  var password = dE("rg_pass").value;
  var name = dE("rg_name").value;
  var mblno = dE("rg_mbleno").value;
  var stclass = dE("rg_class").value;
  var stgender = dE("rg_gender").value;
  if (email == "" || password == "" || name == "" || mblno == "" || stclass == "") {
    addToast("error","Details Cannot Be Empty")
  }
  if (password != dE("rg_pass1").value) {
    addToast("error","Passwords dont match.")
  }
  else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        async function a() {
          try {
            await setDoc(doc(db, 'users', user.uid), {
              name: name,
              class: stclass,
              mblno: mblno,
              email: email,
              spoints: 0,
              gen: stgender,
              batch: "guest",
              sgndon: serverTimestamp(),
              roles: { user: true }
            }).then(function () {
              window.location.hash = "#/dashboard"
              window.location.reload()
            });
          }
          catch (error) {
            addToast("error",'Error Adding New User'+ error);
          }
        }
        a();
      })
      .catch((error) => {
        addToast("error",'Error Adding New User'+ error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
// Location Handler 
// Important: Handles All Locations
function creMng(a, b) {
  coreManager(a, b)
}
function renderBody(body, styles, s_class, translate) {
  dE("output").style = ""
  dE("output").removeAttribute("translate")
  dE("output").classList.remove("ovr-scroll")
  dE("output").innerHTML = body;
  if (s_class != undefined && s_class != "") { dE("output").classList.add(s_class) }
  if (translate != undefined && translate != "" && translate == "1") { dE("output").setAttribute("translate", "no") }
  dE("output").style = styles
}
function dashboardEvents() {
  dE("dshd_uname").innerText = userinfo.email
  dE("dshd_name").innerText = userinfo.name
  dE("dshd_batch").innerText = userinfo.batchname
  dE("prf_tab_img").src = getAvatarURL(userinfo.name, userinfo.gen, userinfo.prf_type)
  renderExams()
}
function simEvents() {
  function psims() { getSimList("physics") }
  function csims() { getSimList("chemistry") }
  function msims() { getSimList("maths") }
  function bsims() { getSimList("biology") }
  function cosims() { getSimList("computer") }
  function ssims() { getSimList("statistics") }
  function usims() { getSimList("unfiled") }
  var p_sims = dE("psims").addEventListener("click", psims)
  var c_sims = dE("csims").addEventListener("click", csims)
  var m_sims = dE("msims").addEventListener("click", msims)
  var b_sims = dE("bsims").addEventListener("click", bsims)
  var co_sims = dE("cosims").addEventListener("click", cosims)
  var s_sims = dE("ssims").addEventListener("click", ssims)
  var u_sims = dE("usims").addEventListener("click", usims)
}

function chapterEvents() {
  function pchb() { renderCList("physics") }
  function cchb() { renderCList("chemistry") }
  function mchb() { renderCList("maths") }
  function bchb() { renderCList("biology") }
  function cochb() { renderCList("computer") }
  function schb() { renderCList("statistics") }
  function uchb() { renderCList("unfiled") }
  var p_chb = dE("pchb").addEventListener("click", pchb)
  var c_chb = dE("cchb").addEventListener("click", cchb)
  var m_chb = dE("mchb").addEventListener("click", mchb)
  var b_chb = dE("bchb").addEventListener("click", bchb)
  var co_chb = dE("cochb").addEventListener("click", cochb)
  var s_chb = dE("schb").addEventListener("click", schb)
  var u_chb = dE("uchb").addEventListener("click", uchb)
}
document.addEventListener('copy', function (e) {
  if (!userinfo.roles['admin'] && !userinfo.roles['editor']){
    e.clipboardData.setData('text/plain', "It is forbidden to copy content from Quarkz!");
    e.preventDefault();
  }
});
function addTestEvents() {
  function qpaper() {
    let html = ``;
    let counter = 1;
    for (let ele of testQuestionList.questions) {
      html += '<div class = "qb_q"><div class = "qb_ttl">Q ' + counter + ") " + ele.title + '<div id = "qb_q_ty" class = "qb_q_ty qb_qt_ty" >(' + ele.type + ')</div><div id = "qb_q_mrk" class = "qb_q_ty qb_qt_ty" >(' + ele.pm + '/' + ele.nm + ')</div></div></div><br><hr style="color:white"><br>'
      counter++
    }
    qp_test("Question Paper", html)
  }
  function qinstr() {
    qp_test("Test Instructions", page_test_instructions)
    dE("tsi").innerHTML = testInfo.instructions
    dE("i_name").innerHTML = testInfo.title
    dE("i_start").innerHTML = dateparser(testInfo.strton.seconds * 1000)
    dE("i_end").innerHTML = dateparser(testInfo.endon.seconds * 1000)
    dE("i_time").innerHTML = testInfo.timeallotted / 60 + "&nbsp;Mins"
    dE("i_syllabus").innerHTML = testInfo.syllabus
    dE("i_total").innerHTML = testInfo.totalmarks
    dE("i_qno").innerHTML = testInfo.questionnos
    dE("agree_in").style.display = "none"
    dE("tin_start").style.display = "none"
    dE("ti_i").style.width = "95%"
    dE("container").style.borderColor = "transparent"
    dE("ti_title").innerHTML = ""
    dE("ti_hr").style.display = "none"
  }
  var tt_qp = dE("tt_qp").addEventListener("click", qpaper)
  var tt_instr = dE("tt_instr").addEventListener("click", qinstr)
  var tprep = dE("tt_rep").addEventListener("click", report_stuff)
  antiCopyEle("tt_question")
}
function testEvents() {
  function tsave() { testOperator("tts_answered") }
  function tclear() { testOperator("tts_notanswer") }
  function treview() { testOperator("tts_review") }
  function tansrev() { testOperator("tts_ansreview") }
  antiCopyEle("tt_question")
  function sTestHand() { log("Warning", "Are You Sure You Want To End The Test", submitTest, "Yes,Submit", 1) }
  var tt_save = dE("tt_save").addEventListener("click", tsave)
  var tt_clear = dE("tt_clear").addEventListener("click", tclear)
  var tt_review = dE("tt_review").addEventListener("click", treview)
  var tt_ansreview = dE("tt_ansreview").addEventListener("click", tansrev)
  var ttsub = dE("tt_sub").addEventListener("click", sTestHand)
  var tprep = dE("tt_rep").addEventListener("click", report_stuff)
}
function topicEvents() {
  function prvHand() { topicHandler(1) }
  function nxtHand() { topicHandler(2) }
  var tpnxt = dE("tp_nxt").addEventListener("click", nxtHand)
  var tpprv = dE("tp_prv").addEventListener("click", prvHand)
  var tpedt = dE("tp_edt").addEventListener("click", editStuff)
  var tprep = dE("tp_rep").addEventListener("click", report_stuff)
  var tpsbm = dE("tp_sbm").addEventListener("click", checkQuestion)
  var tppnt = dE("tp_pnt").addEventListener("click", printStuff)
  antiCopyEle("tp_expl")
  antiCopyEle("tp_qtext")
  antiCopyEle("tp_a_expl")
}
function editexamEvents() {
  var aqre = dE("aq_re").addEventListener("click", removeEntry);
  var tmode = dE("aq_mode").addEventListener("change", changeItem)
}
function edittopicEvents() {
  function chItem() { changeItem(1) }
  var tmode = dE("aq_mode").addEventListener("change", changeItem)
  var ttype = dE("aq_type").addEventListener("change", changeItem)
  var aqao = dE("aq_ao").addEventListener("click", addMCQ);
  var aqro = dE("aq_ro").addEventListener("click", removeMCQ);
  var aqre = dE("aq_re").addEventListener("click", removeEntry);
  var tppnt = dE("aq_export").addEventListener("click", printStuff)
}
function testlistEvents() {
  function actHand() { renderTestList("active") }
  function upcHand() { renderTestList("upcoming") }
  function finHand() { renderTestList("finished") }
  var tiact = dE("ti_act").addEventListener("click", actHand)
  var tiupc = dE("ti_upc").addEventListener("click", upcHand)
  var tifin = dE("ti_fin").addEventListener("click", finHand)
}
function userNotesEvents() {
  var unsave = dE("un_save").addEventListener("click", unotes1)
  var undelete = dE("un_delete").addEventListener("click", unotes2)
  var un_rendermode = dE("un_rendermode").addEventListener("change", notesUIHandler)
  var un_viewership = dE("un_viewership").addEventListener("change", notesUIHandler)
  dE("un_print").addEventListener("click", function () {
    dE("un_preview").style.display = "none";
    dE("un_preview").innerHTML = "<h1 style = 'text-align:center;margin:0px'>" + dE("un_title").value + "</h1>" + getHTML("un_editable");
    window.print()
  })
}
async function codeproblemEvents() {
  window.code_editor = window.setupEditor()
  dE("btn_code_report").addEventListener("click", report_stuff)
  try {
    let docSnap = await getDoc(doc(db, 'codehunt', window.location.hash.split("#/codehunt/problem")[1]))
    if (docSnap.exists()) {
      let docJSON = docSnap.data()
      dE("cdh_name").innerText = docJSON.name;
      dE("cdh_tag").innerText = docJSON.tag;
      dE("cdh_difficulty").innerText = docJSON.difficulty;
      dE("cdh_description").innerHTML = docJSON.description;
      window.code_editor.setValue("function execute(" + docJSON.args + "){\n\n}")
      dE("btn_code_submit").addEventListener("click", function () {
        evaluateJSCode(docJSON.submit_input, docJSON.submit_output)
      })
      dE("btn_code_solution").addEventListener("click", function () {
        window.code_editor.setValue(docJSON.solution)
        code_editor.setValue(code_editor.getValue().replaceAll("\\n", '\n'))
      })
    }
  } catch { }

}
function dshHand() { changeLocationHash("dashboard", 1) }
var dshbtn = dE("dsh_btn").addEventListener("click", dshHand);
function printableEvents() {
  document.getElementById("tsinf_btn").addEventListener('click', updateUI)

  document.getElementById("tans_btn").addEventListener("click", function () {
    for (var i = 0; i < document.getElementsByClassName("q_ans_1").length; i++) {
      document.getElementsByClassName("q_ans_1")[i].style.display = "flex"
    }
  })
  document.getElementById("tansexpl_btn").addEventListener("click", function () {
    for (var i = 0; i < document.getElementsByClassName("q_ans_1").length; i++) {
      document.getElementsByClassName("q_ans_1")[i].style.display = "flex"
    }
    for (var i = 0; i < document.getElementsByClassName("q_ans_expl").length; i++) {
      document.getElementsByClassName("q_ans_expl")[i].style.display = "flex"
    }
  })
  document.getElementById("tremove_btn").addEventListener("click", function () {
    for (var i = 0; i < document.getElementsByClassName("q_ans_1").length; i++) {
      document.getElementsByClassName("q_ans_1")[i].style.display = "none"
    }
    for (var i = 0; i < document.getElementsByClassName("q_ans_expl").length; i++) {
      document.getElementsByClassName("q_ans_expl")[i].style.display = "none"
    }
  })
}
function coreManager(newlocation, n1) {
  showLS("d")
  if (n1 == 1) { window.location.hash = "#/" + newlocation }
  handlebox = newlocation
  location1 = window.location.hash.split("#/")[1]
  if (userrole == false || userrole == null || userrole == undefined) {
    if (location1 == "login" || location1 == "register" || (location1.includes("notes") && !location1.includes("usernotes")) || location1 == "legal" || location1 == "about" || location1 == "bugreport" || location1 == "appinfo" || location1 == "mainsformulas" || location1 == "downloads" || location1 == "uploads") {

    } else {
      location1 = "error_page"
    }
  }
  switch (location1) {
    case "profile": { handlebox = "profile"; renderBody(page_profile, "", ""); profileDetails(); break; }
    case "about": handlebox = "aboutus"; renderBody(page_about, "text-align: center;height:max-content;", ""); function lglHand() { changeLocationHash("legal", 1) }; dE("lgl_btn").addEventListener("click", lglHand); break;
    case "login": handlebox = "login"; renderBody(page_login, "justify-content: center;", "", "1"); dE("sgn_in").addEventListener("click", signIn); function regHand() { changeLocationHash("register", 1) }; dE("reg_in").addEventListener("click", regHand); break;
    case "dashboard": handlebox = "dashboard"; renderBody(page_dashboard, "display: flex;flex-direction: row;", ""); dashboardEvents(); break;
    case "timetable": handlebox = "schedule"; renderBody(page_schedule, "", ""); showLS("s"); dE("tmt_frame").src = userinfo.timetableurl; break;
    case "logout": signOutUser(); break;
    case "mainsformulas": handlebox = "mainsformulas"; renderBody(downloads_render(download_links_list, "formulasheet"), "", ""); break;
    case "downloads": handlebox = "downloads"; renderBody(downloads_render(download_links_list, "downloads"), "", ""); break;
    case "register": handlebox = "register"; renderBody(page_register, "height:max-content;", "", "1"); dE("rg_in").addEventListener("click", rgbtn); break;
    case "testinfo": handlebox = "testinfo"; renderBody(page_test_list, "height:max-content;", ""); testlistEvents(); renderTestList("active"); break;
    case "legal": handlebox = "legal"; renderBody(page_toc, "", ""); antiCopyEle("lgl_container"); break;
    case "appinfo": handlebox = "appinfo"; renderBody(page_app_info, "", ""); renderAppInfo(); break;
    case "forum": handlebox = "forum"; renderBody(page_forum, "", ""); var fmsend = dE("fm_send").addEventListener("click", sndMsg); gtMsg(); getPinned(); break;
    case "bugreport": handlebox = "bugreport"; renderBody(page_bug_report, "", ""); break;
    case "simlist": handlebox = "simlist"; renderBody(page_list_sims, "", "", "1"); simEvents(); getSimList(); break;
    case "testend": handlebox = "test_end"; renderBody(page_test_end, "", ""); break;
    case "add/lesson": handlebox = "fu_lesson"; newLesson(); break;
    case "updates": handlebox = "update"; renderBody(page_updates, "height: max-content;justify-content: center;", ""); getUpdate(); break;
    case "add/tpc": handlebox = "fu_topic"; newTopic(); break;
    case "add/qubank": handlebox = "fu_topic"; newQBank(); break;
    case "add/simulation": handlebox = "fu_simulation"; newSimulation(); break;
    case "add/tests": handlebox = "fu_topic"; newTest(); break;
    case "add/batch": handlebox = "fu_topic"; newBatch(); break;
    case "add/store_item": handlebox = "fu_storeitem"; newStoreItem(); break;
    case "add/codehunt": handlebox = "fu_codehunt"; newCodeHunt();break;
    case "codehunt": handlebox = "fu_code_problemlist"; renderBody(page_ch_list, "", ""); renderCodeProblemList(); break
    case "store": handlebox = "fu_shop"; renderBody(page_store, "height:max-content;", ""); renderStore(); break;
    case "list/batch": handlebox = "fu_batch"; renderBody(page_batch_list, "height:max-content;", ""); renderAdminBatchList(); break;
    case "list/tests": handlebox = "fu_batch"; renderBody(page_batch_list, "height:max-content;", ""); renderAdminTestList(); break;
    case "list/chptr": handlebox = "fu_batch"; renderBody(page_batch_list, "height:max-content;", ""); renderAdminChapterList(); break;
    case "uploads": handlebox = "uploadEvents"; renderBody(page_uploads, "", ""); uploadEvents(); break;
    case "settings": handlebox = "settings"; renderBody(page_settings, "height: max-content;", ""); settingsEvents(); break;
    case "chplist": handlebox = "chapterlist"; renderBody(page_list_chapter, "", ""); chapterEvents(); renderCList(); break;
    default: handlebox = "error_page"; renderBody(error_page, "", ""); break;
  }
  var iorole = adminrole == true || editorrole == true
  if (location1.includes("instructions")) { handlebox = "test_instructions"; renderBody(page_test_instructions, "", ""); testInstructions(); }
  if (location1.includes("cyberhunt")) { handlebox = "cyberhunt"; renderBody(page_cyberhunt, "", ""); getCyberhunt() }
  if (location1.includes("notes") && !location1.includes("usernotes")) { handlebox = "notes"; renderBody(page_notes, "", ""); getPDF() }
  if (location1.includes("create_vidchat")) { handlebox = "notes"; renderBody(page_createvidchat, "height:max-content;", ""); initCreateVidChat(); }
  if (location1.includes("sims")) { handlebox = "simulations"; renderBody(page_sims, "", ""); getSimulation(); }
  if (location1.includes("chapter")) { handlebox = "chapter"; renderBody(page_chapter, "height:max-content;", "", "1"); getChapterEList() }
  if (location1.includes("qbanks")) { handlebox = "topic"; renderBody(page_topic, "height:max-content;", "", "1"); topicEvents(); getTopic(2); }
  if (location1.includes("usernotes")) { handlebox = "usernotes"; renderBody(page_usernotes, "flex-direction: row;", "", "1"); userNotesEvents(); getUserNotes(); }
  if (location1.includes("qbnk_vid")) { handlebox = "qbnk_vid"; renderBody(page_qbnkvid, "height:90vh;position: relative;", ""); dE("qbnk_vid_btn").style.display = "block"; dE("qbnk_vid_btn").addEventListener("click", prepareVideo); dE("qbnk_vid_btn_e").addEventListener("click", qbnkend); function qbnkend() { dE("watermark").style.display = "flex"; fullEle(dE("qbnk_vid")) } }
  if (location1.includes("attempt")) { handlebox = "testv1"; renderBody(page_test_v1, "height:max-content;overflow:scroll;align-items:inherit;", "", "1"); testEvents(); addTestEvents(); getTestInfo() }
  if (location1.includes("finished")) { handlebox = "finishedtestinfo"; renderBody(page_finished_test, "height:max-content;", ""); getSimpleTestReport() }
  if (location1.includes("testreport")) { handlebox = "testv1"; renderBody(page_test_v1, "height:max-content;overflow:scroll;align-items:inherit;", "", "1"); getTestReport(); addTestEvents(); }
  if (location1.includes("printable/qbank") && iorole == true) { handlebox = "printable"; renderBody(page_printable, "height:max-content;", ""); printableEvents(); var shfbtn = dE("shf_btn").addEventListener("click", shuffleQBank); printQBank(1); }
  if (location1.includes("ARIEL") && iorole == true) { handlebox = "Ariel"; renderBody(page_ariel, "", ""); }
  if (location1.includes("printable/tests") && iorole == true) { handlebox = "printable"; renderBody(page_printable, "height:max-content;", ""); printableEvents(); var shfbtn = dE("shf_btn").addEventListener("click", shuffleQBank); printQBank(3); }
  if (location1 == "functions" && iorole == true) { handlebox = "functions"; renderBody(page_functions, "height:max-content;", ""); changeItem() }
  if (location1.includes("users") && iorole == true) { handlebox = "users"; renderBody(page_edit_user, "", ""); userUpdate() }
  if (location1.includes("topic")) { handlebox = "topic"; renderBody(page_topic, "height: max-content;", ""); topicEvents(); getTopic(1); }
  if (location1.includes("printable/topic") && iorole == true) { handlebox = "printable"; renderBody(page_printable, "height:max-content;", ""); printQBank(2); }
  if (location1.includes("edit_sim") && iorole == true) { handlebox = "fu_simulation"; renderBody(page_edit_sims, "", "ovr-scroll", "1"); dE("aq_sims_save").addEventListener("click", updateSimulationWeb); prepareSimulation() }
  if (location1.includes("edit_lesson") && iorole == true) { handlebox = "fu_simulation"; renderBody(page_edit_sims, "", "ovr-scroll", "1"); prepareLesson() }
  if (location1.includes("edit_tpc") && iorole == true) { handlebox = "fu_topic"; renderBody(page_edit_topic, "", "ovr-scroll", "1"); dE("aq_tpc_save").addEventListener("click", function () { updateTopicQBank(1) }); edittopicEvents(); prepareTopicQBank(1) }
  if (location1.includes("edit_test") && iorole == true) { handlebox = "fu_topic"; renderBody(page_edit_topic, "", "ovr-scroll", "1"); dE("aq_tst_save").addEventListener("click", function () { updateTopicQBank(3) }); edittopicEvents(); prepareTopicQBank(3) }
  if (location1.includes("edit_qubank") && iorole == true) { handlebox = "fu_topic"; renderBody(page_edit_topic, "", "ovr-scroll", "1"); dE("aq_qbc_save").addEventListener("click", function () { updateTopicQBank(2) }); edittopicEvents(); prepareTopicQBank(2) }
  if (location1.includes("edit_exams") && iorole == true) { handlebox = "fu_topic"; renderBody(page_edit_topic, "", "ovr-scroll", "1"); dE("aq_exam_save").addEventListener("click", function () { updateTopicQBank(4) }); edittopicEvents(); prepareTopicQBank(4) }
  if (location1.includes("edit_batch") && iorole == true) { handlebox = "fu_topic"; renderBody(page_edit_batch, "", ""); prepareBatch(); dE("aq_batch_save").addEventListener("click", updateBatch) }
  if (location1.includes("codehunt/problem")) { renderBody(page_ch_solver, "", ""); codeproblemEvents() }
  if (location1.includes("vid_chat")) { handlebox = "fu_vidchat"; renderBody(page_vidchat, "", ""); prepareVideoChat(); }
  if (location1.includes("site-analytics") && iorole == true) { handlebox = "fu_analytics"; renderBody(page_analytics, "", ""); }
  if (iorole) {
    if (window.location.hash.includes("dashboard")) {
      dE("adminonly").style.display = "flex";
    }
    if (window.location.hash.includes("topic") || window.location.hash.includes("qbanks")) {
      // dE("tp_pnt").style.display = "block";
      dE("tp_edt").style.display = "block";
    }
    if (window.location.hash.includes("sims")) { dE("sms_edit").style.display = "block"; }
  }
  stpVid()
  refreshScreen()
  editqllist = []
  if (location1 == "forum") { gtMsg(1); } else { gtMsg(2); forum_length = 1; forum_d = "afterbegin" }
  // console.log({ userinfo, topicJSON, topicJSONno, editorrole, adminrole, userrole, simlist, chapterlist, userdetails, curr_qlno, curr_qlid, editqllist, autosignin, testList, activeTestList, upcomingTestList, finishedTestList, testInfo, testQuestionList, testResponseList, activequestionid })
  testQuestionList = []; testResponseList = []; testInfo = []; activequestionid = ""
}
async function testInstructions() {
  let docSnap = await getDoc(doc(db, 'tests', window.location.hash.split("#/instructions/")[1]))
  if (docSnap.exists()) {
    dE("i_name").innerHTML = docSnap.data().title
    dE("i_start").innerHTML = dateparser(docSnap.data().strton.seconds * 1000)
    dE("i_end").innerHTML = dateparser(docSnap.data().endon.seconds * 1000)
    dE("i_time").innerHTML = docSnap.data().timeallotted / 60 + "&nbsp;Mins"
    dE("i_syllabus").innerHTML = docSnap.data().syllabus
    dE("i_total").innerHTML = docSnap.data().totalmarks
    dE("i_qno").innerHTML = docSnap.data().questionnos
    dE("tsi").innerHTML = docSnap.data().instructions
  } else {
    renderBody("This test either doesnt exist or you do not have access to this test.")
  }
  dE("agree_in").addEventListener("change", function () {
    if (dE("agree_in").checked == true) {
      dE("tin_start").disabled = false
    } else {
      dE("tin_start").disabled = true
    }
  })
  let time = parseInt(Date.now() / 1000)
  if (docSnap.data().strton.seconds > time) {
    dE("agree_in").disabled = true;
    dE("tin_start").disabled = true
    dE("tin_start").innerText = "Test Has Not Started Yet."
  }
}
async function initCreateVidChat() {
  if (window.location.hash.split("create_vidchat/")[1] == "") {
    dE("vdc_create").style.display = "block"
    dE("vdc_update").style.display = "none"
    dE("vdc_create").addEventListener("click", async function () {
      let stron = new Date(dE("vdc_stron").value)
      const docRef = await addDoc(collection(db, "vidchat"), {
        name: dE("vdc_tpcname").value,
        stron: stron,
        duration: dE("vdc_duration").value,
        status: "notstarted",
        ended: false,

      });
      dE("vdc_meetid").value = docRef.id
    })
  } else {
    dE("vdc_create").style.display = "none"
    dE("vdc_update").style.display = "block"
    let docSnap = await getDoc(doc(db, 'vidchat', window.location.hash.split("create_vidchat/")[1]))
    if (docSnap.exists()) {
      var docJSON = docSnap.data()
      dE("vdc_tpcname").value = docJSON.name
      dE("vdc_duration").value = docJSON.duration
      dE("vdc_stron").value = dateparser(docJSON.stron.seconds * 1000)
      dE("vdc_meetid").value = window.location.hash.split("create_vidchat/")[1]
      if (docJSON.ended == "true") {
        dE("vdc_update").disabled = "true"
        dE("vdc_update").style.display = "none"
        addToast("warning", "Meeting has already ended, hence Meeting Details cannot be changed.", 10000)
      }
    }
    dE("vdc_update").addEventListener("click", async function () {
      let stron = new Date(dE("vdc_stron").value)
      const docRef = await updateDoc(collection(db, "vidchat"), {
        name: dE("vdc_tpcname").value,
        stron: stron,
        duration: dE("vdc_duration").value
      });
    })
  }
}
async function getUpdate() {
  let docSnap = await getDoc(doc(db, 'usernotes', 'releasenotes'))
  if (docSnap.exists()) {
    dE("rel_list").innerHTML = docSnap.data().notes
  }
  let docSnap2 = await getDoc(doc(db, 'usernotes', 'updates'))
  if (docSnap2.exists()) {
    dE("updt_list").innerHTML = docSnap2.data().notes
  }
}
window.ifcls = function () {
  document.getElementById('tempIF_G').remove();
}
window.user_rate_value = 0;
let localStream = null
let remoteStream = null
let pc = null
let captureStream = null
let videoSender = null
let audioSender = null
async function prepareVideoChat() {
  let docSnap = await getDoc(doc(db, 'vidchat', window.location.hash.split("vid_chat/")[1]))
  if (docSnap.exists()) {
    callData = docSnap.data()
    dE("vid_title").innerText = callData.name
    let datenow = Date.now()
    if (callData.status != "notstarted" || callData.status != "callstarted"){
      // window.location.hash = "#/dashboard"
      // addToast("error","Meeting has already started/ended"+JSON.stringify(callData))
      // return 0
    }else if (callData.stron.seconds - datenow/1000 >= 300){
      window.location.hash = "#/dashboard"
      addToast("error","You can join the meeting at "+dateparser(callData.stron.seconds*1000))
      return 0
    }
  } else {
    addToast("error", "Please Check Meeting ID")
    return
  }
  const servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  pc = new RTCPeerConnection(servers)
  const webcamButton = document.getElementById('webcamButton');
  const webcamVideo = document.getElementById('webcamVideo');
  const callButton = document.getElementById('callButton');
  const answerButton = document.getElementById('answerButton');
  const remoteVideo = document.getElementById('remoteVideo');
  const hangupButton = document.getElementById('hangupButton');
  const screenButton = document.getElementById('screenButton');
  screenButton.onclick = async () => {
    if (screenButton.getAttribute("on") == "false" || screenButton.getAttribute("on") == undefined) {
      captureStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          cursor: "always",
          height: 1000,
          width: 1200
        },
        audio: false
      });
      videoSender.replaceTrack(captureStream.getVideoTracks()[0])
      screenButton.setAttribute("on", "true")
    } else {
      videoSender.replaceTrack(localStream.getVideoTracks()[0]);
      screenButton.setAttribute("on", "false")
    }
  }
  webcamButton.onclick = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    remoteStream = new MediaStream();

    // Push tracks from local stream to peer connection
    var camVideoTrack = localStream.getVideoTracks()[0];
    var camAudioTrack = localStream.getAudioTracks()[0];
    videoSender = pc.addTrack(camVideoTrack, localStream);
    audioSender = pc.addTrack(camAudioTrack, localStream);

    // Pull tracks from remote stream, add to video stream
    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    webcamVideo.srcObject = localStream;
    remoteVideo.srcObject = remoteStream;

    callButton.disabled = false;
    hangupButton.disabled = false;
    webcamButton.disabled = true;
  };
  hangupButton.onclick = async() => {
    await updateDoc(doc(db, "vidchat", document.location.hash.split("#/vid_chat/")[1]), {
      status: "callended"
    });
    pc.close();
    addToast("success","Meeting Ended",5000)
  }
  callButton.onclick = async () => {
    let docId = document.location.hash.split("#/vid_chat/")[1]
    if (docId == "") {
      addToast("error", "Please Check Meeting ID")
      return
    }
    let docSnap = await getDoc(doc(db, 'vidchat', docId))
    if (docSnap.exists()) {
      callData = docSnap.data()
      if (callData.status == "callstarted") {
        let callId = document.location.hash.split("#/vid_chat/")[1]
        pc.onicecandidate = async (event) => {
          event.candidate && await updateDoc(doc(db, "vidchat", callId), {
            answerCandidates: event.candidate.toJSON()
          });;
        };
        let callData = {}
        let docSnap = await getDoc(doc(db, 'vidchat', callId))
        if (docSnap.exists()) {
          callData = docSnap.data()
        }

        const offerDescription = callData.offer;
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
          type: answerDescription.type,
          sdp: answerDescription.sdp,
        };

        await updateDoc(doc(db, "vidchat", callId), {
          answer: answer,
          status:"personjoined"
        })
        const unsub = onSnapshot(doc(db, "vidchat", docId), (doc) => {
          const data = doc.data();
          console.log("Current data: ", doc.data());
          if (data?.status == "callended"){
            pc.close();
            addToast("success","Meeting Ended",5000)
          }
          if (data?.offerCandidates) {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      } else if (callData.status == "notstarted") {
        // Get candidates for caller, save to db
        pc.onicecandidate = async event => {
          event.candidate && await updateDoc(doc(db, "vidchat", docId), {
            offerCandidates: event.candidate.toJSON(),
          });
        };

        // Create offer
        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);

        const offer = {
          sdp: offerDescription.sdp,
          type: offerDescription.type,
        };

        await updateDoc(doc(db, "vidchat", docId), {
          offer: offer,
          status: "callstarted"
        });
        const unsub = onSnapshot(doc(db, "vidchat", docId), (doc) => {
          const data = doc.data();
          console.log("Current data: ", doc.data());
          if (!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
          }
          if (data?.status == "callended"){
            pc.close();
            addToast("success","Meeting Ended",5000)
          }
          if (data?.answerCandidates) {
            const candidate = new RTCIceCandidate(data.answerCandidates);
            pc.addIceCandidate(candidate);
          }
        });
      }
    } else {
      addToast("error", "Please Check Meeting ID")
      return
    }
  }
}
function uploadEvents() {
  document.getElementById("file").addEventListener("change", async function () {
    var details = await (await fetch('https://ipapi.co/json/')).json();
    var file = document.getElementById("file").files[0];
    const name = details.ip + "-" + new Date().getTime() + "-" + file.name;
    const metadata = {
      contentType: file.type,
      ip: details.ip
    };
    const storageRef = ref(storage, 'uploads/' + details.ip.replaceAll(".", "_") + "/" + name);
    // 'file' comes from the Blob or File API
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById("file_progress").innerText = 'Upload is ' + progress + '% done';
        switch (snapshot.state) {
          case 'paused':
            document.getElementById("file_status").innerText = 'Upload is paused'
            break;
          case 'running':
            document.getElementById("file_status").innerText = 'Upload is running';
            break;
        }
      },
      (error) => {
        document.getElementById("file_status").innerText = 'Upload abandoned'
        document.getElementById("file_progress").innerText = ""
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          document.getElementById("file_status").innerText = "Upload Complete. Copy The Link Below"
          document.getElementById("file_progress").innerText = ""
          document.getElementById("file_link_long").value = downloadURL
          async function addDocument() {
            const docRef = await addDoc(collection(db, "quarkz", "users", "uploads"), {
              ipdetails: details,
              ip: details.ip,
              url: downloadURL,
              name: name,
              size: file.size,
            });
          }
          addDocument()
        })
      }
    );
  })
}
async function reportHandler() {
  dE("popup_report").addEventListener("click", async function () {
    const checkboxes = document.querySelectorAll('input[name="problem[]"]:checked');
    const values = Array.from(checkboxes).map(checkbox => checkbox.value);
    try {
      const docRef = await addDoc(collection(db, 'reports'), {
        id: document.getElementById("report-tag").value,
        uid: userinfo.uuid,
        hash: window.location.hash.split("#/")[1],
        issue: values.join(', '),
        comments: document.getElementById("extra_comment").value,
        type: "report",
      })
    } catch {
    }
    document.getElementById('msg_popup_report').remove()
  })
}
async function settingsEvents() {
  // dE("pass_rst_btn").addEventListener("click", requestPasschange);
  dE("sub_chg_pass").addEventListener("click", async function () {
    if (dE("inp_new_pass").value.length < 8) {
      addToast("warning", 'Password should be at least 8 characters long');
    }
    if (dE("inp_new_pass").value == dE("inp_retype_pass").value) {
      updatePassword(auth.currentUser, dE("inp_new_pass").value).then(() => {
        addToast("success", 'Password Reset Successful');
      }).catch((error) => {
        addToast("warning", 'Password Reset Failed');
        // ...
      });

    } else {
      addToast("warning", 'New Password and Confirm password dont match.');
    }
    dE("inp_new_pass").value = ""
    dE("inp_retype_pass").value = ""
  })
  dE("sub_chg_mail").addEventListener("click", async function () {
    if (dE("inp_mail").value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      updateEmail(auth.currentUser, dE("inp_mail").value).then(() => {
        updateDoc(doc(db, "users", userinfo.uuid), {
          email: dE("inp_mail").value
        })
        addToast("success", "Email Change was Successful")
        window.location.reload()
      }).catch((error) => {
        addToast("warning", "Something went wrong.")
      });
    } else {
      addToast("warning", "Invalid Email")
    }
  })
  dE("sub_rat_btn").addEventListener("click", async function () {
    try {
      const docRef = await addDoc(collection(db, 'reviews'), {
        rating: window.user_rate_value,
        uid: userinfo.uuid,
        comments: document.getElementById("rate_comment").value,
        type: "rating",
      })
      localStorage.setItem("rate_app", "true")
      addToast("success","Thank You for your Valuable Feedback.")
      dE("st_rateapp").style.display = "none";
    } catch {
      addToast("warning","Your Feedback was not Submitted.")
    }
  })
  dE("st_rateapp").style.display = "flex"
  if (localStorage.getItem("rate_app") == "true") {
    dE("st_rateapp").style.display = "none";
  }
  const stars = document.querySelectorAll('.star');
  // Add event listener to each star
  stars.forEach((star) => {
    star.addEventListener('click', (event) => {
      window.user_rate_value = event.target.getAttribute('data-value');
      updateStarColors();
    });
    star.addEventListener('mouseover', (event) => {
      const value = event.target.getAttribute('data-value');
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('hovered');
      }
    });
    star.addEventListener('mouseout', () => {
      stars.forEach((star) => {
        star.classList.remove('hovered');
      });
    });
  });

  function updateStarColors() {
    stars.forEach((star) => {
      const value = star.getAttribute('data-value');
      if (value <= window.user_rate_value) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
  if (userinfo.prf_type == null) {
    await updateDoc(doc(db, 'users', userinfo.uuid), {
      prf_type: "v2"
    })
  }
  dE("prf_typ_" + userinfo.prf_type.split("v")[1]).style.borderColor = "red"
  dE("prf_typ_1").src = getAvatarURL(userinfo.name, userinfo.gen, "v1")
  dE("prf_typ_2").src = getAvatarURL(userinfo.name, userinfo.gen, "v2")
  dE("prf_typ_3").src = getAvatarURL(userinfo.name, userinfo.gen, "v3")
  dE("prf_typ_1").addEventListener("click", async function () {
    dE("prf_typ_1").style.borderColor = "red"
    dE("prf_typ_2").style.borderColor = "#06d85f"
    dE("prf_typ_3").style.borderColor = "#06d85f"
    await updateDoc(doc(db, 'users', userinfo.uuid), {
      prf_type: "v1"
    })
    userinfo.prf_type = "v1"
    // localStorage.setItem("prf_type", "v1")
  })
  dE("prf_typ_2").addEventListener("click", async function () {
    dE("prf_typ_1").style.borderColor = "#06d85f"
    dE("prf_typ_2").style.borderColor = "red"
    dE("prf_typ_3").style.borderColor = "#06d85f"
    await updateDoc(doc(db, 'users', userinfo.uuid), {
      prf_type: "v2"
    })
    userinfo.prf_type = "v2"
  })
  dE("prf_typ_3").addEventListener("click", async function () {
    dE("prf_typ_1").style.borderColor = "#06d85f"
    dE("prf_typ_2").style.borderColor = "#06d85f"
    dE("prf_typ_3").style.borderColor = "red"
    await updateDoc(doc(db, 'users', userinfo.uuid), {
      prf_type: "v3"
    })
    userinfo.prf_type = "v3"
  })
}

// -----------------------
// SIMULATIONS
// Creates A Blank Simulation
let simlist = []
async function newSimulation() {
  try {

    const docRef = await addDoc(collection(db, 'sims'), {
      name: "",
      license: "",
      provider: "",
      url: "",
    })
    creMng("edit_sim/" + docRef.id, 1)
  } catch {

  }
}
// Prepares The Simulation Editor
async function prepareSimulation() {
  try {
    let docSnap = await getDoc(doc(db, 'sims', window.location.hash.split("edit_sim/")[1]))
    if (docSnap.exists()) {
      var docJSON = docSnap.data();
      dE("aq_simname").value = docJSON.name
      dE("aq_simprov").value = docJSON.provider
      dE("aq_simurl").value = docJSON.url
      dE("aq_simlicense").value = docJSON.license
      dE("aq_simsubj").value = docJSON.subject
    }
  } catch { }
}
// Updates Simulation Details
async function updateSimulationWeb() {
  try {
    await updateDoc(doc(db, 'sims', window.location.hash.split("edit_sim/")[1]), {
      name: dE("aq_simname").value,
      license: dE("aq_simlicense").value,
      provider: dE("aq_simprov").value,
      url: dE("aq_simurl").value,
      subject: dE("aq_simsubj").value
    });
    var subj = dE("aq_simsubj").value
    if (subj == "physics") {
      await updateDoc(doc(db, 'sims', 'sims'), {
        physics: arrayUnion(dE("aq_simname").value)
      })
    }
    if (subj == "chemistry") {
      await updateDoc(doc(db, 'sims', 'sims'), {
        chemistry: arrayUnion(dE("aq_simname").value)
      })
    }
    if (subj == "maths") {
      await updateDoc(doc(db, 'sims', 'sims'), {
        maths: arrayUnion(dE("aq_simname").value)
      })
    }
    if (subj == "computer") {
      await updateDoc(doc(db, 'sims', 'sims'), {
        computer: arrayUnion(dE("aq_simname").value)
      })
    }
    if (subj == "biology") {
      await updateDoc(doc(db, 'sims', 'sims'), {
        biology: arrayUnion(dE("aq_simname").value)
      })
    }
    if (subj == "statistics") {
      await updateDoc(doc(db, 'sims', 'sims'), {
        statistics: arrayUnion(dE("aq_simname").value)
      })
    }
    if (subj == "unfiled") {
      await updateDoc(doc(db, 'sims', 'sims'), {
        unfiled: arrayUnion(dE("aq_simname").value)
      })
    }
    clearAQ();
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}
// Displays Simulation For End User
async function getSimulation() {
  showLS("s");
  var simid = window.location.hash.split("sims/")[1]
  var docRef = doc(db, 'sims', simid)
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    var docJSON = docSnap.data();
    dE("sms_name").innerText = docJSON.name
    dE("sms_prov").innerText = docJSON.provider
    dE("sim_frame").src = docJSON.url
    dE("sim_frame").onload = showqLS("a");
  }
  else { creMng("error_page", 1); throw new Error }
}
// Get SimID From SimName
async function getSimID(sim_name) {
  var docID;
  const q = query(collection(db, "sims"), where("name", "==", sim_name));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docID = doc.id
  });
  creMng("sims/" + docID, 1)
}
// Helper Function To Get Simulation Name
function simClicker() {
  getSimID(this.innerText)
}
// Get Simulation List
async function getSimList(type) {
  dE("sim_cont").innerHTML = ""
  if (simlist.length == 0) {
    var docRef = doc(db, 'sims', 'sims')
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) { var docJSON = docSnap.data(); simlist = docJSON; }
    else { creMng("error_page", 1); throw new Error }
  }
  if (type == "physics") {
    try {
      for (let ele of simlist.physics) {
        if (ele != "") {
          dE("sim_cont").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:pink" id="sim' + btoa(ele) + '">' + ele + '</span>')
          dE("sim" + btoa(ele)).addEventListener('click', simClicker)
        }
      }
    } catch { }
  }
  if (type == "chemistry") {
    try {
      for (let ele of simlist.chemistry) {
        if (ele != "") {
          dE("sim_cont").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:crimson" id="sim' + btoa(ele) + '">' + ele + '</span>')
          dE("sim" + btoa(ele)).addEventListener('click', simClicker)
        }
      }
    } catch { }
  }
  if (type == "maths") {
    try {
      for (let ele of simlist.maths) {
        if (ele != "") {
          dE("sim_cont").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:turquoise" id="sim' + btoa(ele) + '">' + ele + '</span>')
          dE("sim" + btoa(ele)).addEventListener('click', simClicker)
        }
      }
    } catch { }
  }
  if (type == "biology") {
    try {
      for (let ele of simlist.biology) {
        if (ele != "") {
          dE("sim_cont").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:var(--clr10)" id="sim' + btoa(ele) + '">' + ele + '</span>')
          dE("sim" + btoa(ele)).addEventListener('click', simClicker)
        }
      }
    } catch { }
  }
  if (type == "computer") {
    try {
      for (let ele of simlist.computer) {
        if (ele != "") {
          dE("sim_cont").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:violet" id="sim' + btoa(ele) + '">' + ele + '</span>')
          dE("sim" + btoa(ele)).addEventListener('click', simClicker)
        }
      }
    } catch { }
  }
  if (type == "statistics") {
    try {
      for (let ele of simlist.statistics) {
        if (ele != "") {
          dE("sim_cont").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:orange" id="sim' + btoa(ele) + '">' + ele + '</span>')
          dE("sim" + btoa(ele)).addEventListener('click', simClicker)
        }
      }
    } catch { }
  }
  if (type == "unfiled") {
    try {
      for (let ele of simlist.unfiled) {
        if (ele != "") {
          dE("sim_cont").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:white" id="sim' + btoa(ele) + '">' + ele + '</span>')
          dE("sim" + btoa(ele)).addEventListener('click', simClicker)
        }
      }
    } catch { }
  }
}
// ----------------------
// BATCHES
async function newBatch() {
  try {
    const docRef = await addDoc(collection(db, 'batch'), {
      name: "",
      timetable: "",
      crton: serverTimestamp(),
      class: 12,
      chlist: [],
      delon: serverTimestamp()
    })
    var docRef1 = await setDoc(doc(db, 'batch', docRef.id, "info", "tests"), {
      tests: []
    })
    var docRef2 = await setDoc(doc(db, 'batch', docRef.id, "info", "updates"), {
      u: []
    })
    creMng("edit_batch/" + docRef.id, 1)
  } catch {
  }
}
async function newStoreItem() {
  try {
    const docRef = await addDoc(collection(db, 'store'), {
      name: "Store Item",
      price: "1000",
      bannerlink: "https://store.mtt.one",
      affiliatelink: "https://affiliate.mtt.one",
      crton: serverTimestamp(),
      p: 0,

    })
    creMng("edit_store/" + docRef.id, 1)
  } catch {
  }
}
async function newCodeHunt(){
  try {
    const docRef = await addDoc(collection(db, 'store'), {
      active: "0",
      args: "num",
      crton: serverTimestamp(),
      description: "Given a random <code>num</code>, print the number.",
      difficulty: "easy",
      explanation: "Nothing to say",
      name: "Random Number?",
      solution: "function execute(val1){\n    val1 = parseInt(val1) * 2;\n    return val1;\n}",
      tag: "First Problem",
      submit_input: ["1","2","3","4"],
      submit_output: ["2","4","6","8"],
      p: 0,
    })
    creMng("edit_codehunt/" + docRef.id, 1)
  } catch {
  }
}
async function renderStore() {
  if (userinfo.storeitems.length <= 0) {
    userinfo.storeitems = []
    const q = query(collection(db, "store"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var tfg = doc.data()
      userinfo.storeitems.push({ id: doc.id, crton: tfg.crton, name: tfg.name, price: tfg.price, bannerlink: tfg.bannerlink, affiliatelink: tfg.affiliatelink })
    })
  }

  for (var i = 0; i < userinfo.storeitems.length; i++) {
    dE("store_list").insertAdjacentHTML("beforeend", `<a style="width:max-content;height:max-content;" href = "` + userinfo.storeitems[i].affiliatelink + `" target = "_blank" id = "sl` + userinfo.storeitems[i].id + `"><div class = "store_card" style = "background:url('` + userinfo.storeitems[i].bannerlink + `');background-size: cover;"><div style = "position:fixed;bottom:0vh;margin:0px;padding:10px;width:100%;background-color:var(--bgcolor);height:max-content;display:flex;flex-direction:column;align-items:center;"><span style = "font-size: 14px">` + userinfo.storeitems[i].name + `</span><span style = "font-size: 12px;color:grey;">` + userinfo.storeitems[i].price + `/-</span></div></div></a>`)
  }
}

async function renderCodeProblemList() {
  if (userinfo.codeitems.length <= 0) {
    userinfo.codeitems = []
    const q = query(collection(db, "codehunt"), where("active", "==", "1"), limit(6));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var tfg = doc.data()
      userinfo.codeitems.push({ id: doc.id, crton: tfg.crton, name: tfg.name, difficulty: tfg.difficulty })
    })
  }

  for (var i = 0; i < userinfo.codeitems.length; i++) {
    dE("prb_list").insertAdjacentHTML("beforeend", `<div id = "sl` + userinfo.codeitems[i].id + `" class = "tlinks-3" style = "background-size: cover;"><span class = "t_title">` + userinfo.codeitems[i].name + `</span><span style = "font-size: 12px;color:grey;">` + userinfo.codeitems[i].difficulty + `</span></div>`)
    let h = userinfo.codeitems[i].id
    dE("sl" + userinfo.codeitems[i].id).addEventListener("click", function () {
      window.location.hash = "#/codehunt/problem/" + h
    })
  }
}
async function prepareBatch() {
  var docRef = doc(db, 'batch', window.location.hash.split("edit_batch/")[1])
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    var docRef = docSnap.data()
    dE("aq_batname").value = docRef.name;
    dE("aq_class").value = docRef.class;
    dE("aq_timetable").value = docRef.timetable;
    dE("aq_tst_delon").value = dateparser(docRef.delon.seconds * 1000)
  }
}
async function updateBatch() {
  let date = new Date(dE("aq_tst_delon").value)
  await updateDoc(doc(db, "batch", window.location.hash.split("edit_batch/")[1]), {
    name: dE("aq_batname").value,
    class: parseInt(dE("aq_class").value),
    timetable: dE("aq_timetable").value,
    delon: date,
  })
}
async function getBatch() {

}
async function unotes1() {
  await updateDoc(doc(db, "usernotes", window.location.hash.split("usernotes/")[1]), {
    title: dE("un_title").value,
    notes: getHTML("un_editable"),
    lastupdated: serverTimestamp(),
    type: dE("un_viewership").value
  })
  dE(window.location.hash.split("usernotes/")[1]).innerText = dE("un_title").value
}
function unotes2() {
  log("Confirmation", "Are you Sure you want to delete this Document?", function () {
    window.location.hash = "#/usernotes/delete/" + window.location.hash.split("usernotes/")[1]
  }, "Confirm", 1)
}
async function getUserNotes() {
  try { notesUIHandler() } catch { }
  if (window.location.hash.includes("usernotes/add")) {
    var docRef = await addDoc(collection(db, "usernotes"), {
      title: "Notes Title",
      notes: "",
      uuid: userinfo.uuid,
      crton: serverTimestamp(),
      type: "private",
      lastupdated: serverTimestamp()
    })
    userinfo.usernotes.push({ id: docRef.id, title: "Note Title" })
    creMng("usernotes/" + docRef.id, 1)
  } else if (window.location.hash.includes("usernotes/delete")) {
    await deleteDoc(doc(db, "usernotes", window.location.hash.split("usernotes/delete/")[1]));
    window.location.hash = "#/usernotes/"
  } else if (window.location.hash == "#/usernotes/") {
    getUserNotesList()
  } else if (window.location.hash.includes("usernotes")) {
    getUserNotesList()
    var docRef = doc(db, 'usernotes', window.location.hash.split("usernotes/")[1])
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      var docRef = docSnap.data()
      dE("un_title").value = docRef.title;
      setHTML("un_editable", docRef.notes);
      dE("un_viewership").value = docRef.type;
      if (docRef.type == "public_view" && userinfo.uuid != docRef.uuid) {
        dE("un_rendermode").innerHTML = '<option value="preview">preview</option>'
        dE("un_rendermode").value = "preview";
        dE("un_save").style.display = "none"
        dE("un_colorpicker").style.display = "none"
        dE("un_viewership").style.display = "none"
        dE("un_title").style.display = "none"
      } else {
        dE("un_rendermode").innerHTML = '<option value="edit">edit</option><option value="preview">preview</option>'
        dE("un_rendermode").value = "edit";
        dE("un_save").style.display = "block"
        dE("un_viewership").style.display = "block"
        dE("un_title").style.display = "block"
      }
      notesUIHandler()
    }
  } else { }
}
function uNotesClicker() {
  window.location.hash = "#/usernotes/" + this.id.split("uno")[1]
}
async function getUserNotesList() {
  try {
    if (userinfo.usernotes.length <= 0) {
      userinfo.usernotes = []
      const q = query(collection(db, "usernotes"), where("uuid", "==", userinfo.uuid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var tfg = doc.data()
        userinfo.usernotes.push({ id: doc.id, crton: tfg.crton, lastupdated: tfg.lastupdated, title: tfg.title, type: tfg.type, uuid: tfg.uuid })
      })
    }
  } catch { }
  try {
    for (var i = 0; i < userinfo.usernotes.length; i++) {
      dE("un_list").insertAdjacentHTML("beforeend", "<div class='t_notes' id='uno" + userinfo.usernotes[i].id + "' style='background-color: " + userinfo.usernotes[i].color + "'><span class='tntc2' id='" + userinfo.usernotes[i].id + "'>" + userinfo.usernotes[i].title + "</span></div>")
      dE("uno" + userinfo.usernotes[i].id).addEventListener("click", uNotesClicker)
    }
  } catch { }
  dE("un_list").insertAdjacentHTML("beforeend", "<div class='t_notes' id='unoadd'><span><center>+</center></span></div>")
  dE("unoadd").addEventListener("click", uNotesClicker)
}
async function getPDF() {
  var id = window.location.hash.split("notes/")[1]
  showLS("s");
  getDownloadURL(ref(storage, 'public/' + id + '.pdf')).then((url) => { dE("nt_id").src = "https://docs.google.com/gview?url=" + encodeURI(url) + "&embedded=true"; dE("nt_id").onload = showLS("d"); }).catch((error) => {
    switch (error.code) {
      case 'storage/object-not-found':
        dE("nt_id").src = "https://docs.google.com/gview?url=" + encodeURI("https://firebasestorage.googleapis.com/v0/b/quarkz.appspot.com/o/public%2F404.pdf?alt=media&token=8cc8f23a-6e24-41d6-984b-6d2cc9b89d11") + "&embedded=true"
        break;
      case 'storage/unauthorized':
        log("Unauthorised", "You dont have necessary permissions to The file you requested.")
        break;
    }
  })
}
// FORUM
// ----------------------
async function sndMsg() {
  var qtxt = dE("fm_message").value
  if (qtxt.includes("/pinned")) {
    qtxt = qtxt.split("/pinned")[1]
    try {
      await updateDoc(doc(db, "forum", "pinned"), { message: qtxt })
    } catch {
      alert("You Dont Have The Privilages For This Command")
    }
    async function upDoc(sTime) {
      await updateDoc(doc(db, "forum", "ppinned"), { ppinned: arrayUnion({ message: qtxt, user: userinfo.uuid, time: sTime }) })
    }
    var sTime = await getServerTime("http://localhost:5500/time.html").then(upDoc(sTime))

  } else {
    if (qtxt != "" && qtxt != null) {
      await addDoc(collection(db, "forum"), {
        name: userinfo.name,
        message: qtxt,
        userid: userinfo.uuid,
        sgndon: serverTimestamp()
      })
      dE("fm_message").value = ""
    } else {
      alert("Message Cannot Be Empty")
    }
  }
}
function displayMessage(id, time, name, text, userid) {
  var sanitizedText = text.replace(/<[^>]+>/g, '');
  if (userid == "shh5oUIhRpdBkEKQ3GCZwoKE9u42") {
    var d = "<div id = 'dM" + id + "'><span class = 'dmName'>" + name + "👑: </span><span class = 'dmText'>" + sanitizedText + "</span><span class = 'dmtime'>" + time + "</span></div>"
    dE("forum_live").insertAdjacentHTML(forum_d, d)
  } else {
    var d = "<div id = 'dM" + id + "'><span class = 'dmName'>" + name + ": </span><span class = 'dmText'>" + sanitizedText + "</span><span class = 'dmtime'>" + time + "</span></div>"
    dE("forum_live").insertAdjacentHTML(forum_d, d)
  }
}
function deleteMessage(id) { dE("dM" + id).remove() }
let recentMessagesQuery;
let reMSG = function () { };
async function gtMsg(type) {
  if (type == 1) {
    dE("forum_live").innerHTML = ""
    recentMessagesQuery = query(collection(getFirestore(), 'forum'), orderBy('sgndon', 'desc'), limit(10));
    reMSG = onSnapshot(recentMessagesQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type === 'removed') {
          deleteMessage(change.doc.id);
        } else if (change.type == 'added') {
          if (forum_length >= 11) {
            forum_d = "beforeend"
          }
          var message = change.doc.data();
          displayMessage(change.doc.id, "", message.name,
            message.message, message.userid);
          forum_length = forum_length + 1
        }
      });
    });
  } else if (type == 2) {
    reMSG()
    reMSG = function () { }
  }
}
async function getPinned() {
  var docRef = doc(db, 'forum', 'pinned')
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    var docRef = docSnap.data()
    dE("pinnedtxt").innerText = docRef.message;
  }
}

var forum_length = 1;
var forum_d = "afterbegin"

// ----------------------
// QBANK VIDEO
// Slide Controller For QBANK Video
function vidSlideController(docJSON) {
  function iu(ele) { ele.style.display = "none" }
  function io(ele) { ele.style.display = "block" }
  function qif(ele) { ele.style.display = "flex" }
  var tpmcqcon = dE("tb_q_mcq_con")
  var tpmatrix = dE("tb_q_matrix")
  var tpanswer = dE("tb_q_answer")
  tpmcqcon.innerHTML = ""
  dE("tb_q_qtext").innerHTML = docJSON.title + "<span class = 'sp_txt'>(" + docJSON.type + ")</span>"
  // dE("tb_q_img").src = docJSON.img
  if (docJSON.type == "mcq" || docJSON.type == "mcq_multiple" || docJSON.type == "mcq_multiple_partial") {
    qif(tpmcqcon); iu(tpmatrix); iu(tpanswer)
    var qop = docJSON.op; var asi = "";
    for (let ele1 of qop) {
      asi += '<div class="tb_q_mcq_p rpl">' + ele1 + '</div>'
    }
    dE("tb_q_mcq_con").insertAdjacentHTML('beforeend', asi)
  } else if (docJSON.type == "matrix") {
    iu(tpmcqcon); io(tpmatrix); iu(tpanswer);
    var qop1 = docJSON.op1;
    var qop2 = docJSON.op2;
    var qopn1 = qop1.length
    for (var i = 0; i < qopn1; i++) {
      document.getElementsByClassName("tp_i1")[i].innerHTML = qop1[i]
    }
    for (var i = 0; i < qopn1; i++) {
      document.getElementsByClassName("tp_i2")[i].innerHTML = qop2[i]
    }
  } else if (docJSON.type == "numerical" || docJSON.type == "fill") {
    iu(tpmcqcon); iu(tpmatrix); io(tpanswer)
  } else if (docJSON.type == "taf") {
    qif(tpmcqcon); iu(tpmatrix); iu(tpanswer)
    var asi = '<div class="tp_mcq_p rpl">True</div><div class="tp_mcq_p rpl">False</div>'
    dE("tp_mcq_con").insertAdjacentHTML('beforeend', asi)
  } else {
    iu(tpmcqcon); iu(tpmatrix); iu(tpanswer);
  }
  renderMathInElement(dE('tp_ans_hold'));
  renderMathInElement(dE('tp_qtext'));
} let mediaRecorder;
// Prepares Slides Controller
async function prepareVideo() {
  dE("qbnk_vid_btn").style.display = "none"
  dE("qbnk_vid_btn_e").style.display = "none"
  try {
    let docSnap = await getDoc(doc(db, "qbank", window.location.hash.split("qbnk_vid/")[1]))
    if (docSnap.exists()) {
      var docJSON = docSnap.data();
      dE("tb_q_title").innerText = docJSON.name
      dE("qb_vid_ti").innerText = docJSON.name
      dE("qbnk_vid_q").style.display = "none"
      dE("qbnk_vid_ans").style.display = "none"
      dE("qbnk_vid_title").style.display = "flex"
      dE("qbnk_vid_end").style.display = "none"
      dE("watermark").style.display = "none"
      let qllist = docJSON.qllist
      let stream = await recordScreen();
      let mimeType = 'video/mp4';
      fullEle(dE("qbnk_vid"))
      mediaRecorder = createRecorder(stream, mimeType);
      var ji = 0;
      var ti = 0
      var jno = 0;
      var timer;
      var iou = setInterval(function () {
        dE("qbnk_vid_q").style.display = "none"
        dE("qbnk_vid_ans").style.display = "none"
        dE("qbnk_vid_title").style.display = "none"
        dE("qbnk_vid_end").style.display = "none"
        if (ti == 0) {
          dE("qbnk_vid_title").style.display = "flex"
          ti++
        } else if (jno == qllist.length - 1) {
          dE("qbnk_vid_end").style.display = "flex"
          setTimeout(function () {
            mediaRecorder.stop()
            dE("qbnk_vid_btn").style.display = "block"
          }, 5000)
          clearInterval(iou);
        } else if (ji == 0 || ji == 1) {
          vidSlideController(qllist[jno])
          var f = jno + 1
          if (ji == 0) {
            dE("qbnk_timer").innerText = 10
            timer = setInterval(function () { dE("qbnk_timer").innerText = dE("qbnk_timer").innerText - 1 }, 1000)
          }
          dE("tb_q_qno").innerText = "Question " + f + ":"
          dE("qbnk_vid_q").style.display = "flex"
          ji++
        } else if (ji == 2) {
          dE("qbnk_vid_ans").style.display = "flex"
          clearInterval(timer);
          var asi = "";
          for (var i = 0; i < qllist[jno].answer.length; i++) {
            asi += '<div class="tb_q_mcq_p rpl" style = "background-color:green">' + qllist[jno].answer[i] + '</div>'
          }
          dE("tb_q_ans").innerHTML = asi
          dE("tb_q_hint").innerHTML = qllist[jno].hint
          dE("tb_q_expl").innerHTML = qllist[jno].expl
          ji = 0;
          jno++
        }
      }, 5000);
    }
  } catch { }
}
async function getCyberhunt() {
  if (window.location.hash.split("/cyberhunt/")[1] == "" || window.location.hash.split("/cyberhunt")[1] == "") {
    dE("cyb_code").style.display = "flex"
    dE("cyb_viewer").style.display = "none"
    dE("cyb_edit").style.display = "none"
  } else {
    dE("cyb_code").style.display = "none"
    dE("cyb_viewer").style.display = "flex"
    dE("cyb_edit").style.display = "none"

  }
}

// -----------------------
// TOPIC/QBANK
function addItemToQLLIst() {
  var qans = dE("aq_answer").value.split(",")
  var qtype = dE("aq_type").value
  var qop = [];
  var qop1 = [];
  var qop2 = [];
  if (qtype == "mcq" || qtype == "mcq_multiple" || qtype == "mcq_multiple_partial") {
    qans = []
    for (i = 0; i < document.getElementsByClassName("aq_mcq_ans").length; i++) {
      var a = document.getElementsByClassName("aq_mcq_ans")[i].value;
      qans[i] = a
    }
  }
  for (var i = 0; i < document.getElementsByClassName("aq_mcq").length; i++) {
    qop.push(document.getElementsByClassName("aq_mcq")[i].value)
  }
  for (var i = 0; i < document.getElementsByClassName("aq_i1").length; i++) {
    qop1.push(document.getElementsByClassName("aq_i1")[i].value)
  }
  for (var i = 0; i < document.getElementsByClassName("aq_i2").length; i++) {
    qop2.push(document.getElementsByClassName("aq_i2")[i].value)
  }
  if (location1.includes("edit_test")) {
    var json = { qid: curr_qlid, mode: dE("aq_mode").value, title: getHTML("aq_qtext"), y_url: dE("aq_yurl").value, hint: dE("aq_hint").value, expl: getHTML("aq_expl"), type: qtype, answer: qans, op: qop, op1: qop1, op2: qop2, section: dE("aq_section").value, pm: dE("aq_posmrks").value, nm: dE("aq_negmrks").value, qtopic: dE("aq_q_topic").value }
  } else if (location1.includes("edit_exams")) {
    var json = { id: curr_qlid, name: dE("aq_examname").value, date: dE("aq_examdate").value, info: dE("aq_examinfo").value, syllabus: dE("aq_examsyllabus").value, mode: "exams" }
  } else {
    var json = { id: curr_qlid, mode: dE("aq_mode").value, title: getHTML("aq_qtext"), y_url: dE("aq_yurl").value, hint: dE("aq_hint").value, expl: getHTML("aq_expl"), type: qtype, answer: qans, op: qop, op1: qop1, op2: qop2, section: dE("aq_section").value, pm: dE("aq_posmrks").value, nm: dE("aq_negmrks").value, qtopic: dE("aq_q_topic").value }
  }
  return json
}
async function changeItem(t) {
  function iu(ele) { ele.style.display = "none" }
  function io(ele) { ele.style.display = "block" }
  function qif(ele) { ele.style.display = "flex" }
  var mode = dE("aq_mode").value
  var qcont = dE("aq_ans_hold")
  var qtype = dE("aq_type")
  var qans = dE("aq_answer")
  var qyurl = dE("aq_yurl")
  var qmcq = dE("aq_mcq_con")
  var qmat = dE("aq_matrix")
  var qimgupl = dE("aq_upl")
  var qqall = dE("aq_all")
  var qtpc = dE("aq_tpc")
  var qqbk = dE("aq_qbk")
  var qsims = dE("aq_sims")
  // var qsubj = dE("aq_subject").value
  if (mode == "question") {
    iu(qyurl); io(qcont); io(qtype); io(qans); qif(qqall);
  } else if (mode == "lesson") {
    io(qyurl); iu(qcont); iu(qtype); iu(qans); qif(qqall);
  } else if (mode == "exams") {
    iu(qyurl); iu(qcont); iu(qtype); iu(qans); iu(qqall);
  }
  if (qtype.value == "mcq" || qtype.value == "mcq_multiple" || qtype.value == "mcq_multiple_partial") {
    qif(qmcq); iu(qmat); iu(qans)
  } else if (qtype.value == "matrix") {
    io(qmat); iu(qmcq); iu(qans)
  } else {
    iu(qmat); iu(qmcq); io(qans)
  }
}
function rEQL(u) {
  renderEditQLList(this.innerText)
}
function renderEditQLList(qno) {
  if (qno == "+") {
    let po = editqllist.length
    if (window.location.hash.includes("edit_exams")) {
      editqllist[po] = { id: Date.now() + Math.random().toString(36).substr(2), name: "", date: "", info: "", syllabus: "", mode: "exams" }
    } else {
      editqllist[po] = { id: Date.now() + Math.random().toString(36).substr(2), mode: "", title: "", y_url: "", img: "", hint: "", expl: "", type: "mcq", answer: ["1"], op: ["1", "2", "3", "4"], op1: [], op2: [], section: "Unfiled", pm: 4, nm: -1, qtopic: "" }
    }
    if (window.location.hash.includes("edit_qubank") || window.location.hash.includes("edit_test")) { editqllist[po].mode = "question" }
    if (location1.includes("edit_test")) {
      editqllist[po].qid = editqllist[po].id
    }
    qno = po
  }
  dE("question_list").innerHTML = ""
  for (var i = 1; i < editqllist.length + 1; i++) {
    dE("question_list").insertAdjacentHTML('beforeend', '<span class = "t_no_qno" id = "t_no_qno_' + i + '">' + i + '</span>')
    dE("t_no_qno_" + i).addEventListener("click", rEQL)
  }
  dE("question_list").insertAdjacentHTML('beforeend', '<span class = "t_no_qno" id = "t_no_qno_add">+</span>')
  dE("t_no_qno_add").addEventListener("click", rEQL)
  // }
  if (qno != 0) {
    editqllist[curr_qlno - 1] = addItemToQLLIst()
    curr_qlno = qno;
  } else {
  }
  var op = editqllist[curr_qlno - 1]
  if (window.location.href.includes("edit_exams")) {
    dE("aq_examname").value = op.name
    dE("aq_examdate").value = op.date
    dE("aq_examinfo").value = op.info
    dE("aq_examsyllabus").value = op.syllabus
    changeItem()
    return;
  }
  if (location1.includes("edit_test")) {
    curr_qlid = op.qid
  } else {
    curr_qlid = op.id
  }
  dE("aq_mode").value = op.mode
  dE("aq_id").value = curr_qlid
  setHTML("aq_qtext", op.title)
  dE("aq_yurl").value = op.y_url
  dE("aq_type").value = op.type
  dE("aq_hint").value = op.hint
  dE("aq_section").value = op.section
  dE("aq_posmrks").value = op.pm
  dE("aq_negmrks").value = op.nm
  dE("aq_q_topic").value = op.qtopic
  setHTML("aq_expl", op.expl)
  if (op.type == "mcq" || op.type == "mcq_multiple" || op.type == "mcq_multiple_partial") {
    dE("aq_mcq_con").innerHTML = ""
    for (var g = 0; g < op.op.length; g++) {
      addMCQ()
      document.getElementsByClassName("aq_mcq")[g].value = op.op[g]
      for (var h = 0; h < op.answer.length; h++) {
        if (op.op[g] == op.answer[h]) {
          document.getElementsByClassName("aq_mcq")[g].classList.add("aq_mcq_ans")
          document.getElementsByClassName("aq_mcq_p")[g].style.borderColor = "var(--clr10)"
        }
      }
    }
  } else if (op.type == "numerical" || op.type == "explain" || op.type == "fill" || op.type == "taf") {
    dE("aq_answer").value = op.answer.toString()
  }
  changeItem()
}
async function newTopic() {
  try {

    const docRef = await addDoc(collection(db, 'topic'), {
      name: "",
      qllist: [],
      level: "jee",
      chid: "",
      chname: "",
      subject: ""
    })
    creMng("edit_tpc/" + docRef.id, 1)
  } catch {
  }
}
async function newQBank() {
  try {

    const docRef = await addDoc(collection(db, 'qbank'), {
      name: "",
      qllist: [],
      level: "jee",
      chid: "",
      chname: "",
      subject: ""
    })
    creMng("edit_qubank/" + docRef.id, 1)
  } catch {
  }
}
async function prepareEditExam() {
  let docSnap = await getDoc(doc(db, "quarkz", "exams"))
  if (docSnap.exists()) {
    var docJSON = docSnap.data();
    editqllist = docJSON.examinfo
    renderEditQLList(0)
  }
}
async function prepareTopicQBank(iun) {
  var col, id;
  dE("aq_basic").style.display = "flex"
  if (iun == 1) {
    // Topic
    col = 'topic'
    id = window.location.hash.split("edit_tpc/")[1]
    dE("fu_topic_title").innerText = "Add/Edit Topic"
    dE("aq_mode").innerHTML = `<option value="question">Question</option><option value="lesson">Lesson</option>`
    dE("aq_tpc_save").style.display = "block"
    dE("aq_qbc_save").style.display = "none"
    dE("aq_tst_save").style.display = "none"
    dE("aq_test_extra").style.display = "none"
    dE("aq_exam_save").style.display = "none"
    dE("aq_exams").style.display = "none"
    dE("aq_all").style.display = "flex"
    dE("aq_ans_hold").style.display = "flex"
  } else if (iun == 2) {
    // QBank
    col = 'qbank'
    id = window.location.hash.split("edit_qubank/")[1]
    dE("fu_topic_title").innerText = "Add/Edit QBank"
    dE("aq_mode").innerHTML = `<option value="question">Question</option>`
    dE("aq_tpc_save").style.display = "none"
    dE("aq_tst_save").style.display = "none"
    dE("aq_test_extra").style.display = "none"
    dE("aq_qbc_save").style.display = "block"
    dE("aq_exam_save").style.display = "none"
    dE("aq_exams").style.display = "none"
    dE("aq_all").style.display = "flex"
    dE("aq_ans_hold").style.display = "flex"
  } else if (iun == 3) {
    // Tests
    col = 'tests'
    id = window.location.hash.split("edit_tests/")[1]
    dE("fu_topic_title").innerText = "Add/Edit Tests"
    dE("aq_mode").innerHTML = `<option value="question">Question</option>`
    dE("aq_tpc_save").style.display = "none"
    dE("aq_qbc_save").style.display = "none"
    dE("aq_test_extra").style.display = "flex"
    dE("aq_tst_save").style.display = "block"
    dE("aq_exam_save").style.display = "none"
    dE("aq_exams").style.display = "none"
    dE("aq_all").style.display = "flex"
    dE("aq_ans_hold").style.display = "flex"
  } else if (iun == 4) {
    col = 'quarkz'
    id = 'exams'
    dE("fu_topic_title").innerText = "Add/Edit Exams"
    dE("aq_mode").innerHTML = `<option value="exam">Exam</option>`
    dE("aq_tpc_save").style.display = "none"
    dE("aq_qbc_save").style.display = "none"
    dE("aq_test_extra").style.display = "none"
    dE("aq_exam_save").style.display = "block"
    dE("aq_tst_save").style.display = "none"
    dE("aq_exams").style.display = "flex"
    dE("aq_all").style.display = "none"
    dE("aq_ans_hold").style.display = "none"
    dE("aq_basic").style.display = "none"
  }
  try {
    let docSnap = await getDoc(doc(db, col, id))
    if (docSnap.exists()) {
      if (iun == 1 || iun == 2) {
        var docJSON = docSnap.data();
        dE("aq_tpcname").value = docJSON.name
        dE("aq_tpclevel").value = docJSON.level
        dE("aq_tpc_subj").value = docJSON.subject
        dE("aq_tpc_chapterid").value = docJSON.chid
        editqllist = docJSON.qllist
        renderEditQLList(0)
        renderEditQLList(1)
      } else if (iun == 3) {
        var docJSON = docSnap.data();
        dE("aq_tpcname").value = docJSON.title
        dE("aq_tpclevel").value = docJSON.level
        dE("aq_tpc_subj").value = docJSON.subject
        dE("aq_randomize").checked = docJSON.randomize
        dE("aq_blockresult").checked = docJSON.blockresult
        dE("aq_tst_batches").value = docJSON.batch.toString()
        dE("aq_tst_stron").value = dateparser(docJSON.strton.seconds * 1000)
        dE("aq_tst_endon").value = dateparser(docJSON.endon.seconds * 1000)
        dE("aq_tst_timealotted").value = docJSON.timeallotted
        dE("aq_tst_passpercentage").value = docJSON.passpercentage
        dE("aq_tst_syllabi").value = docJSON.syllabus
        setHTML("aq_add_test_instr", docJSON.instructions)
        let docSnap2 = await getDoc(doc(db, "tests", id, "questions", "questions"))
        let docSnap3 = await getDoc(doc(db, "tests", id, "questions", "answers"))
        let q = []
        let a = []
        if (docSnap2.exists()) { var docJSON2 = docSnap2.data(); q = docJSON2.questions }
        if (docSnap3.exists()) { var docJSON3 = docSnap3.data(); a = docJSON3.questions }
        editqllist = mergeById(q, a)
        renderEditQLList(0)
        renderEditQLList(1)
      } else if (iun == 4) {
        var docJSON = docSnap.data();
        editqllist = docJSON.examinfo
        renderEditQLList(0)
        renderEditQLList(1)
      }

    }
  } catch { }
}
function removeEntry() {
  for (var i = 0; i < editqllist.length; i++) {
    if (editqllist[i].qid == curr_qlid || editqllist[i].id == curr_qlid) {
      editqllist.splice(i, 1)
      renderEditQLList(0)
      curr_qlid = editqllist[i - 1].qid || editqllist[i - 1].id
      if (curr_qlid == undefined) { curr_qlid = "" }
    }
  }
}
async function updateTopicQBank(iun) {
  for (var i = 0; i < editqllist.length; i++) {
    if (editqllist[i].qid == curr_qlid || editqllist.id == curr_qlid) {
      editqllist[i] = addItemToQLLIst()
    }
  }
  var col, id;
  if (iun == 1) {
    // Topic
    col = 'topic'
    id = window.location.hash.split("edit_tpc/")[1]

  } else if (iun == 2) {
    // QBank
    col = 'qbank'
    id = window.location.hash.split("edit_qubank/")[1]
  } else if (iun == 3) {
    col = 'tests'
    id = window.location.hash.split("edit_tests/")[1]
  } else if (iun == 4) {
    col = 'quarkz'; id = "exams"
  }
  if (iun == 1 || iun == 2) {
    try {
      const docRef = await updateDoc(doc(db, col, id), {
        name: dE("aq_tpcname").value,
        qllist: editqllist,
        level: dE("aq_tpclevel").value,
        chid: dE("aq_tpc_chapterid").value,
        subject: dE("aq_tpc_subj").value
      })
    } catch {
    }
  } else if (iun == 3) {
    try {
      let qnos = 0
      let marks = 0
      for (var i = 0; i < editqllist.length; i++) {
        var ele = editqllist[i]
        marks += parseInt(ele.pm)
        qnos += 1
      }
      var fgio = new Date(dE("aq_tst_stron").value)
      var fgio2 = new Date(dE("aq_tst_endon").value)
      var wer = dE("aq_tst_batches").value.split(",")
      const docRef = await updateDoc(doc(db, col, id), {
        title: dE("aq_tpcname").value,
        timeallotted: dE("aq_tst_timealotted").value,
        passpercentage: dE("aq_tst_passpercentage").value,
        syllabus: dE("aq_tst_syllabi").value,
        instructions: getHTML("aq_add_test_instr"),
        randomize: dE("aq_randomize").checked,
        blockresult: dE("aq_blockresult").checked,
        strton: fgio,
        endon: fgio2,
        batch: wer,
        questionnos: qnos,
        totalmarks: marks,
      })
    } catch {
    }
    var q = [];
    var a = [];
    for (var i = 0; i < editqllist.length; i++) {
      var ele = editqllist[i]
      q.push({ qid: ele.qid, mode: ele.mode, title: ele.title, type: ele.type, op: ele.op, op1: ele.op1, op2: ele.op2, section: ele.section, pm: ele.pm, nm: ele.nm, qtopic: ele.qtopic })
      a.push({ qid: ele.qid, hint: ele.hint, expl: ele.expl, answer: ele.answer, section: ele.section, pm: ele.pm, nm: ele.nm, type: ele.type, qtopic: ele.qtopic })
    }
    try {
      const docRef = await updateDoc(doc(db, col, id, "questions", "questions"), {
        questions: q
      })
    } catch (error) {
      log(error)
    }
    try {
      const docRef = await updateDoc(doc(db, col, id, "questions", "answers"), {
        questions: a
      })
    } catch {
    }
  } else if (iun == 4) {
    const docRef = await updateDoc(doc(db, col, id), {
      examinfo: editqllist
    })
  }
}
function qbkclicker() {
  window.location.hash = "#/qbanks/" + atob(this.id.split("chpqbk")[1])
}
function tpcclicker() {
  window.location.hash = "#/topic/" + atob(this.id.split("chptpc")[1])
}
// Get Topic Info
async function getTopic(type) {
  var fireID = ""; var urlID = "";
  if (type == 1) { fireID = "topic"; urlID = "topic" }
  else if (type == 2) { urlID = "qbanks"; fireID = "qbank" }
  else { fireID = "topic" }

  var urlC = urlID + "/"
  var topicno = window.location.hash.split(urlC)[1]

  var docRef = doc(db, fireID, topicno)
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) { var docJSON = docSnap.data(); }
  else { creMng("error_page", 1); throw new Error }

  topicJSON = {}
  topicJSON.title = docJSON.name
  topicJSON.qllist = docJSON.qllist
  topicHandler(3)
}
// /#/chapter
// Get Chapter List From Web
async function getChapterEList() {
  dE("chp_chaptername").innerHTML = ""
  dE("chp_qbk_list").innerHTML = ""
  dE("chp_tpc_list").innerHTML = ""
  var docRef = doc(db, 'chapter', window.location.hash.split("#/chapter/")[1])
  var docSnap = await getDoc(docRef);
  var iupa, docJSON;
  var poll = ""
  if (docSnap.exists()) {
    var docJSON = docSnap.data();
    dE("chp_chaptername").innerText = docJSON.name
    try {
      for (let ele of docJSON.qbanks) {
        dE("chp_qbk_list").insertAdjacentHTML('beforeend', '<span class="tlinks_min rpl" style = "color:pink" id="chpqbk' + btoa(ele.id) + '">' + ele.title + '</span>')
        dE("chpqbk" + btoa(ele.id)).addEventListener('click', qbkclicker)
      }
    } catch { }
    try {
      for (let ele of docJSON.topics) {
        dE("chp_tpc_list").insertAdjacentHTML('beforeend', '<span class="tlinks_min rpl" style = "color:pink" id="chptpc' + btoa(ele.id) + '">' + ele.title + '</span>')
        dE("chptpc" + btoa(ele.id)).addEventListener('click', tpcclicker)
      }
    } catch { }
  }
}
console.warn = function () { }
// Chapter Link Handler
function chclicker() {
  window.location.hash = "#/chapter/" + atob(this.id.split("qb")[1])
}
// Rendering Chapter List
function renderCList(type) {
  dE("qb_cont_2").innerHTML = ""
  for (var i = 0; i < chapterlist.length; i++) {
    var ele = chapterlist[i]
    if (ele.subject == type) {
      dE("qb_cont_2").insertAdjacentHTML('beforeend', '<span class="tlinks rpl" style = "color:pink" id="qb' + btoa(ele.id) + '">' + ele.name + '</span>')
      dE("qb" + btoa(ele.id)).addEventListener('click', chclicker)
    }
  }
}
// /#/printable
// Print Question Bank
async function printQBank(type) {
  var fireID = "";
  if (type == 1) { fireID = "qbank"; }
  else if (type == 2) { fireID = "topic"; }
  else if (type == 3) { fireID = "tests" }
  else { fireID = "qbank" }
  var qbankno = window.location.hash.split("printable/" + fireID + "/")[1]
  dE("eqb_add").innerHTML = ""
  var qbanktitle = dE("qb_title")
  if (type == 1 || type == 2) {
    var docRef = doc(db, fireID, qbankno)
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      var docJSON = docSnap.data(); qnos = docJSON.qllist;
      qbanktitle.innerText = docJSON.name;
    }
  } else if (type == 3) {
    var qlist, alist
    var docRef = doc(db, fireID, qbankno,)
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      var docJSON = docSnap.data(); qnos = docJSON.qllist;
      qbanktitle.innerText = docJSON.title;
      dE("pt_ins").innerHTML = `
      <span style="font-size:18px;color:var(--clr10);">Test Information:</span>
            <ul style="font-size: 14px;color:white;">
                <li> Time Allotted:&nbsp;<span id = "i_time">`+ docJSON.timeallotted + `</span> </li>
                <li> Syllabus:&nbsp;<span id = "i_syllabus">`+ docJSON.syllabus + `</span> </li>
                <li> Total Marks:&nbsp;<span id = "i_total">`+ docJSON.totalmarks + `</span> </li>
                <li> No of Questions:&nbsp;<span id = "i_qno">`+ docJSON.questionnos + `</span></li>
            </ul>
      <span style="font-size:18px;color:var(--clr10);">Test Specific Instructions:</span>
      <div id = "tsi" style="font-size:14px;">`+ docJSON.instructions + `</div><hr>
    `
    }
    var docRef2 = doc(db, fireID, qbankno, "questions", "questions")
    var docSnap2 = await getDoc(docRef2);
    if (docSnap2.exists()) {
      var docJSON2 = docSnap2.data(); qlist = docJSON2.questions;
    }
    var docRef3 = doc(db, fireID, qbankno, "questions", "answers")
    var docSnap3 = await getDoc(docRef3);
    if (docSnap3.exists()) {
      var docJSON3 = docSnap3.data(); alist = docJSON3.questions;
    }
    qnos = mergeById(qlist, alist)
  } else { creMng("error_page", 1); throw new Error }

  var qnos, qtitle, qtype, qimg;


  for (let ele of qnos) {
    if (ele.mode == "question") {
      var docJSON = ele
      ele.id = ele.qid || ele.id
      qtitle = docJSON.title;
      qtype = docJSON.type;
      qimg = docJSON.img;
      if (qimg == undefined) { qimg = "" }
      var expl = '<div class = "q_ans_expl" style = "font-weight:bold;color:green;font-size:10px;flex-direction:row;display:none;">Explaination:' + docJSON.expl + '</div>'
      var ans = "<div style = 'font-weight:bold;color:green;font-size:10px;flex-direction:row;display:none' class = 'q_ans_1'>Answer:";
      var inhtml = '<div class = "qbtp_q"><div id = "' + ele.id + '">' + qtitle + '<div class = "qb_q_ty">(' + qtype + ')(' + docJSON.pm + '/' + docJSON.nm + ')</div></div>'
      dE("eqb_add").insertAdjacentHTML('beforeend', inhtml);
      if (qimg != "") {
        var iwo = '<div class = "qb_img"><img src = "' + qimg + '"></div>'
        dE(ele.id).insertAdjacentHTML('beforeend', iwo)
      }
      var asi = "";
      if (qtype == "mcq" || qtype == "mcq_multiple" || qtype == "mcq_multiple_partial") {
        var qop = docJSON.op;
        for (let ele1 of qop) {
          asi += "<div class = 'qb_mcq_opt'>" + ele1 + '</div>'
        }
        var qrt = '<div class = "qb_mcq_exp" type = "a">' + asi + '</div>'
        for (let ele1 of docJSON.answer) {
          ans += "<div class = 'qb_mcq_ans'>" + ele1 + '</div>'
        }
      }
      if (qtype == "taf") {
        qrt = '<ol class = "qb_mcq_exp" type = "a"><li>True</li><li>False</li></ol>'
      }
      if (qtype == "explain" || qtype == "numerical" || qtype == "fill") { qrt = ""; ans += ele.answer.toString() + "</span>" }

      if (qtype == "matrix") {
        var qop1 = docJSON.op1;
        var qop2 = docJSON.op2;
        var qopn1 = qop1.length
        for (var i = 0; i < qopn1; i++) {
          asi += "<tr><td>" + qop1[i] + '</td><td>' + qop2[i] + '</td>'
        }
        qrt = '<table>' + asi + '</table>'
      }
      dE(ele.id).insertAdjacentHTML('beforeend', qrt)
      dE(ele.id).insertAdjacentHTML('beforeend', ans + "</div>")
      dE(ele.id).insertAdjacentHTML('beforeend', expl)
      renderMathInElement(dE('eqb_add'));
    } else if (ele.mode == "lesson") {
      var docJSON = ele
      qtitle = docJSON.title;
      qtype = docJSON.type;
      qimg = docJSON.img;
      var src_url;
      if (docJSON.y_url == "") {
        src_url = ""
      } else {
        src_url = "https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=https://www.youtube.com/watch?v=" + docJSON.y_url
      }
      var inhtml = '<div class = "les_q"><div id = "' + ele.id + '"><div style = "display:flex;flex-direction:row;justify-content: space-between;"><div style = "font-size:18px;">' + qtitle + '</div><img style = "float:right" src="' + src_url + '"></div><hr width="100%"></div>'
      dE("eqb_add").insertAdjacentHTML('beforeend', inhtml);
      dE(ele.id).insertAdjacentHTML('beforeend', expl)
      renderMathInElement(dE('eqb_add'));
    }
  }
  dE("eqb_add").insertAdjacentHTML('beforeend', '<br></br>')
}
async function lessonRenderer(docJSON) {
  dE("tp_question").style.display = "none"
  dE("tp_lesson").style.display = "block"
  if (docJSON.y_url == "") {
    dE("tp_full_vid").style.display = "none"
  } else {
    dE("tp_full_vid").style.display = "flex"
    loadVid(docJSON.y_url)
  }
  dE("tp_lsno").innerText = docJSON.title
  dE("tp_expl").innerHTML = docJSON.expl
  dE("report-tag").value = docJSON.id
  // dE("tp_lsimg").src = docJSON.img
}
async function questionRenderer(docJSON, totalq, pqno) {
  function iu(ele) { ele.style.display = "none" }
  function io(ele) { ele.style.display = "block" }
  function qif(ele) { ele.style.display = "flex" }
  iu(dE("tp_hint")); iu(dE("tp_a_expl")); iu(dE("tp_e_answer")); iu(dE("tp_status"))
  var tpmcqcon = dE("tp_mcq_con")
  var tpmatrix = dE("tp_matrix")
  var tpanswer = dE("tp_answer")
  dE("tp_lsno").innerHTML = "Question<span style = 'font-size:12px'>&nbsp;" + pqno + " of (" + totalq + ")</span>"
  dE("tp_question").style.display = "flex"
  dE("tp_lesson").style.display = "none"
  dE("tp_question").setAttribute("dataid", docJSON.id)
  dE("tp_question").setAttribute("qtype", docJSON.type)
  dE("report-tag").value = docJSON.id
  tpmcqcon.innerHTML = ""
  dE("tp_qtext").innerHTML = docJSON.title
  // dE("tp_img").src = ""
  if (docJSON.type == "mcq" || docJSON.type == "mcq_multiple" || docJSON.type == "mcq_multiple_partial") {
    qif(tpmcqcon); iu(tpmatrix); iu(tpanswer)
    var qop = docJSON.op; var asi = "";
    for (let ele1 of qop) {
      asi += '<div class="tp_mcq_p rpl" onclick = "mcqchose(this)">' + ele1 + '</div>'
    }
    dE("tp_mcq_con").insertAdjacentHTML('beforeend', asi)
  } else if (docJSON.type == "matrix") {
    iu(tpmcqcon); io(tpmatrix); iu(tpanswer);
    var qop1 = docJSON.op1;
    var qop2 = docJSON.op2;
    var qopn1 = qop1.length
    for (var i = 0; i < qopn1; i++) {
      document.getElementsByClassName("tp_i1")[i].innerText = qop1[i]
    }
    for (var i = 0; i < qopn1; i++) {
      document.getElementsByClassName("tp_i2")[i].innerText = qop2[i]
    }
  } else if (docJSON.type == "numerical" || docJSON.type == "fill") {
    iu(tpmcqcon); iu(tpmatrix); io(tpanswer)
  } else if (docJSON.type == "taf") {
    qif(tpmcqcon); iu(tpmatrix); iu(tpanswer)
    var asi = '<div class="tp_mcq_p rpl">True</div><div class="tp_mcq_p rpl">False</div>'
    dE("tp_mcq_con").insertAdjacentHTML('beforeend', asi)
  } else {
    iu(tpmcqcon); iu(tpmatrix); iu(tpanswer);
  }
  renderMathInElement(dE('tp_ans_hold'));
  renderMathInElement(dE('tp_qtext'));
}
async function topicHandler(type) {
  var pol;
  if (type == 1) { pol = -1 } else { pol = 1 }
  if ((topicJSONno < topicJSON.qllist.length - 1) && type == 2) {
    topicJSONno = topicJSONno + pol
  } else if (type == 1 && (topicJSONno > 0)) {
    topicJSONno = topicJSONno + pol
  }
  if ((topicJSONno >= topicJSON.qllist.length) && type == 2) { return }
  if (type == 3) { topicJSONno = 0 }
  var a = topicJSON.title
  dE("tp_title").innerText = a
  var tqQus = topicJSON.qllist[topicJSONno]
  var totalq = 0;
  var qno = 0;
  for (var i = 0; i < topicJSON.qllist.length; i++) {
    if (topicJSON.qllist[i].mode == "question") {
      totalq++
    }
    if (i == topicJSONno) {
      qno = totalq
    }
  }
  if (tqQus.mode == "lesson") { lessonRenderer(tqQus) }
  else if (tqQus.mode == "question") { questionRenderer(tqQus, totalq, qno) }
  stpVid();
}
function addMCQ() {
  var MCQ = `<div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>`
  dE("aq_mcq_con").insertAdjacentHTML('beforeend', MCQ)
}
function clearAQ() {
  setHTML("aq_qtext", "")
  setHTML("aq_expl", "")
  dE("aq_answer").value = ""
  dE("aq_yurl").value = ""
  dE("aq_hint").value = ""
  for (var i = 0; i < document.getElementsByClassName("aq_mcq").length; i++) {
    document.getElementsByClassName("aq_mcq")[i].value = ""
  }
  for (var i = 0; i < document.getElementsByClassName("aq_i1").length; i++) {
    document.getElementsByClassName("aq_i1")[i].value = ""
  }
  for (var i = 0; i < document.getElementsByClassName("aq_i2").length; i++) {
    document.getElementsByClassName("aq_i2")[i].value = ""
  }
}
function removeMCQ() {
  document.getElementsByClassName("aq_mcq_p")[document.getElementsByClassName("aq_mcq").length - 1].remove()
}
function initFirebaseAuth() {
  // Listen to auth states.
  onAuthStateChanged(getAuth(), authStateObserver);
  // creMng("dashboard", 1)
}
function shuffleQBank() {
  var ol = dE("eqb_add")
  for (var i = ol.children.length; i >= 0; i--) {
    ol.appendChild(ol.children[Math.random() * i | 0]);
  }
}
function requestPasschange() {
  showLS("s")
  sendPasswordResetEmail(auth, userinfo.email)
    .then(() => {
      showLS("d")
      log("Success", "Password Reset Email sent.")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showLS("d")
      log("Failure", errorMessage)
      // ..
    });
}

async function profileDetails() {
  var upic = dE("prf_pphoto")
  var name = dE("prf_name")
  var phone = dE("prf_phone")
  var email = dE("prf_email")
  var stclass = dE("prf_class")
  var batch = dE("prf_batch")
  var gender = dE("prf_gender")
  var crton = dE("prf_crton")
  var tmtifr = dE("tmt_frame")
  var spoints = dE("spoints")
  var courseno, batchno, calenid;
  name.textContent = userinfo.name
  phone.textContent = userinfo.mblno
  email.textContent = userinfo.email
  stclass.textContent = userinfo.class
  crton.textContent = new Date(userinfo.sgndon.seconds * 1000).toDateString()
  gender.textContent = userinfo.gen
  batchno = userinfo.batch
  courseno = userinfo.course
  spoints.textContent = userinfo.spoints
  userinfo.usernotes = userinfo.usernotes
  // if (userinfo.gen == "Male") {
  //   dE("prf_tab_t_t_img").classList.remove("prf_male", "prf_female")
  //   dE("prf_tab_t_t_img").classList.add("prf_male")
  // } else if (userinfo.gen == "Female") {
  //   dE("prf_tab_t_t_img").classList.remove("prf_male", "prf_female")
  //   dE("prf_tab_t_t_img").classList.add("prf_female")
  // }
  dE("prf_tab_t_t_img").src = getAvatarURL(userinfo.name, userinfo.gen, userinfo.prf_type)
}
function renderExams() {
  for (let i = 0; i < userinfo.examslist.examinfo.length; i++) {
    var ioef = userinfo.examslist.examinfo[i]
    var iti = "exam" + Math.floor(Math.random() * 100000)
    dE("db_exam_list").insertAdjacentHTML("beforeend", `<div class = "tlinks_min rpl" id = ` + iti + ` onclick = 'log("` + ioef.name + `","` + ioef.date + `","` + ioef.info + `","` + ioef.syllabus + `",` + 3 + `)'><span style="font-size: 16px;">` + ioef.name + `</span></div>`)
    dE(iti).addEventListener("click", function () { })
  }
}
window.log = log
async function authStateObserver(user) {
  var courseno, batchno, calenid;
  if (user) {
    var docRef = doc(db, "users", user.uid);
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      var docJSON = docSnap.data()
      userinfo = docJSON
      userinfo.uuid = user.uid
      batchno = userinfo.batch
      userinfo.storeitems = []
      userinfo.codeitems = []
      userrole = userinfo.roles['user']
      editorrole = userinfo.roles['editor']
      adminrole = userinfo.roles['admin']
      dE("spoints").innerText = userinfo.spoints
      if (docJSON.usernotes == undefined) { userinfo.usernotes = [] }
    }
    if (docJSON.deleted == true) {
      log("Warning", "User Account Has Been Deleted")
      signOutUser()
    }
    try {
      var docRef = doc(db, "batch", batchno)
      var docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        var docJSON = docSnap.data();
        userinfo.batchname = docJSON.name;
        userinfo.timetable = docJSON.timetable
        getTestList(batchno, user.uid)
        userinfo.timetableurl = "https://calendar.google.com/calendar/embed??height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&src=" + docJSON.timetable + "%40group.calendar.google.com&amp;ctz=Asia%2FKolkata"
        if (docJSON.delon.seconds <= parseInt(Date.now() / 1000)) {
          log("Warning", "This Batch Has Been Deleted")
          signOutUser()
          window.reload()
          throw new Error("DENIED")
        }
        for (var i = 0; i < docJSON.chlist.length; i++) {
          chapterlist.push({ name: docJSON.chlist[i].name, id: docJSON.chlist[i].id, subject: docJSON.chlist[i].subject })
        }
      }
    } catch { }
    spoints.style.display = "block"
    dE("dsh_btn").style.display = "block"
    if (window.location.hash == "" || window.location.hash == null || window.location.hash == undefined) {
      window.location.hash = "#/dashboard"
      autosignin = 1;
    }
    var docRef = doc(db, "quarkz", "exams")
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      var docJSON = docSnap.data();
      userinfo.examslist = docJSON
      if (docJSON.ratemyapp) { localStorage.setItem("rate_app", false) }
      if (docJSON.offline && userinfo.uuid != "shh5oUIhRpdBkEKQ3GCZwoKE9u42") {
        signOut(getAuth());
        userdetails = []
        log("Server Offline", "Quarkz Is Temporarily Offline for Maintainance. " + docJSON.offlinemsg)
        return 0
      }
      if (docJSON.warning != "") {
        addToast("notice",docJSON.warning,10000)
        // log("Notice", docJSON.warning, function () { window.location.hash = "#/updates" }, "Release Notes")
      }
    }
    creMng(window.location.hash.split("#/")[1], 1)
  } else {
    spoints.textContent = ""
    spoints.style.display = "none"
    dE("dsh_btn").style.display = "none"
    creMng("login", 1)
    if (autosignin == 1) {
      document.location.reload()
    }
    // 
  }
}
function uploadImages() {
  var a = serverTimestamp()
  var file = dE("aq_file")
  var filecontent;
  var reader = new FileReader();
  reader.onload = function () {
    var text = reader.result;
    filecontent = text.replace("", "")
    const storageRef = ref(storage, a);
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
    });
  };
  reader.readAsText(file.files[0]);
}
function signUpRestrict() {
  alert("The App Is Invite Only Registrations Are NOT Available Right Now")
}
function checkQuestion() {
  var qid = dE("tp_question").getAttribute("dataid");
  var type = dE("tp_question").getAttribute("qtype");
  var answer
  var crranswer, explanation, hint
  var status = 0

  for (var i = 0; i < topicJSON.qllist.length; i++) {
    if (topicJSON.qllist[i].id == qid) {
      crranswer = topicJSON.qllist[i].answer
      explanation = topicJSON.qllist[i].expl
      hint = topicJSON.qllist[i].hint
      break;
    }
  }

  if (type == "numerical" || type == "fill") {
    answer = dE("tp_answer").value.split(",")
    let c_status = qCorrector(type, crranswer, answer, 4, -1, 0)
    if (c_status.type == "correct") {
      dE("tp_status").innerText = "Correct Answer";
      playSoundEffect(2)
      status = 1
    } else {
      dE("tp_status").innerText = "Wrong Answer"
      playSoundEffect(1)
      status = 0
    }
  }
  if (type == "mcq" || type == "mcq_multiple" || type == "taf" || type == "mcq_multiple_partial") {
    answer = []
    for (var k = 0; k < document.getElementsByClassName("tp_mcq_p").length; k++) {
      if (document.getElementsByClassName("tp_mcq_p")[k].classList.contains("aq_mcq_ans")) { answer.push(document.getElementsByClassName("tp_mcq_p")[k].innerText) }
    }
    let c_status = qCorrector(type, crranswer, answer, 4, -1, 0)
    if (c_status.type == "correct") {
      dE("tp_status").innerText = "Correct Answer"
      playSoundEffect(2)
      status = 1
    } else {
      dE("tp_status").innerText = "Wrong Answer"
      playSoundEffect(1)
      status = 0
    }
  }
  dE("tp_status").style.display = "block"
  dE("tp_hint").style.display = "block"
  dE("tp_a_expl").style.display = "block"
  dE("tp_e_answer").style.display = "block"
  dE("tp_a_expl").innerHTML = explanation
  dE("tp_hint").innerHTML = hint
  dE("tp_e_answer").innerHTML = "Answer:" + crranswer
}
function printStuff() {
  if (window.location.hash.includes("topic")) {
    changeLocationHash("printable/topic/" + window.location.hash.split("topic/")[1], 1)
  } else if (window.location.hash.includes("qbanks")) {
    changeLocationHash("printable/qbank/" + window.location.hash.split("qbanks/")[1], 1)
  }
  if (window.location.hash.includes("edit_tpc/")) {
    changeLocationHash("printable/topic/" + window.location.hash.split("edit_tpc/")[1], 1)
  } else if (window.location.hash.includes("edit_qubank/")) {
    changeLocationHash("printable/qbank/" + window.location.hash.split("edit_qubank/")[1], 1)
  }
}
function editStuff() {
  if (window.location.hash.includes("topic")) {
    changeLocationHash("edit_tpc/" + window.location.hash.split("topic/")[1], 1)
  } else if (window.location.hash.includes("qbanks")) {
    changeLocationHash("edit_qubank/" + window.location.hash.split("qbanks/")[1], 1)
  }
}
function changeLocationHash(ele, v) {
  window.location.hash = "#/" + ele
  if (ele == "dashboard") { creMng("dashboard", 1) }
}
async function lquizinit() {
  lquizcode = location1.split("livequiz")[1]
  var docRef = doc(db, 'livequiz', lquizcode)
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) { var docJSON = docSnap.data(); }
  else { throw new Error }
}
async function renderAdminBatchList() {
  if (adminBatchList.length <= 0) {
    const q = query(collection(db, "batch"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var tfg = doc.data()
      adminBatchList.push({ id: doc.id, crton: tfg.crton, delon: tfg.delon, class: tfg.class, name: tfg.name })
    })
  }
  for (let i = 0; i < adminBatchList.length; i++) {
    let ele = adminBatchList[i]
    var crton = new Date(ele.crton * 1000)
    var delon = new Date(ele.delon * 1000)
    dE("batchlinks").innerHTML += '<div class="tlinks-3" id = "' + ele.id + '" onclick = "window.location.hash = `#/edit_batch/' + ele.id + '`"><center><span class = "t_title">' + ele.name + '</span></center><div class = "tl"><span class = "t_stron">Created On:' + crton.toISOString() + '</span><span class ="t_endon">Ends At:' + delon.toISOString() + '</div><div class = "tl"><span>Class:' + ele.class + '</span></div></div>'
  }
}
async function renderAdminTestList() {
  if (adminTestList.length <= 0) {
    const q = query(collection(db, "tests"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var tfg = doc.data()
      adminTestList.push({ id: doc.id, strton: tfg.strton, endon: tfg.endon, batch: tfg.batch, name: tfg.title })
    })
  }
  for (let i = 0; i < adminTestList.length; i++) {
    let ele = adminTestList[i]
    var strton = new Date(ele.strton * 1000)
    var endon = new Date(ele.endon * 1000)
    dE("batchlinks").innerHTML += '<div class="tlinks-3" id = "' + ele.id + '" onclick = "window.location.hash = `#/edit_tests/' + ele.id + '`"><center><span class = "t_title">' + ele.name + '</span></center><div class = "tl"><span class = "t_stron">Created On:' + strton.toISOString() + '</span><span class ="t_endon">Ends At:' + endon.toISOString() + '</div><div class = "tl"><span>Batch:' + ele.batch + '</span></div></div>'
  }
}
async function getTestList(batchid, userid) {
  if (testList != []) {
    const q = query(collection(db, "tests"), where("batch", "array-contains", batchid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var tfg = doc.data()
      testList.push({ title: tfg.title, strton: tfg.strton.seconds, endon: tfg.endon.seconds, testid: doc.id, qno: tfg.questionnos, marks: tfg.totalmarks, alotted: tfg.timeallotted })
    })
  }
}
function testClicker() {
  window.location.hash = "#/instructions/" + this.id
}
function finishedtestClicker() {
  window.location.hash = "#/finished/" + this.id
}
async function newTest() {
  try {
    const docRef = await addDoc(collection(db, 'tests'), {
      title: "",
      totalmarks: 0,
      timeallotted: 0,
      syllabus: "",
      strton: serverTimestamp(),
      endon: serverTimestamp(),
      questionnos: 0,
      finished: [],
      batch: []
    })
    var docRef1 = await setDoc(doc(db, 'tests', docRef.id, "questions", "questions"), {
      questions: []
    })
    var docRef2 = await setDoc(doc(db, 'tests', docRef.id, "questions", "answers"), {
      questions: []
    })
    var docRef4 = await setDoc(doc(db, 'tests', docRef.id, "responses", "finished"), {
      finished: [],
      leaderboard: []
    })

    creMng("edit_tests/" + docRef.id, 1)
  } catch {
  }
}
function renderTestList(type) {
  var renList;
  activeTestList = []
  upcomingTestList = []
  finishedTestList = []
  var localtime = parseInt(Date.now() / 1000)
  for (var d = 0; d < testList.length; d++) {
    if (localtime > testList[d].strton && localtime < testList[d].endon) {
      activeTestList.push(testList[d])
    } else if (localtime < testList[d].strton) {
      upcomingTestList.push(testList[d])
    } else if (localtime > testList[d].endon) {
      finishedTestList.push(testList[d])
    }
  }
  if (type == "active") {
    renList = activeTestList
  } else if (type == "upcoming") { renList = upcomingTestList }
  else if (type == "finished") { renList = finishedTestList }
  dE("testlinks").innerHTML = ""
  for (var ele of renList) {
    var strson = new Date(ele.strton * 1000)
    var endson = new Date(ele.endon * 1000)
    var output = '<div class="tlinks-3" id = "' + ele.testid + '"><center><span class = "t_title">' + ele.title + '</span></center><div class = "tl"><span class = "t_stron">Starts At:' + strson.toLocaleString() + '</span><span class ="t_endon">Ends At:' + endson.toLocaleString() + '</div><div class = "tl"><span>Marks:' + ele.marks + '</span><span>Allotted Time:' + parseInt(ele.alotted) / 60 + '&nbsp;Mins</span><span>Questions:' + ele.qno + '</span></div></div>'
    if (type != "finished") {
      dE("testlinks").insertAdjacentHTML('beforeend', output)
      dE(ele.testid).addEventListener('click', testClicker)
    } else {
      if (type == "finished") {
        dE("testlinks").insertAdjacentHTML('beforeend', output)
        dE(ele.testid).addEventListener('click', finishedtestClicker)
      }

    }
  }
}
async function getSimpleTestReport() {
  var testid = window.location.hash.split("#/finished/")[1]
  var docRef = doc(db, "tests", testid);
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    testInfo = docSnap.data()
    var attempted = 0;
    dE("fti_title").innerText = testInfo.title
    if (testInfo.blockresult == 1) {
      dE("output").innerHTML = "Quiz Admin has blocked viewing of results."
      return 0
    }
    docRef = doc(db, "tests", testid, "responses", "finished");
    docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      for (var ele of docSnap.data().finished) {
        if (auth.currentUser.uid == ele) {
          attempted = 1;
          break;
        }
      }
    }
    if (attempted == 0) {
      renderBody(page_test_end, "", "")
      dE("te_title").innerText = "You Have NOT Attempted This Test"
      dE("te_msg").innerText = ""
      return
    } else {
      if (0 && (Date.now() / 1000 <= testInfo.endon.seconds && testInfo.noresult == false)) {
        renderBody(page_test_end, "", "")
        dE("te_title").innerText = "Test Reports will be available after deadline"
        dE("te_msg").innerText = ""
      } else {
        try {
          try { computeResult(1) } catch { }
          try {
            docRef = doc(db, "tests", testid, "responses", auth.currentUser.uid);
            docSnap = await getDoc(docRef);
            var tT = docSnap.data()
            if (docSnap.exists()) {
              dE("fto_total").innerText = tT.info.usermarks + "/" + tT.info.total
              dE("fto_correct").innerText = tT.info.correct
              dE("fto_incorrect").innerText = tT.info.incorrect
              dE("fto_unanswered").innerText = tT.info.unattempted
              dE("fto_accuracy").innerText = tT.info.overall.acc.toString() + "%";
              dE("fto_qsattempted").innerText = Math.floor(tT.info.overall.qc + tT.info.overall.qic).toString() + "/" + Math.floor(tT.info.overall.qc + tT.info.overall.qic + tT.info.overall.qun).toString()

              if (tT.info.usermarks / tT.info.total * 100 >= testInfo.passpercentage) {
                dE("fto_passed").innerText = "You Have Passed The Test"
              } else if (tT.info.usermarks / tT.info.total * 100 < testInfo.passpercentage) {
                dE("fto_passed").innerText = "You Have Failed The Test. Pass Percentage:" + testInfo.passpercentage
              } else {
                dE("fto_passed").innerText = "No Pass/Fail Criteria For This Test"
              }
              testActionLogger = tT.actions
              reQW = tT.info.mList


              let hji = "<ol>"
              let missedtopics = tT.info.missedtopics
              let unattemptedtopics = tT.info.unattemptedtopics
              for (var i = 0; i < missedtopics.length; i++) {
                hji += '<li><div class = "tlinks" style = "flex-direction:row;width:25vw;justify-content:space-between;"><span class = "t_name" style = "color:red;">' + missedtopics[i] + '</span></div></li>'
              }
              for (var i = 0; i < unattemptedtopics.length; i++) {
                hji += '<li><div class = "tlinks" style = "flex-direction:row;width:25vw;justify-content:space-between;"><span class = "t_name">' + unattemptedtopics[i] + '</span></div></li>'
              }
              if (missedtopics.length == 0 && unattemptedtopics.length == 0) {
                hji = "<span>Hoo! No Missed Concepts on This Test</span>"
              }
              dE("fto_missed").innerHTML = hji


              try {
                let tablebuilder = tT.info.subjectmarks
                tablebuilder.overall = { correct: tT.info.correct, incorrect: tT.info.incorrect, unattempted: tT.info.unattempted, qc: 0, qic: 0, qun: 0 }
                let tablebuilder2 = []
                var ion1 = ["Physics", "Chemistry", "Math", "Biology", "Statistics", "Computer", "Unfiled", "overall"]
                for (var eleX of ion1) {
                  var el2e2 = tT.info.subjectmarks[eleX]
                  if (!areObjectsEqual(el2e2, { correct: 0, unattempted: 0, incorrect: 0, total: 0, qc: 0, qic: 0, qun: 0 })) {
                    let fgy = el2e2.correct + el2e2.incorrect
                    if (eleX != "overall") {
                      tablebuilder.overall.qc += el2e2.qc
                      tablebuilder.overall.qic = el2e2.qic
                      tablebuilder.overall.qun = el2e2.qun
                    }
                    tablebuilder2.push({ subject: eleX, score: fgy, crr_marks: el2e2.correct, correct: el2e2.qc, incr_marks: el2e2.incorrect, incorrect: el2e2.qic, unat_marks: el2e2.unattempted, unattempted: el2e2.qun, })
                  }
                }
                let graphtable = [...tablebuilder2]
                for (var i = 0; i < graphtable.length; i++) {
                  document.getElementById("fto_table_pie").insertAdjacentHTML("beforeend", "<div style = 'width:300px;height:300px'><canvas id = 'fto_tbp_" + graphtable[i].subject + "'></canvas></div>");
                  let iop = new Chart(
                    dE("fto_tbp_" + graphtable[i].subject),
                    {
                      type: 'pie',
                      options: {
                        plugins: {
                          title: {
                            display: true,
                            text: 'Overview ' + graphtable[i].subject,
                            color: "olive"
                          },
                          legend: {
                            labels: {
                              color: "olive"
                            }
                          }
                        }
                      },
                      data: {
                        labels: ["Correct", "Incorrect", "Unanswered"],

                        datasets: [
                          {
                            label: "",
                            backgroundColor: [
                              'rgb(0,128,0)',
                              'rgb(255,0,0)',
                              'rgb(255, 165, 0)'
                            ],
                            data: [graphtable[i].correct, graphtable[i].incorrect, graphtable[i].unattempted]
                          }
                        ]
                      }
                    }
                  )
                }
                let ioh = new Chart(
                  dE("fto_table_score"),
                  {
                    type: 'bar',
                    options: {
                      plugins: {
                        title: {
                          display: true,
                          text: 'Subject Wise Scores',
                          color: "olive"
                        },
                        legend: {
                          labels: {
                            color: "olive"
                          }
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: true
                        },
                        x: { color: "olive" }
                      }
                    },
                    data: {
                      labels: tablebuilder2.map(row => row.subject),
                      datasets: [
                        {
                          label: "Score",
                          backgroundColor: "blue",
                          data: tablebuilder2.map(row => row.score),
                        },
                        {
                          label: "Correct",
                          backgroundColor: "green",
                          data: tablebuilder2.map(row => row.crr_marks),
                        },
                        {
                          label: "Incorrect",
                          backgroundColor: "red",
                          data: tablebuilder2.map(row => -row.incr_marks),
                        },
                        {
                          label: "Unattempted",
                          backgroundColor: "orange",
                          data: tablebuilder2.map(row => row.unat_marks),
                        }
                      ]
                    }
                  }
                )
                dE("fto_overview_table").appendChild(buildHtmlTable(tablebuilder2))

              } catch (e) {
                log("error", e)
              }
              dE("fto_rank").innerText = "0"
              analyseActions(1).then(function () {
                try {
                  let tablebuilder3 = []
                  let tablebuilder4 = []
                  var ion1 = ["Physics", "Chemistry", "Math", "Biology", "Statistics", "Computer", "Unfiled", "overall"]
                  analysedActions.subject.overall = { correct: 0, incorrect: 0, unattempted: 0, total: 0 }
                  for (var eleX of ion1) {
                    var el2e2 = analysedActions.subject[eleX]
                    if (!areObjectsEqual(el2e2, { correct: 0, incorrect: 0, unattempted: 0, total: 0 })) {
                      if (eleX != "overall") {
                        analysedActions.subject.overall.correct += el2e2.correct
                        analysedActions.subject.overall.incorrect += el2e2.incorrect
                        analysedActions.subject.overall.unattempted += el2e2.unattempted
                        analysedActions.subject.overall.total += el2e2.total
                      }
                      tablebuilder3.push({ subject: eleX, correct: sd(el2e2.correct), incorrect: sd(el2e2.incorrect), unattempted: sd(el2e2.unattempted), total: sd(el2e2.correct + el2e2.incorrect + el2e2.unattempted), accuracy: Math.floor((1 - tT.info.subjectmarks[eleX].qic / tT.info.subjectmarks[eleX].qc) * 100).toString() + "%" })
                      tablebuilder4.push({ subject: eleX, correct: el2e2.correct, incorrect: el2e2.incorrect, unattempted: el2e2.unattempted, total: el2e2.correct + el2e2.incorrect + el2e2.unattempted, accuracy: Math.floor((1 - tT.info.subjectmarks[eleX].qic / tT.info.subjectmarks[eleX].qc) * 100), attempts: Math.floor(tT.info.subjectmarks[eleX].qc / (tT.info.subjectmarks[eleX].qc + tT.info.subjectmarks[eleX].qun + tT.info.subjectmarks[eleX].qic) * 100) })
                    }
                  }
                  let ioh = new Chart(
                    dE("fto_table_time"),
                    {
                      type: 'bar',
                      options: {
                        plugins: {
                          title: {
                            display: true,
                            text: 'Subject Wise Time Spent',
                            color: "olive"
                          },
                          legend: {
                            labels: {
                              color: "olive"
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true
                          }, x: { color: "olive" }
                        }
                      },
                      data: {
                        labels: tablebuilder4.map(row => row.subject),
                        datasets: [
                          {
                            label: "Correct",
                            backgroundColor: "green",
                            data: tablebuilder4.map(row => row.correct / 60),
                          },
                          {
                            label: "Incorrect",
                            backgroundColor: "red",
                            data: tablebuilder4.map(row => row.incorrect / 60),
                          },
                          {
                            label: "Unattempted",
                            backgroundColor: "orange",
                            data: tablebuilder4.map(row => row.unattempted / 60),
                          },
                          {
                            label: "Total Time Spent",
                            backgroundColor: "blue",
                            data: tablebuilder4.map(row => row.total / 60),
                          }
                        ]
                      }
                    }
                  )
                  let iop = new Chart(
                    dE("fto_table_accuracy"),
                    {
                      type: 'bar',
                      options: {
                        plugins: {
                          title: {
                            display: true,
                            text: 'Subject Accuracy vs Attempted(%)',
                            color: "olive"
                          },
                          legend: {
                            position: 'right',
                            labels: {
                              color: "olive"
                            }
                          },
                          scales: {
                            y: { color: "olive" }
                          }
                        }
                      },
                      data: {
                        labels: tablebuilder4.map(row => row.subject),

                        datasets: [
                          {
                            label: "Accuracy",
                            data: tablebuilder4.map(row => row.accuracy)
                          },
                          {
                            label: "Attempts",
                            data: tablebuilder4.map(row => row.attempts)
                          }
                        ]
                      }
                    }
                  )
                  dE("fto_time_table").appendChild(buildHtmlTable(tablebuilder3))
                } catch {

                }
              })
            }
            try {
              var leaderboard;
              docRef = doc(db, "tests", testid, "responses", "finished");
              docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                leaderboard = docSnap.data().leaderboard
              }
              dE("fto_leaderboard").innerHTML = ""
              leaderboard = sortObj(leaderboard, "marks", 1)
              let leaderboard2 = []
              leaderboard = studentRanker(leaderboard)
              for (var i = 0; i < leaderboard.length; i++) {
                if (userinfo.uuid == leaderboard[i].uid) {
                  dE("fto_rank").innerText = leaderboard[i].rank
                }
              }
              for (var i = 0; i < leaderboard.length; i++) {
                leaderboard2.push({ name: leaderboard[i].name, marks: leaderboard[i].marks, rank: leaderboard[i].rank })
              }
              dE("fto_leaderboard").appendChild(buildHtmlTable(leaderboard2))
            } catch {

            }
            var data = []
            for (var i = 0; i < reQW.length; i++) {
              if (analysedActions.questions[reQW[i].qid] == undefined) {
                data.push({ qid: reQW[i].qid, type: reQW[i].type, time: 0, no: i + 1 })
              } else {
                data.push({ qid: reQW[i].qid, type: reQW[i].type, time: analysedActions.questions[reQW[i].qid].time, no: i + 1 })
              }

            }
          }
          catch {
            dE("te_title").innerText = "ERROR"
            renderBody(page_test_end, "", "")
            dE("te_title").innerText = "You may see this ERROR since you may NOT have Attempted This Test"
            dE("te_msg").innerText = ""
            return 0;
          }
        } catch { }
      }
    }
  }
}
async function analyseActions(typi) {
  var tQList
  if (typi == 1) {
    var q = window.location.hash.split("/finished/")[1]
    var docRef = doc(db, "tests", q, "questions", "questions");
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      tQList = docSnap.data().questions
    }
  } else if (typi == 2) {
    tQList = []
    tQList = testQuestionList
  }

  var qnos = {};
  for (var i = 0; i < testActionLogger.length; i++) {
    testActionLogger[i].time = testActionLogger[i].time.seconds
  }
  var tAL = sortObjv2(testActionLogger, "time", "type", 0)
  var curr_time;
  var next_time;
  var aqid = ""
  for (var i = 0; i < tAL.length; i++) {
    if (tAL[i].type == "b") {
      curr_time = tAL[i].time
      aqid = tAL[i].value
    } else if (tAL[i].type == "a" && aqid == tAL[i].value) {
      next_time = tAL[i].time
      if (qnos[tAL[i].value] == undefined) {
        qnos[tAL[i].value] = {}
        qnos[tAL[i].value].time = 0
      }
      qnos[tAL[i].value].time += next_time - curr_time
      curr_time = next_time
      next_time = 0
    }
  }
  var subJTimes = {
    "Physics": { correct: 0, unattempted: 0, incorrect: 0, total: 0 },
    "Chemistry": { correct: 0, unattempted: 0, incorrect: 0, total: 0 }, "Math": { correct: 0, unattempted: 0, incorrect: 0, total: 0 },
    "Biology": { correct: 0, unattempted: 0, incorrect: 0, total: 0 }, "Computer": { correct: 0, unattempted: 0, incorrect: 0, total: 0 },
    "Statistics": { correct: 0, unattempted: 0, incorrect: 0, total: 0 }, "Unfiled": { correct: 0, unattempted: 0, incorrect: 0, total: 0 }
  }
  var c = 0;
  var ic = 0;
  var un = 0;
  for (var i = 0; i < tQList.length; i++) {
    for (var j = 0; j < reQW.length; j++) {
      if (tQList[i].qid == reQW[j].qid) {
        var ele = qnos[tQList[i].qid]
        if (qnos[tQList[i].qid] == undefined) {
          qnos[tQList[i].section] = {}
          qnos[tQList[i].section].time = 0
          subJTimes[tQList[i].section].qun += 1
        } else {
          subJTimes[tQList[i].section].total += ele.time
          if (reQW[i].marks == 0) {
            subJTimes[tQList[i].section].unattempted += ele.time
            un = un + ele.time
            subJTimes[tQList[i].section].qun += 1
          } else {
            if (reQW[i].marks == tQList[i].pm) {
              subJTimes[tQList[i].section].correct += ele.time
              c = c + ele.time
              subJTimes[tQList[i].section].qc += 1
            } else {
              subJTimes[tQList[i].section].incorrect += ele.time
              ic = ic + ele.time
              subJTimes[tQList[i].section].qic += 1
            }
          }
        }
      }
    }
  }
  var tFinal = { questions: qnos, subject: subJTimes, correct: c, incorrect: ic, unattempted: un }
  analysedActions = tFinal
}
async function getTestReport() {
  dE("tt_footer").style.display = "none"
  dE("tt_sub").style.display = "none"
  dE("tt_timeleft").style.display = "none"
  dE("tt_marksaward").style.display = "block"
  var testid = window.location.hash.split("#/testreport/")[1]
  var docRef = doc(db, "tests", testid);
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    testInfo = docSnap.data()
    var attempted = 0;
    dE("tt_testname").innerText = testInfo.title
    if (testInfo.blockresult == 1) {
      dE("output").innerHTML = "Quiz Admin has blocked viewing of results."
      return 0
    }
    docRef = doc(db, "tests", testid, "responses", "finished");
    docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      for (var ele of docSnap.data().finished) {
        if (auth.currentUser.uid == ele) {
          attempted = 1;
          break;
        }
      }
    }
    if (attempted == 0) {
      renderBody(page_test_end, "", "")
      dE("te_title").innerText = "You Have NOT Attempted This Test"
      dE("te_msg").innerText = ""
      return
    } else {
      if (Date.now() / 1000 <= testInfo.endon.seconds && testInfo.noresult == false) {
        renderBody(page_test_end, "", "")
        dE("te_title").innerText = "Detailed Test Reports will be available after deadline"
        dE("te_msg").innerText = ""
      } else {
        try {
          docRef = doc(db, "tests", testid, "questions", "questions");
          docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            testQuestionList = docSnap.data()
          }
          const crypto = require('crypto');
          const hash = crypto.createHash('sha256').update(userinfo.uuid).digest('hex');
          const user_num = parseInt(hash.slice(0, 6), 16);
          if (testInfo.randomize) {
            testQuestionList.questions = shuffleArrayWithSeed(testQuestionList.questions, user_num)
          }
          docRef = doc(db, "tests", testid, "responses", auth.currentUser.uid);
          docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            var yuta = docSnap.data().answers
            testActionLogger = docSnap.data().actions
            for (var prop in yuta) {
              testResponseList.push({ qid: prop, ans: yuta[prop].ans, type: yuta[prop].type, time: yuta[prop].time });
            }
          }
          docRef = doc(db, "tests", testid, "questions", "answers");
          docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            testReportAnswers = docSnap.data()
          }
        }
        catch {
          dE("te_title").innerText = "ERROR"
          renderBody(page_test_end, "", "")
          dE("te_title").innerText = "You may see this ERROR since you may NOT have Attempted This Test"
          dE("te_msg").innerText = ""
          return 0;
        }
        inittestHandler()
      }
    }
  }
}
var testTimerfunction;
async function getTestInfo() {
  dE("tt_footer").style.display = "flex"
  dE("tt_sub").style.display = "block"
  dE("tt_timeleft").style.display = "block"
  dE("tt_marksaward").style.display = "none"
  var testid = window.location.hash.split("#/attempt/")[1]
  var docRef = doc(db, "tests", testid);
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    testInfo = docSnap.data()
    docRef = doc(db, "tests", testid, "responses", "finished")
    docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      for (var ele of docSnap.data().finished) {
        if (auth.currentUser.uid == ele) {
          renderBody(page_test_end, "", "")
          dE("te_title").innerText = "You Have Already Attempted This Test"
          dE("te_msg").innerText = "Test Results will be released after Deadline."
          window.location.hash = "#/finished/" + window.location.hash.split("attempt/")[1]
          return 0;
        }
      }
    }
  } else {
    renderBody("This test either doesnt exist or you do not have access to this test.")
  }
  try {
    docRef = doc(db, "tests", testid, "questions", "questions");
    docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      testQuestionList = docSnap.data()
    }
  }
  catch {
    renderBody(page_test_end, "", "")
    dE("te_title").innerText = "The Test Hasnt Started Yet"
    dE("te_msg").innerText = ""
    return 0;
  }
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256').update(userinfo.uuid).digest('hex');
  const user_num = parseInt(hash.slice(0, 6), 16);
  if (testInfo.randomize) {
    testQuestionList = shuffleArrayWithSeed(testQuestionList, user_num)
  }
  docRef = doc(db, "tests", testid, "responses", auth.currentUser.uid);
  docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    var yuta = docSnap.data().answers
    testActionLogger = docSnap.data().actions
    for (var prop in yuta) {
      testResponseList.push({ qid: prop, ans: yuta[prop].ans, type: yuta[prop].type, time: yuta[prop].time });
      // timetaken:yuta[prop].timetaken
    }
  } else {
    var trL = {};
    for (var t = 0; t < testQuestionList.questions.length; t++) {
      trL[`${testQuestionList.questions[t].qid}`] = { type: "tts_notvisit", answer: [] }
      testResponseList.push({ qid: testQuestionList.questions[t].qid, type: "tts_notvisit", answer: [], timetaken: 0 })
    }
    var it = new Date()
    await setDoc(doc(db, "tests", testid, "responses", auth.currentUser.uid), {
      answers: trL,
      strton: serverTimestamp(),
      warning: [],
      actions: [{ type: "start", time: it, value: "1" }],
      testversion: "1"
    })
    testActionLogger.push({ type: "start", time: it, value: "1" })

  }
  if (window.location.hash.includes("/attempt/")) {
    testTimerfunction = setInterval(function () {
      var seconds = testInfo.timeallotted - 1;
      testInfo.timeallotted -= 1
      dE("tt_timeleft").innerText = Math.floor(seconds % (3600 * 24) / 3600) + ":" + Math.floor(seconds % 3600 / 60) + ":" + Math.floor(seconds % 60);
      testQTime += 1
      dE("tt_timespent").innerText = Math.floor(testQTime % (3600 * 24) / 3600) + ":" + Math.floor(testQTime % 3600 / 60) + ":" + Math.floor(testQTime % 60);
      if (seconds == 0) {
        submitTest()
      }
    }, 1000);
  }
  window.onbeforeunload = function (e) {
    e.preventDefault;
    submitTest()
  }
  window.onhashchange = function (e) {
    creMng()
    submitTest()
  }
  dE("tt_testname").innerText = testInfo.title
  dE("dsh_btn").style.display = "none"
  var tbox = dE("output")
  try { fullEle(tbox) } catch { }
  inittestHandler()
}
function tqH() {
  testqHandler(this.id, this.innerText)
}
async function computeResult(type) {
  var trA;
  var trL = [];
  var marksList = [];
  var fg = []
  var testid = ""
  var gty = ""
  if (window.location.hash.includes("/attempt/")) {
    testid = window.location.hash.split("#/attempt/")[1]
    gty = log("Warning", "Submitting Tests Answers: Please Do Not Close The Tab.")
  } else if (window.location.hash.includes("/finished/")) {
    testid = window.location.hash.split("#/finished/")[1]
  } else if (window.location.hash.includes("/testreport/")) {
    testid = window.location.hash.split("#/testreport/")[1]
  }

  var docRef = doc(db, "tests", testid, "responses", auth.currentUser.uid);
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    var yuta = docSnap.data().answers
    fg = docSnap.data().info
    for (var prop in yuta) {
      trL.push({ qid: prop, ans: yuta[prop].ans, type: yuta[prop].type, time: yuta[prop].time });
    }
  }
  docRef = doc(db, "tests", testid, "questions", "answers");
  docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    trA = docSnap.data().questions
  }
  var u = 0, c = 0, ic = 0;
  var subjectmarks = {
    "Physics": { correct: 0, unattempted: 0, incorrect: 0, total: 0, qun: 0, qc: 0, qic: 0 },
    "Chemistry": { correct: 0, unattempted: 0, incorrect: 0, total: 0, qun: 0, qc: 0, qic: 0 }, "Math": { correct: 0, unattempted: 0, incorrect: 0, total: 0, qun: 0, qc: 0, qic: 0 },
    "Biology": { correct: 0, unattempted: 0, incorrect: 0, total: 0, qun: 0, qc: 0, qic: 0 }, "Computer": { correct: 0, unattempted: 0, incorrect: 0, total: 0, qun: 0, qc: 0, qic: 0 },
    "Statistics": { correct: 0, unattempted: 0, incorrect: 0, total: 0, qun: 0, qc: 0, qic: 0 }, "Unfiled": { correct: 0, unattempted: 0, incorrect: 0, total: 0, qun: 0, qc: 0, qic: 0 }
  }
  var overall = { qc: 0, qic: 0, qun: 0, acc: 0 }
  var missedtopics = []
  var unattemptedtopics = []
  for (var i = 0; i < trA.length; i++) {
    for (var j = 0; j < trL.length; j++) {
      if (trA[i].qid == trL[j].qid) {
        var ele = trL[j]
        if (ele.ans == undefined) {
          ele.ans = []
        }
        let q_check = qCorrector(trA[i].type, trA[i].answer, ele.ans, trA[i].pm, trA[i].nm, 0)
        if (q_check.type == "unattempted") {
          marksList.push({ qid: trA[i].qid, marks: 0, type: "unattempted" })
          u = u + parseFloat(trA[i].pm)
          subjectmarks[trA[i].section].unattempted += parseFloat(trA[i].pm)
          subjectmarks[trA[i].section].total += parseFloat(trA[i].pm)
          subjectmarks[trA[i].section].qun += 1
          overall.qun += 1
          unattemptedtopics.push(trA[i].qtopic)
        } else {
          if (q_check.type == "correct") {
            marksList.push({ qid: trA[i].qid, marks: parseFloat(trA[i].pm), type: "correct" })
            c = c + parseFloat(q_check.marks)
            subjectmarks[trA[i].section].correct += parseFloat(q_check.marks)
            subjectmarks[trA[i].section].total += parseFloat(trA[i].pm)
            subjectmarks[trA[i].section].qc += 1
            overall.qc += 1
          } else {
            marksList.push({ qid: trA[i].qid, marks: parseFloat(trA[i].nm), type: "incorrect" })
            ic = ic + parseFloat(trA[i].nm)
            subjectmarks[trA[i].section].incorrect += parseFloat(trA[i].nm)
            subjectmarks[trA[i].section].total += parseFloat(trA[i].pm)
            subjectmarks[trA[i].section].qic += 1
            overall.qic += 1
            missedtopics.push(trA[i].qtopic)
          }
        }
      }
    }
  }
  overall.acc = Math.floor((1 - overall.qic / overall.qc) * 100)
  var t = subjectmarks["Physics"].total + subjectmarks["Chemistry"].total + subjectmarks["Math"].total + subjectmarks["Biology"].total + subjectmarks["Computer"].total + subjectmarks["Statistics"].total + subjectmarks["Unfiled"].total
  var tFinal = { correct: c, incorrect: ic, unattempted: u, mList: marksList, total: t, usermarks: c + ic, subjectmarks: subjectmarks, overall: overall, missedtopics: missedtopics, unattemptedtopics: unattemptedtopics }
  if (type == 1) {
    if (!areObjectsEqual(tFinal, fg)) {
      log("NOTICE", "Please Wait, Marks Are Being Updated")
      await updateDoc(doc(db, "tests", testid, "responses", auth.currentUser.uid), {
        info: tFinal
      })
      await updateDoc(doc(db, "tests", testid, "responses", "finished"), {
        leaderboard: arrayRemove({ "uid": userinfo.uuid, "marks": fg.usermarks, "name": userinfo.name }),
      })
      await updateDoc(doc(db, "tests", testid, "responses", "finished"), {
        leaderboard: arrayUnion({ "uid": userinfo.uuid, "marks": tFinal.usermarks, "name": userinfo.name }),
      })
      creMng()
    }
  } else if (type == 0) {
    await updateDoc(doc(db, "tests", testid, "responses", auth.currentUser.uid), {
      info: tFinal
    })
    await updateDoc(doc(db, "tests", testid, "responses", "finished"), {
      leaderboard: arrayUnion({ "uid": userinfo.uuid, "marks": tFinal.usermarks, "name": userinfo.name }),
    })
    // renderBody(page_test_end, "", "")
    // dE("te_endtime").innerText = new Date(testInfo.endon.seconds * 1000);
    if (gty != "") {
      dE(gty).remove()
    }
    testInfo = {}
  }
}
function testqHandler(id, no) {
  var MCQ = ``
  var TF = `<div id = "tt_mcq"><span><input type="radio" value="a" class = "q_ans" name = "q_op">True</span><span><input type="radio" value="b" class = "q_ans" name = "q_op">False</span></div> `
  var MCQMULT = ``
  var NUM = `<div id = "tt_num"><input type = "number" class="q_ans"></div>`
  var FILL = `<div id="tt_fill"><input type = "text" class = "q_ans"></div>`
  var MATRIX = `<div id = "tt_matrix"><div>A<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>B<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>C<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>D<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div></div>`
  var u = new Date()
  testQTime = 0;
  if (window.location.hash.includes("/attempt/")) { if (activequestionid != id) { testActionLogger.push({ type: "a", time: u, value: activequestionid }) } }
  dE("tt_qno").innerText = no;
  try { dE(activequestionid).style.border = ""; } catch { }
  activequestionid = id;
  if (window.location.hash.includes("/attempt/")) { testActionLogger.push({ type: "b", time: u, value: activequestionid }) }
  dE(activequestionid).style.border = "purple 3px solid";
  dE("report-tag").value = activequestionid
  for (let ele of testQuestionList.questions) {
    if (id == ele.qid) {
      dE("tt_qtitle").innerHTML = ""
      var inhtml = '<div class = "qb_q" id = "Q' + ele.qid + '"><div class = "qb_ttl">' + ele.title + '<div id = "qb_q_ty" class = "qb_q_ty qb_qt_ty" >(' + ele.type + ')</div><div id = "qb_q_mrk" class = "qb_q_ty qb_qt_ty" >(' + ele.pm + '/' + ele.nm + ')</div></div></div>'
      dE("tt_qtitle").insertAdjacentHTML('beforeend', inhtml);
      if (!window.location.hash.includes("/attempt/")) {
        dE("tt_qtitle").insertAdjacentHTML('beforeend', '<span class = "tst_btn">' + ele.qtopic + '</span>');
      }
      var asi = "";
      if (ele.type == "mcq") {
        var qop = ele.op;
        for (let ele1 of qop) {
          let yt = Math.floor(Math.random() * 100000)
          asi += '<span><input type="radio" class = "q_ans" id = "mcq_' + yt + '" value = "' + ele1 + '" name = "q_op"></input><label for = "mcq_' + yt + '"><li>' + ele1 + '</li></label></span>'
        }
        var qrt = '<ol class = "qb_mcq" type = "A">' + asi + '</ol>'
      }
      if (ele.type == "mcq_multiple" || ele.type == "mcq_multiple_partial") {
        var qop = ele.op;
        for (let ele1 of qop) {
          let yt = Math.floor(Math.random() * 100000)
          asi += '<span><input type="checkbox" class = "q_ans" id = "mcq_' + yt + '" value = "' + ele1 + '" name = "q_op"><label for = "mcq_' + yt + '"><li>' + ele1 + '</li></label></input></span>'
        }
        var qrt = '<ol class = "qb_mcq" type = "A">' + asi + '</ol>'
      }
      if (ele.type == "taf") {
        qrt = '<ol class = "qb_mcq" type = "A"><li>True</li><li>False</li></ol>'
      }
      if (ele.type == "explain" || ele.type == "numerical") { qrt = "" }
      if (ele.type == "matrix") {
        var qop1 = ele.op1;
        var qop2 = ele.op2;
        var qopn1 = qop1.length
        for (var i = 0; i < qopn1; i++) {
          asi += "<tr><td>" + qop1[i] + '</td><td>' + qop2[i] + '</td>'
        }
        qrt = '<table>' + asi + '</table>'
      }
      dE("tt_qtitle").insertAdjacentHTML('beforeend', qrt)
      var ANS;
      switch (ele.type) {
        case "mcq": ANS = MCQ; break;
        case "mcq_multiple": ANS = MCQMULT; break;
        case "mcq_multiple_partial": ANS = MCQMULT; break;
        case "taf": ANS = TF; break;
        // case "explain": ANS = EXPL
        case "numerical": ANS = NUM; break;
        case "matrix": ANS = MATRIX; break;
        case "fill": ANS = FILL; break;
      }
      dE("tt_qtitle").insertAdjacentHTML('beforeend', ANS)
      var tyio;
      if (!window.location.hash.includes("attempt")) {
        for (let ele of testReportAnswers.questions) {
          if (id == ele.qid) {
            tyio = ele.answer
            if (analysedActions != undefined) {
              if (analysedActions.questions[ele.qid] == undefined) {
                dE("tt_timespent").innerText = "0 seconds"
              } else {
                dE("tt_timespent").innerText = sd(analysedActions.questions[ele.qid].time)
              }
            }
            var lio = '<div id="tg_answer">Answer: ' + ele.answer + '</div><div id="tg_expl">Explanation: ' + ele.expl + '</div>'
            dE("tt_qtitle").insertAdjacentHTML('beforeend', lio)
          }
        }
      }
      renderMathInElement(dE('tt_qtitle'));
      var fghu = 0;
      for (let ele23 of testResponseList) {
        if (ele23.qid == id) {
          for (var i = 0; i < document.getElementsByClassName("q_ans").length; i++) {
            var ele32 = document.getElementsByClassName("q_ans")[i]
            if (ele.type == "mcq" || ele.type == "mcq_multiple" || ele.type == "mcq_multiple_partial") {
              if (ele23.ans == undefined) { ele23.ans = [] }
              for (let el433 of ele23.ans) {
                if (ele32.value == el433) {
                  ele32.checked = true;
                  fghu = 1;
                  break;
                }
              }
            } else {
              ele32.value = ele23.ans;
              fghu = 1;
            }
          }
          if (!window.location.hash.includes("attempt")) {
            for (let ele of testReportAnswers.questions) {
              if (id == ele.qid) {
                for (let ele23 of testResponseList) {
                  if (ele23.qid == id) {
                    let q_check = qCorrector(ele.type, ele.answer, ele23.ans, ele.pm, ele.nm, 0)
                    if (q_check.type == "unattempted") {
                      dE("tt_marksaward").innerHTML = '<div style="color:orange">Unanswered(0)</div>'
                    } else {
                      if (q_check.type == "correct") {
                        dE("tt_marksaward").innerHTML = '<div style="color:var(--clr10)">Correct(' + q_check.marks + ')</div>'
                      } else {
                        dE("tt_marksaward").innerHTML = '<div style="color:red">Incorrect(' + q_check.marks + ')</div>'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      // var fghut = 0;
      for (var k = 0; k < testResponseList.length; k++) {
        if (testResponseList[k].qid == activequestionid) {
          if (testResponseList[k].type == "tts_notvisit" && window.location.hash.includes("attempt")) {
            testResponseList[k].type = "tts_notanswer"
            testOperator("tts_notanswer")
            testResponseList[k].ans = []
            // fghut = 1
            dE(activequestionid).classList.remove("tts_notanswer", "tts_notvisit", "tts_answered", "tts_review", "tts_ansreview")
            dE(activequestionid).classList.add("tts_notanswer")
          }
        }
      }
      // if (fghut == 0) {
      //   testResponseList.push({ qid: activequestionid, ans: [], type: "tts_notanswer" })
      // }
      break;
    }
  }
}
function inittestHandler() {
  var a = 1;
  var itsections = ["tw_Physics", "tw_Chemistry", "tw_Math", "tw_Computer", "tw_Statistics", "tw_Biology", "tw_Unfiled"];
  for (let e2le3 of itsections) {
    dE(e2le3 + "_c").innerHTML = "";
    dE(e2le3).style.display = 'none'
  }

  for (let ele of testQuestionList.questions) {
    var box = '<span class = "tts_notvisit" id = "' + ele.qid + '">' + a + '</span>'
    a = a + 1
    dE("tw_" + ele.section + "_c").insertAdjacentHTML("beforeend", box)
    dE("tw_" + ele.section).style.display = "flex"
    dE(ele.qid).addEventListener("click", tqH)
  }
  if (!window.location.hash.includes("attempt")) {
    for (let ele23 of testResponseList) {
      var id = ele23.qid
      for (let ele of testReportAnswers.questions) {
        if (id == ele.qid) {
          var tyio = ele.answer
          if (ele23.ans == undefined) {
            ele23.ans = []
          }
          let q_check = qCorrector(ele.type, ele.answer, ele23.ans, ele.pm, ele.nm, 0)
          if (q_check.type == "unattempted") {
            dE(id).classList.add("t_unat")
          } else {
            if (q_check.type == "correct") {
              dE(id).classList.add("t_crr")
            } else {
              dE(id).classList.add("t_incrr")
            }
          }
        }
      }
    }
    analyseActions(2)
  } else {
    dE("tt_sub").style.display = "block"
  }
  for (let ele of testResponseList) {
    dE(ele.qid).classList.replace("tts_notvisit", ele.type)
  }
  testqHandler(testQuestionList.questions[0].qid, 1)
}
async function testOperator(type) {
  if (!window.location.hash.includes("attempt")) {
    log("Error", "Performing Test Operations in Test Reports Is Prohibited")
    return 1;
  }
  showLS("s")
  var aqid = "answers." + activequestionid
  var testid = window.location.hash.split("#/attempt/")[1]
  var triu = dE("qb_q_ty").innerText.split("(")[1]
  if (type == "tts_notanswer") {
    await updateDoc(doc(db, "tests", testid, "responses", auth.currentUser.uid), {
      [`${aqid}`]: { ans: "", type: "tts_notanswer", time: serverTimestamp() }
    })
    var a = 0;
    for (let ele23 of testResponseList) {
      if (ele23.qid == activequestionid) {
        for (var i = 0; i < document.getElementsByClassName("q_ans").length; i++) {
          var ele32 = document.getElementsByClassName("q_ans")[i]
          if (triu == "mcq" || triu == "mcq_multiple" || triu == "mcq_multiple_partial") {
            for (var j = 0; j < ele23.ans.length; j++) {
              var ele44 = ele23.ans[j]
              if (ele32.value == ele44) {
                ele32.checked = false
              }
            }
          } else {
            ele23.value = ""
          }
        }
        testResponseList.splice(a, 1)
      }
      a = a + 1
    }

  } else {
    var ans = [];

    for (var i = 0; i < document.getElementsByClassName("q_ans").length; i++) {
      var ele32 = document.getElementsByClassName("q_ans")[i]
      if (triu == "mcq)" || triu == "mcq_multiple)" || triu == "mcq_multiple_partial)") {
        if (ele32.checked == true) {
          ans.push(ele32.value)
        }
      } else {
        ans.push(ele32.value)
      }
    }
    if (type == "tts_review") { ans = "" }
    await updateDoc(doc(db, "tests", testid, "responses", auth.currentUser.uid), {
      [`${aqid}`]: { ans: ans, type: type, time: serverTimestamp() }
    })
    var eleexists = 0;
    for (let ele of testResponseList) {
      if (ele.qid == activequestionid) {
        ele.ans = ans
        ele.type = type
        eleexists = 1;
      }
    }
    if (eleexists == 0) {
      testResponseList.push({ qid: activequestionid, ans: ans, type: type })
    }
  }
  dE(activequestionid).classList.remove("tts_notanswer", "tts_notvisit", "tts_answered", "tts_review", "tts_ansreview")
  dE(activequestionid).classList.add(type)
  showLS("d")
  for (var i = 0; i < testQuestionList.questions.length; i++) {
    if (testQuestionList.questions[i].qid == activequestionid && type != "tts_notanswer" && type != "tts_notvisit") {
      testqHandler(testQuestionList.questions[i + 1].qid, i + 2)
      break;
    }
  }
}
async function submitTest() {
  if (!window.location.hash.includes("attempt")) {
    log("Error", "Performing Test Operations in Test Reports Is Prohibited")
    return 1;
  }
  var it = new Date()
  testActionLogger.push({ type: "a", time: it, value: activequestionid })
  testActionLogger.push({ type: "end", time: it, value: "1" })
  var testid = window.location.hash.split("#/attempt/")[1]
  window.onbeforeunload = function () { }
  window.onhashchange = creMng
  await updateDoc(doc(db, "tests", testid, "responses", auth.currentUser.uid), {
    endon: serverTimestamp(),
    actions: testActionLogger,
    warning: []
  }).then(function () { testResponseList = []; })
  await updateDoc(doc(db, "tests", testid, "responses", "finished"), {
    finished: arrayUnion(auth.currentUser.uid),
  }).then(computeResult(0))
  testQuestionList = []
  activequestionid = ""
  dE("dsh_btn").style.display = "block"
  window.location.hash = "#/finished/" + window.location.hash.split("attempt/")[1]
  clearInterval(testTimerfunction);
}
window.onbeforeunload = function (event) {
  updatePoints()
};

function internetStatus(type) {
  if (type == 0) { log("WARNING", "You Are Currently Offline.") }
}
window.addEventListener('online', () => internetStatus(1));
window.addEventListener('offline', () => internetStatus(0));
function notesUIHandler() {
  if (dE("un_rendermode").value == "preview") {
    dE("un_preview").style.display = "block"
    dE("un_preview").innerHTML = "<h1 style = 'text-align:center'>" + dE("un_title").value + "</h1><br>" + getHTML("un_editable")
    dE("un_edit").style.display = "none"
  } else if (dE("un_rendermode").value == "edit") {
    dE("un_edit").style.display = "flex"
    dE("un_preview").style.display = "none"
  }
  try { dE("uno" + window.location.hash.split("usernotes/")[1]).style.backgroundColor = dE("un_colorpicker").value } catch { }
}
function rgbtn() {
  let mobileNo = document.querySelector('#rg_mbleno').value;
  let email = document.querySelector('#rg_uname').value;
  let password = document.querySelector('#rg_pass').value;
  let confirmPassword = document.querySelector('#rg_pass1').value;
  let name = document.querySelector('#rg_name').value;
  let dob = document.querySelector('#rg_dob').value;
  let selectedClass = document.querySelector('#rg_class').value;
  let selectedGender = document.querySelector('#rg_gender').value;

  // Check if all fields are filled
  if (mobileNo && email && password && confirmPassword && name && dob && selectedClass && selectedGender) {
    // Check if mobile number is in correct format
    const mobileNoRegex = /^\+91\d{10}$/;
    if (!mobileNo.match(mobileNoRegex)) {
      log("Warning", 'Mobile number should be in the format +91XXXXXXXXXX');
      return;
    }

    // Check if email is in correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      log("Warning", 'Please enter a valid email address');
      return;
    }

    // Check if password meets the criteria (at least 8 characters long)
    if (password.length < 8) {
      log("Warning", 'Password should be at least 8 characters long');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      log("Warning", 'Passwords do not match');
      return;
    }

  } else {
    log("Warning", 'Please fill in all fields');
    return;
  }

  log("Note", "By Clicking on 'Accept And Register' you agree that you accept all Terms And Conditions and Privacy Policy of Quarkz!", signUp, "Accept And Register")
}


function plyVid() { window.player.playVideo() }
function stpVid() { try { window.player.stopVideo(); if (!window.location.hash.includes("topic")) { window.player = undefined } } catch { } }
function pauVid() { window.player.pauseVideo() }
function loadVid(videoId) {
  var vid_width = 0.8 * window.innerWidth || 0.8 * document.documentElement.clientWidth || 0.8 * document.body.clientWidth;
  if (player == undefined || dE("player").tagName == "div") {
    window.player = new YT.Player('player', {
      height: '500',
      width: vid_width,
      origin: window.location.origin,
      videoId: videoId,
      playerVars: {
        'playsinline': 1,
        'controls': 0,
        'modestbranding': 1,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  } else { window.player.loadVideoById(videoId); }
}
function renderAppInfo() {
  dE("ren_appinf").textContent = JSON.stringify(Quarkz, undefined, 4);
}

$(document).ready(function () {
  $('.summernote').summernote({
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'hr']],
      ['view', ['fullscreen', 'codeview']],
      ['help', ['help']]
    ],
  });
  $('#aq_add_test_instr').summernote({
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'hr']],
      ['view', ['fullscreen', 'codeview']],
      ['help', ['help']]
    ],
  });
});
function getHTML(id) {
  return $("#" + id).summernote('code')
}
function setHTML(id, html) {
  $("#" + id).summernote('code', html);
}
var Quarkz = {
  "copyright": "Mr Techtroid 2021-23",
  "vno": "v0.6.9",
  "author": "Mr Techtroid",
  "last-updated": "23/08/2023(IST)",
  "serverstatus": "firebase-online",
}
if (document.location.origin == "https://quarkz.netlify.app") {
  document.location = "https://quarkz.mtt.one"
}
var handlebox = "login";
var location1 = window.location.hash.split("#/")[1]
var userinfo;
var topicJSON = {};
var topicJSONno = 0;
var editorrole, adminrole, userrole;
var chapterlist = []
var userdetails = []
var curr_qlno = 0
var curr_qlid = ""
var editqllist = []
var autosignin = 0
var testList = []
var adminBatchList = []
var adminTestList = []
var activeTestList = []
var upcomingTestList = []
var finishedTestList = []
var testInfo = []
var testQTime = 0;
var testQuestionList = []
var testResponseList = [];
var activequestionid = ""
var testActionLogger = []
var testReportAnswers = []
var reQW;
var analysedActions;
window.onhashchange = creMng

const bc = new BroadcastChannel("Quarkz!");
let isFirstTab = true;
bc.postMessage(`QZCODE-ASK`);
setTimeout(() => {
  if (isFirstTab) {
    initFirebaseAuth()
    sysaccess()
  }
}, 200);
bc.onmessage = (event) => {
  if (event.data === `QZCODE-ASK`) {
    bc.postMessage(`QZCODE-NOTFIRST`);
  }
  if (event.data === `QZCODE-NOTFIRST`) {
    isFirstTab = false;
    renderBody("Quarkz! is Open in Another Tab/Window! You can only use Quarkz! in one tab/window.", "", "")
  }
  if (event.data == `QZCODE-REPORT`) {
    reportHandler()
  }
  if (event.data == `QZCODE-DARK`) {
    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = '#fff';
  }
  if (event.data == `QZCODE-LIGHT`) {
    Chart.defaults.color = '#000';
    Chart.defaults.borderColor = '#000';
  }
};