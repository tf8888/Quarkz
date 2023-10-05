export let page_vidchat = `
<div style = "display:flex;flex-direction:row;flex-wrap:wrap;width:100%;margin:10px;padding:10px;padding-left:10px;justify-content:center">
  <span style = "font-size:16px" id = "vid_title">Counsilling Session - 1</span>
</div>
<div style = "border-radius:5px;width:90vw;height:60vh;position:relative">
  <video id="remoteVideo" autoplay playsinline style = "width:100%;height:100%;border: white solid 2px"></video>
  <video id="webcamVideo" autoplay playsinline style="position:absolute;width:200px;height:100px;right:10px;bottom:10px;border: white solid 2px"></video>
</div>
<div>

</div>
<div style = "display:flex;flex-direction:row;width:100%;justify-content:space-around;padding:10px;">
<div style = "display:flex;flex-direction:row">
  <button id="joinaudioButton" class = "material-symbols-outlined vid_ico">mic</button>
  <button id="webcamButton" class = "material-symbols-outlined vid_ico">videocam</button>
</div>
<div style = "display:flex;flex-direction:row">
  <button id="callButton" class = "material-symbols-outlined vid_ico" disabled>call</button>
  <button id="screenButton" class = "material-symbols-outlined vid_ico">desktop_windows</button>
</div>
<button id="hangupButton" class = "material-symbols-outlined vid_ico" disabled>call_end</button>
</div>

</div>
`
export let page_createvidchat = `
<span class="in_t" class="" id="fu_vidchat_title">Schedule Meeting</span>
        <div id="vdc_basic" style="flex-direction: column;width:100%;display:flex;align-items:center;">
            <label for = "vdc_tpcname">Meeting Topic</label>
            <input type="text" id="vdc_tpcname" class="_in_aq" placeholder="Dummy Meeting"><br>
            <label for = "vdc_stron">Starts On:</label>
            <input type="datetime-local" id="vdc_stron" class="_in_aq"><br>
            <label for = "vdc_duration">Duration(mins)</label>
            <input type="text" id="vdc_duration" class="_in_aq" placeholder="60" value = "60"><br>
            <label for = "vdc_meetid">Meeting ID</label>
            <input type="text" id="vdc_meetid" class="_in_aq" placeholder="GENERATINGSOON"><br>
            <button class="tst_btn rpl" id="vdc_create">Create Call</button>
            <button class="tst_btn rpl" id="vdc_update">Update Call Details</button>
        </div>
`
export default {page_vidchat,page_createvidchat}