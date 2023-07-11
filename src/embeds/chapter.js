export let page_list_chapter = `
<span class="in_t">Chapters</span>
        <hr style="color:var(--clr18)" width="100%">
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content:center;">
            <button class="tst_btn rpl" id="pchb">Physics</button>
            <button class="tst_btn rpl" id="cchb">Chemistry</button>
            <button class="tst_btn rpl" id="mchb">Maths</button>
            <button class="tst_btn rpl" id="bchb">Biology</button>
            <button class="tst_btn rpl" id="cochb">Computer</button>
            <button class="tst_btn rpl" id="schb">Statistics</button>
            <button class="tst_btn rpl" id="uchb">Unfiled</button>
        </div>
        <div id="qb_cont_2" style="overflow-y: scroll;height:50vh;" class="flex_type">
        </div>`

export let page_edit_chapter = `
<span class="in_t" class="">Edit Chapters</span>
        <input type="text" id="chp_chapname" class="_in_aq" placeholder="Chapter Name">
        <span class="in_t" class="">Question Bank</span>
        <div id = "chp_qbank">
        </div>
        <span class="in_t" class="">Topics</span>
        <div id = "chp_qbank">
        </div>`
export let page_chapter = `
<span><span class="in_t" id="chp_chaptername">Topic</span><button class="tst_btn rpl" id="chp_edit">Edit</button></span>
        <div class = "flex_type" style="flex-direction: row;flex-wrap: wrap;align-items:center;justify-content:center;">
            <div id="chpt_topics" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16)">Topics</span>
                <div id="chp_tpc_list" style="overflow-y: scroll;height:60vh;" class="flex_type"></div>
            </div>
            <div id="chpt_qbanks" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16)">Question Banks</span>
                <div id="chp_qbk_list" style="overflow-y: scroll;height:60vh;" class="flex_type"></div>
            </div>
        </div>`

export default {page_chapter,page_edit_chapter,page_list_chapter}