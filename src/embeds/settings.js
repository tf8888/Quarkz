export let page_settings = `
<span class="in_t">Settings</span>
        <hr color="white" width="100%">
        <div class = "flex_type" style = "flex-direction: row;flex-wrap: wrap;">
            <div id="st_accinfo" class = "db_class">
                <span style="font-size: 25px;color:yellow">Account Info</span>
                <button id="pass_rst_btn" class="tst_btn rpl">Reset/Change Password</button>
            </div>
            <div id="st_notif" class = "db_class">
                <span style="font-size: 25px;color:yellow">Notifications</span>
                <button id="pass_rst_btn" class="tst_btn rpl" disabled>Enable Notifications</button>
            </div>
        </div>`

export default {page_settings}