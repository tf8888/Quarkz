export let page_finished_test = `
<span style="font-size: 5vh;color:yellow" id="fti_title">Test Name</span>
        <hr color="white" width="100%">
        <div id="fto_overview" style="display: flex;flex-direction: row;flex-wrap:wrap">
            <div class="fto_box">
                <div class="fto_box_title">TOTAL MARKS</div>
                <div class="fto_box_content" id="fto_total">100/100</div>
            </div>
            <div class="fto_box">
                <div class="fto_box_title">CORRECT</div>
                <div class="fto_box_content"><span id="fto_correct">45</span><span class="fto_small">marks</span></div>
            </div>
            <div class="fto_box">
                <div class="fto_box_title">INCORRECT</div>
                <div class="fto_box_content"><span id="fto_incorrect">45</span><span class="fto_small">marks</span>
                </div>
            </div>
            <div class="fto_box">
                <div class="fto_box_title">UNANSWERED</div>
                <div class="fto_box_content"><span id="fto_unanswered">45</span><span class="fto_small">marks</span>
                </div>
            </div>
            <div class="fto_box">
                <div class="fto_box_title">RANK</div>
                <div class="fto_box_content" id="fto_rank">5</div>
            </div>
        </div>
        <hr color="white" width="100%">
        <div id="fto_overview" style="display: flex;flex-direction: row;flex-wrap:wrap">
            <button class="tst_btn rpl" id="fto_detail"
                onclick='window.location.hash = "#/testreport/" + window.location.hash.split("#/finished/")[1]'>Detailed
                View</button>
        </div>
        <div style="display:flex;flex-direction:row;flex-wrap:wrap;">
            <div style="display:flex;flex-direction:column;flex-wrap:wrap;">
                <span style="font-size: 3vh;">Section Wise Scores</span>
                <div id="fto_percents" style="display: flex;flex-direction: column;"></div>
                <div>Legend: <span style="color:green">Correct</span>&nbsp;<span
                        style="color:red">Incorrect</span>&nbsp;<span style="color:orange">Unattempted</span></div>
            </div>
            <div style="margin-left:20px;display:flex;flex-direction:column;">
                <span style="font-size: 3vh;">Leaderboard</span>
                <div id="fto_leaderboard"></div>
            </div>
        </div>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;">
            <span style="font-size: 3vh;">Section Wise Time Spent</span>
            <div id="fto_time" style="display: flex;flex-direction: column;"></div>
            <div>Legend: <span style="color:green">Correct</span>&nbsp;<span
                    style="color:red">Incorrect</span>&nbsp;<span style="color:orange">Unattempted</span></div>
        </div>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;">
            <span style="font-size: 3vh;">Time Spent Per Question</span>
            <div id="fto_draw" style="display: flex;flex-direction: column;"></div>
        </div>`
export default {page_finished_test}