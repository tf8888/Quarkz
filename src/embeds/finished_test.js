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
            <div class="fto_box">
                <div class="fto_box_title">ACCURACY</div>
                <div class="fto_box_content" id="fto_accuracy">89%</div>
            </div>
            <div class="fto_box">
                <div class="fto_box_title">TIME TAKEN</div>
                <div class="fto_box_content" id="fto_timetaken">180M</div>
            </div>
            <div class="fto_box">
                <div class="fto_box_title">QS ATTEMPTED</div>
                <div class="fto_box_content" id="fto_qsattempted">10/23</div>
            </div>
        </div>
        <hr color="white" width="100%">
        <div id="fto_overview" style="display: flex;flex-direction: row;flex-wrap:wrap">
            <button class="tst_btn rpl" id="fto_detail"
                onclick='window.location.hash = "#/testreport/" + window.location.hash.split("#/finished/")[1]'>Detailed
                View</button>
        </div>
        <br><hr color="white" width="100%"><br>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;width:90%;">
            <span style="font-size: 4vh;">Overview</span>
            <span style = "font-size:2vh;">This is a quick snapshot of your performance measured in terms of attempts that were correct, incorrect,
            unattempted. The individual subject-Wise analysis will help you gaze your performance on a subject level.</span>
            <div id="fto_overview_table" style="display: flex;flex-direction: column;"></div>
        </div>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;">
                <span style="font-size: 3vh;">Section Wise Scores</span>
                <div id="fto_percents" style="display: flex;flex-direction: column;"></div>
                <div>Legend: <span style="color:green">Correct</span>&nbsp;<span
                        style="color:red">Incorrect</span>&nbsp;<span style="color:orange">Unattempted</span></div>
        </div>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;width:90%;">
        <br><hr color="white" width="100%"><br>
        <span style="font-size: 4vh;">Time And Accuracy</span>
        <span style = "font-size:2vh;">Time is the most important resource in any competitive exam. And one major element of any test analysis is
        to check the time spent on an individual subject. This section will not only give you insight on the time spent
        but also the percentage attempt and accuracy at the subject level. Make sure to maintain a good balance
        between accuracy and time spent on a subject.</span>
        <div id="fto_time_table" style="display: flex;flex-direction: column;"></div>
        </div>
        <div><span style="font-size: 3vh;">Section Wise Time Spent</span>
            <div id="fto_time" style="display: flex;flex-direction: column;"></div>
            <div>Legend: <span style="color:green">Correct</span>&nbsp;<span
                    style="color:red">Incorrect</span>&nbsp;<span style="color:orange">Unattempted</span></div>
        </div>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;">
                    <span style="font-size: 3vh;">Time Spent Per Question</span>
                    <div id="fto_draw" style="display: flex;flex-direction: column;"></div>
        </div>
        <br><hr color="white" width="100%"><br>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;width:90%">
        <span style="font-size: 4vh;">Leaderboard</span>
        <span style = "font-size:2vh;">Seeing how your peers fared during the test, allows you to better prepare and brings a competitive spirit to the tests.</span>
        <center><div id="fto_leaderboard"></div></center>
        </div>
        </div>
        <br><hr color="white" width="100%"><br>
        <div style="display:flex;flex-direction:column;flex-wrap:wrap;width:90%;">
        <span style="font-size: 4vh;">Missed Concepts</span>
        <span style = "font-size:2vh;">This section will list all the concepts you got wrong in the exam on an individual subject level. This information
        becomes relevant for you as you will now need to spend some time brushing up these concepts.</span>
        <div id  = "fto_missed" style="display:flex;flex-direction:row;flex-wrap:wrap;">

        </div>
        </div>
        `
export default {page_finished_test}