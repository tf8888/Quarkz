export let page_finished_test = `
<span style="font-size: 5vh;color:yellow" id="fti_title">Test Name</span>
<hr style="color:var(--clr18)" width="100%">
<div id="fto_overview" style="display: flex;flex-direction: row;flex-wrap:wrap;justify-content:center;">
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
<hr style="color:var(--clr18)" width="100%">
<div id="fto_overview" style="display: flex;flex-direction: row;flex-wrap:wrap">
    <button class="tst_btn rpl" id="fto_detail"
        onclick='window.location.hash = "#/testreport/" + window.location.hash.split("#/finished/")[1]'>Detailed
        View</button>
</div>
<hr style="color:var(--clr18)" width="100%"><br>
<details>
    <summary><span style="font-size: 4vh;">Overview</span></summary>
    <div class = "summary_div">
    <div>
    <center><span id = "fto_passed" style="font-size:3vh;">You Have Passed The Test</span></center>
    </div>
    <div>
    <span style="font-size:3vh;">This is a quick snapshot of your performance measured in terms of attempts that
            were correct, incorrect, unattempted. The individual subject-Wise analysis will help you gaze your
            performance on a subject level.</span>
    <div id="fto_overview_table" style="display: flex;flex-direction: column;"></div>
    </div><br>
    <div>
        <span style="font-size: 3vh;">Section Wise Scores</span>
        <center><canvas id="fto_table_score"></canvas></center>
    </div><br>
    <div style="display:flex;flex-direction:column;flex-wrap:wrap">
        <span style="font-size: 3vh;">Section Wise Questions</span>
        <center><div id="fto_table_pie"></div></center>
    </div><br>
</details>
<br>
<details>
    <summary><span style="font-size: 4vh;">Time And Accuracy</span></summary>
    <div class = "summary_div">
    <div>
        <span style="font-size:3vh;">Time is the most important resource in any competitive exam. And one major element
            of any test analysis is
            to check the time spent on an individual subject. This section will not only give you insight on the time
            spent
            but also the percentage attempt and accuracy at the subject level. Make sure to maintain a good balance
            between accuracy and time spent on a subject.</span>
        <div id="fto_time_table" style="display: flex;flex-direction: column;"></div>
    </div><br>
    <div style="display:flex;flex-direction:column;flex-wrap:wrap">
        <span style="font-size: 3vh;">Section Wise Time Spent</span>
        <center><canvas id="fto_table_time"></canvas></center>
    </div><br>
    <div style="display:flex;flex-direction:column;flex-wrap:wrap;">
        <span style="font-size: 3vh;">Subject Accuracy vs Attempted(%)</span>
        <center><canvas id="fto_table_accuracy"></canvas></center>
    </div>
    </div>
</details>
<br>
<details>
    <summary><span style="font-size: 4vh;">Leaderboard</span></summary>
    <div class = "summary_div">
    <span style="font-size:3vh;">Seeing how your peers fared during the test, allows you to better prepare and brings a competitive spirit to the tests.</span>
    <center>
        <div id="fto_leaderboard"></div>
    </center>
    </div>
</details>
<br>
<details>
    <summary><span style="font-size: 4vh;">Missed Concepts</span></summary>
    <div class = "summary_div">
    <div>
        <span style="font-size:3vh;">This section will list all the concepts you got wrong in the exam on an individual
            subject level. This information
            becomes relevant for you as you will now need to spend some time brushing up these concepts.</span>
        <div id="fto_missed" style="display:flex;flex-direction:row;flex-wrap:wrap;">

        </div>
    </div>
        <span style="font-size:3vh;">Legend:&nbsp;<span>Unanswered</span>&nbsp;<span style = "color:red">Incorrect</span></span>
    </div>
</details>
</br>
        `
export default {page_finished_test}