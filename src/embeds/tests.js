export let page_test_list = `
<span class="in_t">Tests</span>
        <hr style="color:var(--clr18)" width="100%">
        <div><button class="tst_btn rpl" id="ti_act">Active Tests</button><button class="tst_btn rpl"
                id="ti_fin">Finished Tests</button><button class="tst_btn rpl" id="ti_upc">Upcoming Tests</button></div>
        <div id="testlinks">
        </div>`

export let page_test_v1 = `
<div style="border: grey 2px dashed;flex-direction: row;margin:10px;min-width:820px;" class="flex_type">
            <div style="display: flex;flex-direction: column;width: 80vw;height:80vh;margin:10px;min-width: 500px;">
                <div id="tt_extrabx" style="display: flex;flex-direction:row;height: 40px;margin:10px;">
                    <span id="tt_timeleft">00:00:00</span>
                    <span id="tt_marksaward"></span>
                    <span id="tt_timespent" style="margin-left:5px;"></span>
                    <span id="tt_testname" style="width: 100%;text-align: right;margin-left: 5px;">TEST
                        NAME</span>
                    <button id="tt_rep" class="tst_btn rpl">Report</button>
                    <button id="tt_sub" class="tst_btn rpl">Submit</button>
                </div>
                <div id="tt_question">
                    <div style="font-size: larger;">Question <span id="tt_qno">12</span></div>
                    <hr>
                    <div id="tt_qtitle">Who Is The President Of India?</div>
                    <hr>
                </div>
                <div id="tt_footer" style="display:flex;">
                    <button class="tst_btn rpl" id="tt_save">Save</button>
                    <button class="tst_btn rpl" id="tt_clear">Clear</button>
                    <button class="tst_btn rpl" id="tt_review">Mark For Review</button>
                    <button class="tst_btn rpl" id="tt_ansreview">Save And Mark For Review</button>
                </div>
            </div>
            <div>
                <div id="tt_chgbx">
                    <button class="tst_btn rpl" id="tt_qp">Q.Paper</button>
                    <button class="tst_btn rpl" id="tt_instr">Instructions</button>
                </div>
                <div id="tt_infobx">
                    <div style="margin:9px"><span class="tts_notvisit">12</span>Not Visited</div>
                    <div style="margin:9px"><span class="tts_notanswer">21</span>Not Answered</div>
                    <div style="margin:9px"><span class="tts_answered">45</span>Answered</div>
                    <div style="margin:9px"><span class="tts_review">30</span>Review</div>
                    <div style="margin:9px"><span class="tts_ansreview">37</span>Review And Answered</div>
                </div>
                <div id="tt_qnobx">
                    <div>
                        <div id="tw_Physics"><span>Physics</span>
                            <div id="tw_Physics_c"></div>
                        </div>
                        <div id="tw_Chemistry"><span>Chemistry</span>
                            <div id="tw_Chemistry_c"></div>
                        </div>
                        <div id="tw_Math"><span>Math</span>
                            <div id="tw_Math_c"></div>
                        </div>
                        <div id="tw_Computer"><span>Computer</span>
                            <div id="tw_Computer_c"></div>
                        </div>
                        <div id="tw_Biology"><span>Biology</span>
                            <div id="tw_Biology_c"></div>
                        </div>
                        <div id="tw_Statistics"><span>Statistics</span>
                            <div id="tw_Statistics_c"></div>
                        </div>
                        <div id="tw_Unfiled"><span>Unfiled</span>
                            <div id="tw_Unfiled_c"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
export let page_test_end = `
<span class="in_t" id="te_title">The Test Has Ended</span>
        <span style="font-size:3vh;" id ="te_msg">Your Results Will Be Released After<span id="te_endtime"></span></span>
        <a class="tst_btn rpl" href="/#/dashboard">Go To Dashboard</a>
        <hr style="color:var(--clr18)" width="100%">`

export default {page_test_end,page_test_list,page_test_v1}