export let page_settings = `
<span class="in_t">Settings</span>
        <hr style="color:var(--clr18)" width="100%">
        <div class = "flex_type" style = "flex-direction: row;flex-wrap: wrap;justify-content:center;align-items:center;">
            <div id="st_accinfo" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Account Info</span>
                <button id="pass_rst_btn" class="tst_btn rpl">Reset/Change Password</button>
            </div>
            <div id="st_notif" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Notifications</span>
                <button id="notif_btn" class="tst_btn rpl" disabled>Enable Notifications</button>
            </div>
            <div id="st_rateapp" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Rate Our App!</span>
                <div id="stars">
                <span class="star" data-value="1">&#9733;</span>
                <span class="star" data-value="2">&#9733;</span> 
                <span class="star" data-value="3">&#9733;</span>
                <span class="star" data-value="4">&#9733;</span>
                <span class="star" data-value="5">&#9733;</span>
                </div>
                <textarea placeholder="This App was Very Useful!" style="height: 50px;resize: none;" id="rate_comment"></textarea>
                <button id="sub_rat_btn" class="tst_btn rpl">Submit Rating</button>
            </div>
            <div id="st_prftype" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Profile Picture Type</span>
                <div style ="display:flex;flex-direction:row;width:330px;overflow-x:scroll;">
                <img style = "border:2px solid #06d85f;border-radius:30px;width:100px;height:100px;" class = "prf_typ" id="prf_typ_1"></img>
                <img style = "border:2px solid #06d85f;border-radius:30px;width:100px;height:100px;" class = "prf_typ" id="prf_typ_2"></img>
                <img style = "border:2px solid #06d85f;border-radius:30px;width:100px;height:100px;" class = "prf_typ" id="prf_typ_3"></img>
                </div>
                <span style = "font-size:12px">Changing your Profile Picture only changes on this Browser. These Pictures are generated using Hashes/Initials of your Names.</span>
            </div>
        </div>`

export default {page_settings}