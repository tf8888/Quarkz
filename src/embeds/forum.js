export let page_forum = `
<span style="font-size: 5vh;color:var(--clr16)" id="fm_title">Forum</span>
        <hr width="100%" style="color:var(--clr18)">
        <div style="border:hotpink 3px solid;width:80%;">
            <div id='pinned_msg'
                style="background-color: rgb(38, 44, 31);color:rgb(21, 209, 209);overflow-y: scroll;height:30px;">Pinned
                Message:<span id='pinnedtxt'>1</span></div>
            <div id="forum_live" style="height:60vh;overflow-y: scroll;display: flex;flex-direction: column;">
            </div>
        </div>

        <div>
            <input type="text" id="fm_message" class="_in_aq" placeholder="Message">
            <button class="tst_btn rpl" id="fm_send">Send</button>
        </div>
`
export default {page_forum}