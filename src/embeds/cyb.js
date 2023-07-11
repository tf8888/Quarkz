export let page_cyberhunt = `<div id="cyberhunt" class="full_page flex_type">
        <div id="cyb_code" class="flex_type">
            <span class="in_t">Join Cyberhunt!</span>
            <hr style="color:var(--clr18)" width="100%">
            <span>Do You Want To Join A Cyberhunt?Enter The Cyberhunt Code Below:</span>
            <input id="cyb_cd_in" class="_in_aq" placeholder="i2a01pmzshn1">
            <button class="tst_btn rpl" id="cyb_cd_sbm"
                onclick="if (document.getElementById('cyb_cd_in').value != ''){window.location.hash = '/cyberhunt/'+document.getElementById('cyb_cd_in').value}">Submit</button>
            <span>Joined Cyberhunts</span>
            <div id="cyb_joined"
                style="overflow-y: scroll;display: flex;flex-direction: column;height: 30vh;width: 40vw;border: 3px greenyellow solid;padding-left: 6px;">
            </div>
        </div>
        <div id="cyb_edit">

        </div>
        <div id="cyb_viewer" class="flex_type" style="width:100%;height:100%">
            <div
                style="display:flex;flex-direction:column;justify-content: left;width:100%;margin-left:5vw;margin-top:10px;">
                <span style="font-size: 16px;">Welcome to</span>
                <span id="cyb_v_name" style="font-size: 30px">CyberHunt Name</span>
                <span id="cyb_v_status" style="font-size: 18px">started on XX:XX</span>
                <span id="cyb_v_crtby" style="font-size: 15px">By Mr Techtroid</span>
            </div>
            <span style="font-size: 16px;">Participants List</span>
            <div id="cyb_v_plist"
                style="display:flex;flex-direction:row;flex-wrap:wrap;border: solid grey 2px;border-radius: 10px 10px 10px;width:90%;height:40vh;padding:10px;overflow-y: scroll;">
                <div class="cyb_v_plist_p"
                    style="display: flex;flex-direction: column;width:100px;height:50px;border: solid grey 2px;border-radius: 10px 10px 10px;text-align: center;">
                    <span>Mr Techtroid</span>
                </div>
            </div>
        </div>

    </div>`

export default {page_cyberhunt}