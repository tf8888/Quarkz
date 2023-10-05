
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
function changeColor(ele) {
  c = ele.firstChild
  if (ele.target !== this) {
    if (document.getElementById("aq_type").value == "mcq") {
      for (var i = 0; i < document.getElementsByClassName("aq_mcq").length; i++) {
        document.getElementsByClassName("aq_mcq")[i].classList.remove("aq_mcq_ans")
        document.getElementsByClassName("aq_mcq_p")[i].style.borderColor = "yellow"
      }
      c.classList.add("aq_mcq_ans")
      ele.style.borderColor = "lime"
    } else {
      if (c.classList.contains("aq_mcq_ans")) {
        c.classList.remove("aq_mcq_ans")
        ele.style.borderColor = "yellow"
      } else {
        c.classList.add("aq_mcq_ans")
        ele.style.borderColor = "lime"
      }
    }
  };
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var video_id = "4nOn9YLp7AE"
var refer = window.location.search;

function watchonYT(vidID) {
  window.location = "https://youtube.com/watch?v=" + vidID
}

function onPlayerReady(event) {
  //   event.target.playVideo();
  if (video_id == "4YKpBYo61Cs") {
    player.setVolume(25)
  }
}
var yt_done = false;
var mytimer;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !yt_done) {
    yt_done = true;
  }
  if (event.data == YT.PlayerState.PLAYING) {
    dE('yt_progressBar').style.display = "block"
    var playerTotalTime = player.getDuration();

    mytimer = setInterval(function () {
      var playerCurrentTime = player.getCurrentTime();
      var playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100;
      var progressBarWidth = playerTimeDifference + "%"
      dE('yt_progressBar_in').style.width = progressBarWidth
    }, 1000);
  } else {
    clearTimeout(mytimer);
    dE('yt_progressBar').style.display = "none"
  }
}
function stopVideo() {
  player.stopVideo();
}

function volumechange() {
  if (player.isMuted() == true) {
    document.getElementById("tb_vl_br").value = 0
  } else {
    volumebar = document.getElementById("tb_vl_br").value
    player.setVolume(volumebar)
  }
  if (player.getVolume() < 100 && player.getVolume() > 50) {
    document.getElementById("mute").innerText = "volume_up"
  }
  if (player.getVolume() < 50 && player.getVolume() > 0) {
    document.getElementById("mute").innerText = "volume_down"
  }
  if (player.getVolume() == 0) {
    document.getElementById("mute").innerText = "volume_off"
  }
}

function volumetype() {
  if (player.isMuted() == true) {
    player.unMute()
    document.getElementById("mute").innerText = "volume_up"
  } else {
    player.mute()
    document.getElementById("mute").innerText = "volume_off"
  }

}
function fullscreen() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    document.getElementById("player").style.height = "300px"
  } else {
    element = document.getElementById("tp_full_vid")
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    document.getElementById("player").style.height = "90vh"
  }
}
function mcqchose(ele) {
  if (document.getElementById("tp_question").getAttribute("qtype") == "mcq") {
    for (var i = 0; i < document.getElementsByClassName("tp_mcq_p").length; i++) {
      document.getElementsByClassName("tp_mcq_p")[i].classList.remove("aq_mcq_ans")
      document.getElementsByClassName("tp_mcq_p")[i].style.borderColor = "yellow"
    }
    ele.classList.add("aq_mcq_ans")
    ele.style.borderColor = "lime"
  } else {
    if (ele.classList.contains("aq_mcq_ans")) {
      ele.classList.remove("aq_mcq_ans")
      ele.style.borderColor = "yellow"
    } else {
      ele.classList.add("aq_mcq_ans")
      ele.style.borderColor = "lime"
    }
  }
};

if (screen.width < "300px") {
  document.getElementById("overlay").style.display = "block"
}
function updateUI() {
  if (dE("pt_ins").style.display == "block") {
    dE("pt_ins").style.display = "none"
  } else {
    dE("pt_ins").style.display = "block"
  }
}
function dE(id) { return document.getElementById(id) }

function sleep(ms) {
  return new Promise(val => setTimeout(val, ms));
}
async function idElementPrint(ref, uname) {
  iframe = dE("un_print_iframe")
  const pri = iframe.contentWindow;
  const csspage = document.querySelector('link[rel="stylesheet"]').href
  pri.document.open();
  pri.document.write('<head><link rel="stylesheet" href="' + csspage + '" onload = "print()"><style>body{border: 3px solid black;font-family:Nunito;font-size:12px;}</style></head>')
  pri.document.write(ref.innerHTML);
  pri.document.write('<div class="divFooter2" style = "text-align:center;">By ' + uname + ' @ Quarkz!</div>')
  pri.document.close();
  pri.focus();
}
function examlog(examname, dates, examinfo, syllabus) {
  dE("exam_msg_popup").style.visibility = "visible"
  dE("exam_msg_popup").style.opacity = "1"
  document.getElementById("exam_title").innerText = examname
  document.getElementById("exam_dates").innerText = dates
  dE("exam_einfo").href = examinfo
  dE("exam_syl").href = syllabus
}
function showqLS(type) {
  // Get the loading spinner element
  let loadingSpinner = document.getElementById('loading-spinner');
  if (type == "s") {
    loadingSpinner.style.display = 'block';
  } else {
    loadingSpinner.style.display = 'none';
  }
}

window.beforeunload = function (e) {
  if (localStorage.getItem("isFirstTab") == `true`) { localStorage.removeItem("isFirstTab") }
}
function refreshScreen(e) {
  var updatedScreenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // Check if screen width is less than 600px
  if (updatedScreenWidth < 350) {
    dE("overlay").style.display = "flex"
    dE("output").style.pointerEvents = "none"
    dE("ovr_la_1").style.display = "none"
    dE("ovr_la_2").style.display = "block"
    dE("ovr_msg").innerText = "Please rotate your device to Landscape Mode to access this Website. "
    // dE("ovr_msg").innerText = "Your Device/Browser is Currently Not Supported, Please Use Chrome/Firefox Browser on Laptop/PC to Access This Website."
  } else {
    dE("output").style.pointerEvents = "auto"
    dE("overlay").style.display = "none"
    dE("ovr_la_1").style.display = "block"
    dE("ovr_la_2").style.display = "none"
  }
}
window.onresize = refreshScreen
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;
function uiMode() {
  const bc = new BroadcastChannel("Quarkz!");
  if (toggleSwitch.checked) {
    body.classList.add('dark_mode');
    body.classList.remove('light_mode');
    localStorage.setItem("ui", "dark")
    bc.postMessage(`QZCODE-DARK`);
  } else {
    body.classList.add('light_mode');
    body.classList.remove('dark_mode');
    localStorage.setItem("ui", "light")
    bc.postMessage(`QZCODE-LIGHT`);
  }
}
toggleSwitch.addEventListener('change', uiMode);
if (localStorage.getItem("ui") == "light") {
  toggleSwitch.checked = false
  uiMode()
} else {
  toggleSwitch.checked = true
  uiMode()
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false
  }, 'google_translate_element');
}
function changeLanguageByButtonClick() {
  var language = document.querySelector('input[type=radio][name=trans_lang]:checked');
  var selectField = document.querySelector("#google_translate_element select");
  for (var i = 0; i < selectField.children.length; i++) {
    var option = selectField.children[i];
    // find desired langauge and change the former language of the hidden selection-field 
    if (option.value == language.value) {
      selectField.selectedIndex = i;
      // trigger change event afterwards to make google-lib translate this side
      selectField.dispatchEvent(new Event('change'));
      break;
    }
  }
}
var codeEditorTimeOut
var codeEditorOutput = []
var codeEditorSubmission = 0

// function executeJSCodeHunt(code_editor, cd_args, i) {
//   const workerModuleText =
//     `self.addEventListener('message', async ({data: {id, fn}}) => self.postMessage({id, value: await eval(\`\${fn}\`)}));`;

//   const workerModuleSpecifier = URL.createObjectURL(
//     new Blob([workerModuleText], { type: 'text/javascript' }),
//   );

//   const worker = new Worker(workerModuleSpecifier, { type: 'module' });

//   worker.addEventListener('message', ({ data: { id, value } }) => {
//     // dE("code_console").insertAdjacentHTML("beforeend",value)
//     clearTimeout(codeEditorTimeOut)
//     codeEditorOutput[i] = value
//     worker.terminate()
//   });

//   function notOnMyThread(fn) {
//     return new Promise(resolve => {
//       const id = window.crypto.randomUUID();
//       worker.addEventListener(id, ({ detail }) => resolve(detail), { once: true });
//       worker.postMessage({ id, fn: fn.toString() });
//     });
//   }
//   notOnMyThread(`${code_editor.getValue().replaceAll(/\n/g, '')};execute("` + cd_args + `")`)
//   codeEditorTimeOut = setTimeout(function () {
//     worker.terminate()
//   }, 1000)
// }
// function evaluateJSCode(cd_input, cd_output) {
//   if (codeEditorSubmission == 0) {
//     codeEditorSubmission = 1
//   } else {
//     addToast("error", "Please Wait for Test Bench to complete execution before Resubmissions.")
//     return
//   }
//   testpass = 0;
//   codeEditorOutput = []
//   document.getElementById("code_console").innerHTML = ""
//   document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:yellow'>Initialising Evalulation</span><br>")
//   for (let i = 0; i < cd_input.length; i++) {
//     codeEditorOutput.push("")
//     executeJSCodeHunt(window.code_editor, cd_input[i], i)
//   }
//   document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:yellow'>Running Tests (Approx time - 10sec)</span><br>")
//   setTimeout(function () {
//     for (let i = 0; i < cd_input.length; i++) {
//       if (codeEditorOutput[i] == cd_output[i]) {
//         testpass += 1;
//       } else {
//         break;
//       }
//     }
//     if (testpass == cd_input.length) {
//       document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:green'>Success - All Tests Passed</span><br>")
//     } else {
//       document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:red'>Failed - Test Case #" + (testpass + 1).toString() + "</span><br>")
//       document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:white'>Input: " + cd_input[testpass] + "</span><br>")
//       document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:white'>Expected Output: " + cd_output[testpass] + "</span><br>")
//       document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:green'>Your Output: " + codeEditorOutput[testpass] + "</span><br>")
//     }
//     codeEditorSubmission = 0
//   }, 10000)

// }
function code_evalueter(cd_input, cd_output) {
  function* mape(code, cdinput) {
    for (var i = 0; i < cdinput.length; i++) {
      try {
        yield eval(`${code.replaceAll(/\n/g, '')};execute("` + cdinput[i] + `")`)
      } catch (e) {
        yield "[QUARKZ-CODE-EXECUTION-ABANDONED]" + String(e)
      }
    }
  }
  let testpass = 0
  const code_value = window.code_editor.getValue()
  let timebefore = Date.now()
  const mape2 = mape(code_value, cd_input)
  for (let i = 0; i < cd_input.length; i++) {
    let hjg = mape2.next().value
    if (String(hjg).includes("[QUARKZ-CODE-EXECUTION-ABANDONED")) {
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:red'>Failed - Test Case #" + (testpass + 1).toString() + "</span><br>")
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:white'>Input: " + cd_input[testpass] + "</span><br>")
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:white'>Expected Output: " + cd_output[testpass] + "</span><br>")
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:red'>Error: " + hjg.split("[QUARKZ-CODE-EXECUTION-ABANDONED]")[1] + "</span><br>")
      break;
    }
    codeEditorOutput.push(hjg)
    if (hjg == cd_output[i]) {
      testpass += 1;
    } else {
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:red'>Failed - Test Case #" + (testpass + 1).toString() + "</span><br>")
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:white'>Input: " + cd_input[testpass] + "</span><br>")
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:white'>Expected Output: " + cd_output[testpass] + "</span><br>")
      document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:green'>Your Output: " + hjg + "</span><br>")
      break;
    }
  }
  if (testpass == cd_input.length) {
    document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:green'>Success - All Tests Passed</span><br>")
    addToast("success", "All Tests Passed", 1000)
  }
  let timeAfter = Date.now()
  let timetaken = timeAfter - timebefore
  document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:yellow'>Time Taken(in ms): " + timetaken + "</span><br>")
  codeEditorSubmission = 0
}
function evaluateJSCode(cd_input, cd_output) {
  if (codeEditorSubmission == 0) {
    codeEditorSubmission = 1
    document.getElementById("code_console").innerHTML = ""
    document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:yellow'>Initialising Evalulation</span><br>")
    document.getElementById("code_console").insertAdjacentHTML("beforeend", "<span style = 'color:yellow'>Running Tests</span><br>")
  } else {
    addToast("error", "Please Wait for Test Bench to complete execution before Resubmissions.")
    return
  }
  setTimeout(function () { code_evalueter(cd_input, cd_output) }, 1000)
}

function toastTimer(id, time) {
  dE(id).setAttribute("timedone", 0)
  dE(id).setAttribute("timestarted", Date.now())
  dE(id).setAttribute("toastInterval", setInterval(function () {
    timenow = Date.now()
    dE(id).style.width = String(100 * (timenow - parseInt(dE(id).getAttribute("timestarted"))) / (time)) + "%"
    dE(id).setAttribute("timedone", parseInt(dE(id).getAttribute("timedone")) + 1)
    if (parseInt(dE(id).getAttribute("timedone")) * 10 === time) {
      clearInterval(dE(id).getAttribute('toastInterval'));
      dE("toast" + id.split("toasttimer")[1]).remove()
    }
  }, 10))
  dE(id).parentElement.onclick = function(){
    clearInterval(dE(id).getAttribute('toastInterval'));
    dE("toast" + id.split("toasttimer")[1]).remove()
  }
}
function addToast(type, msg, time) {
  if (time == "" || time == undefined) {
    time = 5000
  }
  namo = ""
  idno = Math.floor(Math.random() * 10000)
  if (type == "success") {
    namo = `<img style = "width:30px;margin:10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUUlEQVR4nO2aO2hUQRSGf9mZ3Y2iJBATtVDRTlArtbCwEUVQFKskVjaChSRoY2Et+AAVBbXzUdhZaBYNliJEsRHEbGIqjQ90DRaBxFd+mbmTbB73bu6dO/ehZOBUu/P45pw5c86ZCyy2/7URLWDxECgvgLICiiooR0H5w8goKAa839R/igdBNCMXjSiB8ggo+0D5G5SMKKrPI1B26bFSb0QTKE6C4oPF4gNEjICiB0Q5JYjCPlAMuwOYB/QWLOxN2oyuJAcwD+iO1rxjiHZQvkwPQk7JCxBtjiBK6z11pw5Bo5khvYaYmlhp3GhGEHIKZhjEKluIckbmxAZmZuGiKa/nYPGcI1ctXGzmi6a/FPaENakSKAazX7AMEOV4wlya+sbOerFyIZjuMNpwGHaElnFQbAfFzpAg7xsffC8AzGKHT5n5t0To19kIpC8DkGcgCiAEKJ9H6FcJMqsWy1A8joyBpY3mbJ6J2PcXiBU+IDopStukjhtL2GqSL0aTwn4/s7qYMsgTEEtAFEHxynKM834glRQhvoPltWbeszE0+sAHREWZqYEcNXPu8GzdGqTqp5GaxUD3QHHXahe9dHkg5oZ89QOxOGzGa1CcBuVkiD41EKvNfJccaHbCEYjSCKTpfyyE++4w4LtA+ScpkG+Wg1VALJ3hwscDoO8bk1rmMOP84nfY40S8T6eLbaoCoi+6Wb9/BtFqNuyGIwjqM+be/YrXYNMasynbZjuP4mEDuTvkWWIM96tLne4KBZSbQfkRFLeMSTV7UasrCKnknA+IqsU62aURsLjJG7O0oW5y4rZjCAaEKGrHnAWNNZ1fON8kOVN++geNnjk8djjRmM6v1SGn/JQASK8/hAfS5XiyiYg5BiNIx0Kp7khCEzsUoVLdYjCIdyh7/gGQE40h6lqp5hhiKHzF0budmUOZ1JdqpEZ5LQcL5xy5HA1i2sRU4TjzxdNI/8IHPBimNUfPCu12ELMfeoYyhBgEy+viQdQ105aRmfXrx6aEHkMdhuEN5Wayb+86fkrS1EQ1uou1htGXZrfb/EK80zd2Rl9AKHPrNNmlTX1K9enVAaC1a3XdVG7A4gFdxqR8aGpWtRkf1agc5Y1OT1Vmp5IiYrnzdSw25KP9BWZWBMSrcgKuAAAAAElFTkSuQmCC">`
  } else if (type == "warning") {
    namo = `<img style = "width:30px;margin:10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACX0lEQVR4nO3YTatNURzH8V+eB54iZaAkkkgpMzdKUgYMeAUMGDBgwCu44U7oRlyz+wIYMKAkeQN3IpLIUNyrq9stD2f/1/XVbtu1O/eec/bD2k86v/rPzllrfdZ/7dU5WxpmmHYFtMbQuKHv/2octFpti6H7DpEsQ/fUpnTQAUMLS0AWAnRQbYlDL7oRiXqlNsTQmT6IuDOn1eSAVhn6kALyqdEPvkPXBiESdVVNDGiLobm0EEPzoK1qWgw9yNCNGDOhJgW015DlgLgO2q+mxKHnWRGJeqkmxNCpAoi4MydrRYBWGnrvAfIxvLpVVxy6UhSRqMu1IECbDc32W1yADsWfD9DIgK7MhmNWDjF0d9Aud38nxRG7UykCtMdQUALEOmhfZRCHnqU591khLqqnlSAMHUv7AOeEYOhEqQjQcofeVAB5F17tpUEcupTlSs0LcVFdLAUB2mjoW1UQi67jTd4hhm5n3NGiHcHQLa8I0E5Dv2uAdEC7vUEcepJ1ET4gLqrHXhCGjuZcgC8Iho77uG5f1w1x6C1oRW6IQxcKTO4TgkPncyFA6wx9aQrE0DRoQ2aIobGCOxj+jB+JxwvQ4aLjGRrL2o0dhn4Vndh3WXQd70oNcehR3Yt2vethKkT4r87QnwYsmF4VoCODjtQyh6Y8Tpj6r27GmgrX2u9InfO5c0uM77MzZ3t1Y62hz22BGPoKWr8IYmjU8455v37dYsxodze2Gfrhe6Kyy9BP0PZkNybrXlQBzGQSMt9iyFwSMtNiyHQScqPFkOvdb9VvtqkzhmbCNZf62miYYfT/5C8v5XANYrlmtwAAAABJRU5ErkJggg==">`
  } else if (type == "error") {
    namo = `<img style = "width:30px;margin:10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC30lEQVR4nO2azWoUQRDH/xena3ejRtDoTW+R4Cme9KaIIih6lPgMhuBb+HFQFMSrj6BZTN4giGezu9mTX0QUz8ZI/tK947DuzM7O9PRMz4Y0FCxsd039tqprqroXOBj7dPAojjHALSo8oqBNQYcKPynYMTL4vGm+03P0XGAWdRgEFAV3KVij4A8FzCl6zVsKlrQueAAQCu5T4YuF8cmi8JkNrGjd1UAEuE5B3xlAXLaocK3sMHpaIsCoh14RaLiFaOEkFd5XBiERzDu2MOcGQuGMcXfVEBJJT9tQDGIGJ0wa9QfBUPps4pR9ZvIRTpISZjYpmoIX3o2XmDyzSbG+jeYYz1zNk2a73g2WsbKV6aVp3tj+jWWqBFie7A1dKvg2VCaG16fUjR8WgHkVX2ATi1TYtjBo26wVXLR47p00kPXcCptYNGsDLOSC0XMDLJi1TZy3AGmP7ydsSvFhg7LC2KyRmOwSOBIHaeB2gZj9xkM4Fxo2T4WvGeeeTZ0rEyTAjTiIwmNrhVl/ZTee4JC+h0n7o11I6STPuPSERPI6CaTnQHHyr+7aExJJJym0fjhSHocpB4JU+J7kkR1nDxgJJcfhxCH55QNkvhoQtX9CqzuFm32zivT7/57I89KUIul3cNTp1hM2cyTXMx+UWaKkZyeXngmSShRgdsqKxt+JRWO4T9amqIxfTYQIQZYsPHLJNEa2jdVg7WW3jRWmqtUNxoKEm35lCkDupUJEXqnHMSnHSC/ziaO+n6iBwUyQPSpcyQQRwQie18BwjsiTXBBRiOmDY//G04jCxsQNPhZmBsdrsl/6+rLJCmLkosdNG2wnXQpOF4KIYFqY8xJmChv6sskJRMJl6F5FIC9LvXvX9xMlh1ond4ot5J0Ay6ZUcBdGH/Ub29c/IAJdvIXd5a4FgF6zanTYplbXQ/cGDHBTH2NS8Mb8gWZwoPHvTzX68wfdnurOTjdFBA47N+RgoB7jLwE38QIzwxY7AAAAAElFTkSuQmCC">`
  } else {
    namo = `<img style = "width:30px;margin:10px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO2azW7TQBDH5wblAq0E9OMETwOConKF8A6tCoRnKL0gIYE48ghBVYG+AWrFkZAGUCM1M07TciWi6I+866qpvHFje/wVdaSRIsea3Z9ndnZ3dokuZFIFnRmCLBF4nSAbBGkS5Iggg0D939/sf/zSvrs3TaUQ/LpM8J4QeIvA/wiCeMrHBP5EkJqxlbugM0XwnhK4G7/zI6F8W6vGdj4QfJ8gP/UAQkA/CHwv4zCSV9kBhIDeE/avKEP05gj8NT8IOdFtgjerBCG3rbtzh0DgmbbpQzoIvkHgVnEQMjRuknrGZKZCwgkjdCdZiga/S9nwgMDPCQfzVrkeTIxpPPMmSYpNGw51h916ervdu3FCSmFw9+bCtr1ZhQ/UHi/EwM90YvpgPmy7v6A0XlbGmPS0lh3O0HqhZHs/2itmAajyxU4Ge113sMuwPo4Kqy3FhjJW/hixn/CX1ZUBOSb8vuYAkYfFd07i6gNXWK2XoGOIqWsuj2yoNTByDKqDNFweaVUQpOlq5FC9oexBei6QQQVB/kw0yOGEhBa3KgjSzDb95gfSyGdCzB5kzeWRpeqB8KIDZG9afdGYKQj/JRxdDYPY8PpcIZBNN4RtqFYdEHkUAdK6ZLeRZQfh7vkFCFPaLzuILEdDaJWDzm0jlTd2x684+ucTpQXx7owHcQrzVjEUtPR1PIjTg53tEnQegX4xySiRoHudwN+Lh2D/jORmMoizBz3tYiH4VjqIs8XnnWLCSVJ6wjlZ5n0Y2snwqNo/n8g01Hg3fopNDGMy2orqcsbaWi7oBoQJt5opKCfaApgrHJumsp44tWqLX1D2a7H+rg3yIbhA0x+6VNMPnjXsO7w4ej9xIVR5+Q+89EGSXCqf1AAAAABJRU5ErkJggg==">`
  }
  dE("toasts").insertAdjacentHTML('afterbegin', `
  <li class = "toast" id = "toast`+ idno + `"><div style = "display:flex;flex-direction:row;align-items:center;">` + namo + `<span>` + msg + `</span></div><div class = "toasttimer" id = "toasttimer` + idno + `"></div></li>
  `)
  toastTimer("toasttimer" + idno, time)
  return "toast" + idno
}
function dateparser(var1) {
  var now = new Date(var1);
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
}