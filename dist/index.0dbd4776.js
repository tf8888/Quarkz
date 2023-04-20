/*
Copyright 2021-23 Quarkz By Mr Techtroid

All rights reserved by [Mr Techtroid]. This work is not open-source.

No part of these HTML, CSS, and JavaScript files may be reproduced, distributed, 
or transmitted in any form or by any means, including photocopying, recording, 
or other electronic or mechanical methods, without the prior written permission 
of the author, except in the case of brief quotations embodied in critical reviews 
and certain other noncommercial uses permitted by copyright law.

For permission requests, please contact [Mr Techtroid] at mrtechtroid@outlook.com .
*/ function changeColor(ele) {
    c = ele.firstChild;
    if (ele.target !== this) {
        if (document.getElementById("aq_type").value == "mcq") {
            for(var i = 0; i < document.getElementsByClassName("aq_mcq").length; i++){
                document.getElementsByClassName("aq_mcq")[i].classList.remove("aq_mcq_ans");
                document.getElementsByClassName("aq_mcq_p")[i].style.borderColor = "yellow";
            }
            c.classList.add("aq_mcq_ans");
            ele.style.borderColor = "lime";
        } else if (c.classList.contains("aq_mcq_ans")) {
            c.classList.remove("aq_mcq_ans");
            ele.style.borderColor = "yellow";
        } else {
            c.classList.add("aq_mcq_ans");
            ele.style.borderColor = "lime";
        }
    }
}
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var video_id = "4nOn9YLp7AE";
var refer = window.location.search;
function watchonYT(vidID) {
    window.location = "https://youtube.com/watch?v=" + vidID;
}
function onPlayerReady(event) {
    //   event.target.playVideo();
    if (video_id == "4YKpBYo61Cs") player.setVolume(25);
}
var yt_done = false;
var mytimer;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !yt_done) yt_done = true;
    if (event.data == YT.PlayerState.PLAYING) {
        dE("yt_progressBar").style.display = "block";
        var playerTotalTime = player.getDuration();
        mytimer = setInterval(function() {
            var playerCurrentTime = player.getCurrentTime();
            var playerTimeDifference = playerCurrentTime / playerTotalTime * 100;
            var progressBarWidth = playerTimeDifference + "%";
            dE("yt_progressBar_in").style.width = progressBarWidth;
        }, 1000);
    } else {
        clearTimeout(mytimer);
        dE("yt_progressBar").style.display = "none";
    }
}
function stopVideo() {
    player.stopVideo();
}
function volumechange() {
    if (player.isMuted() == true) document.getElementById("tb_vl_br").value = 0;
    else {
        volumebar = document.getElementById("tb_vl_br").value;
        player.setVolume(volumebar);
    }
    if (player.getVolume() < 100 && player.getVolume() > 50) document.getElementById("mute").innerText = "volume_up";
    if (player.getVolume() < 50 && player.getVolume() > 0) document.getElementById("mute").innerText = "volume_down";
    if (player.getVolume() == 0) document.getElementById("mute").innerText = "volume_off";
}
function volumetype() {
    if (player.isMuted() == true) {
        player.unMute();
        document.getElementById("mute").innerText = "volume_up";
    } else {
        player.mute();
        document.getElementById("mute").innerText = "volume_off";
    }
}
function fullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
        document.getElementById("player").style.height = "300px";
    } else {
        element = document.getElementById("tp_full_vid");
        if (element.requestFullscreen) element.requestFullscreen();
        else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
        else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        else if (element.msRequestFullscreen) element.msRequestFullscreen();
        document.getElementById("player").style.height = "90vh";
    }
}
function mcqchose(ele) {
    if (document.getElementById("tp_question").getAttribute("qtype") == "mcq") {
        for(var i = 0; i < document.getElementsByClassName("tp_mcq_p").length; i++){
            document.getElementsByClassName("tp_mcq_p")[i].classList.remove("aq_mcq_ans");
            document.getElementsByClassName("tp_mcq_p")[i].style.borderColor = "yellow";
        }
        ele.classList.add("aq_mcq_ans");
        ele.style.borderColor = "lime";
    } else if (ele.classList.contains("aq_mcq_ans")) {
        ele.classList.remove("aq_mcq_ans");
        ele.style.borderColor = "yellow";
    } else {
        ele.classList.add("aq_mcq_ans");
        ele.style.borderColor = "lime";
    }
}
if (screen.width < "300px") document.getElementById("overlay").style.display = "block";
function updateUI() {
    if (document.getElementById("pe_tst_type_2").checked) document.getElementById("equ_gi").innerText = document.getElementById("pe_gi_ins").value;
    if (document.getElementById("pe_tst_type_1").checked) document.querySelectorAll(".qb_q_ty").forEach(function(e) {
        switch(e.innerText){
            case "(mcq)":
                e.innerText = e.innerText + "(" + document.getElementById("pe_mcq_pno").value + "," + document.getElementById("pe_mcq_nno").value + ")";
                break;
            case "(mcq_multiple)":
                e.innerText = e.innerText + "(" + document.getElementById("pe_mcmul_pno").value + "," + document.getElementById("pe_mcmul_nno").value + ")";
                break;
            case "(numerical)":
                e.innerText = e.innerText + "(" + document.getElementById("pe_num_pno").value + "," + document.getElementById("pe_num_nno").value + ")";
                break;
            case "(taf)":
                e.innerText = e.innerText + "(" + document.getElementById("pe_taf_pno").value + "," + document.getElementById("pe_taf_nno").value + ")";
                break;
            case "(explain)":
                e.innerText = e.innerText + "(" + document.getElementById("pe_exp_pno").value + "," + document.getElementById("pe_exp_nno").value + ")";
                break;
            case "(matrix)":
                e.innerText = e.innerText + "(" + document.getElementById("pe_mat_pno").value + "," + document.getElementById("pe_mat_nno").value + ")";
                break;
        }
    });
}
function dE(id) {
    return document.getElementById(id);
}
function sleep(ms) {
    return new Promise((val)=>setTimeout(val, ms));
}
async function idElementPrint(ref, uname) {
    iframe = dE("un_print_iframe");
    const pri = iframe.contentWindow;
    const csspage = document.querySelector('link[rel="stylesheet"]').href;
    pri.document.open();
    pri.document.write('<head><link rel="stylesheet" href="' + csspage + '" onload = "print()"><style>body{border: 3px solid black;font-family:Nunito;}</style></head>');
    pri.document.write(ref.innerHTML);
    pri.document.write('<div class="divFooter2" style = "text-align:center;">By ' + uname + " @ Quarkz!</div>");
    pri.document.close();
    pri.focus();
}
function examlog(examname, dates, examinfo, syllabus) {
    dE("exam_msg_popup").style.visibility = "visible";
    dE("exam_msg_popup").style.opacity = "1";
    document.getElementById("exam_title").innerText = examname;
    document.getElementById("exam_dates").innerText = dates;
    dE("exam_einfo").href = examinfo;
    dE("exam_syl").href = syllabus;
}

//# sourceMappingURL=index.0dbd4776.js.map
