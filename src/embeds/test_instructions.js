export let page_test_instructions = `
<span class="in_t" id = "ti_title">Test Instructions</span>
        <hr color="white" width="100%" id = "ti_hr">
        <div id = "ti_i" style="width:80vw;overflow-y: scroll;border:yellow 3px solid;display: flex;flex-direction: column;">
            <span style="font-size:5vh;text-align: center;">Please Read The Instructions And Terms Carefully</span>
            <span style="font-size:18px;color:var(--yellow)">Test Information:</span>
            <ul style="font-size: 14px;color:var(--white);">
                <li> Test Name:&nbsp;<span id = "i_name"></span></li>
                <li> Starts From:&nbsp;<span id = "i_start"></span> </li>
                <li> Ends At:&nbsp;<span id = "i_end"></span> </li>
                <li> Time Allotted:&nbsp;<span id = "i_time"></span> </li>
                <li> Syllabus:&nbsp;<span id = "i_syllabus"></span> </li>
                <li> Total Marks:&nbsp;<span id = "i_total"></span> </li>
                <li> No of Questions:&nbsp;<span id = "i_qno"></span> </li>
            </ul>
            <span style="font-size:18px;color:var(--yellow)">General Instructions:</span>
            <ol style="font-size: 14px;">
                <li>The Exam Must Be Completed In 1 Sitting. You Will Be Able To Open This Test Window Only Once. </li>
                <li>Read Every Question Carefully And Select Your Answer and Try To Answer As Many Questions As Possible
                    In The Exam.</li>
                <li>The Questions Palette displayed on the right side of screen will show the status of each question
                    using one of the following symbols:</li>
                <div>
                    <div style="margin:17px"><span class="tts_notvisit">12</span>You have not visited the question yet.
                    </div>
                    <div style="margin:17px"><span class="tts_notanswer">21</span>You have not answered the question.
                    </div>
                    <div style="margin:17px"><span class="tts_answered">45</span>You have answered the question.</div>
                    <div style="margin:17px"><span class="tts_review">30</span>You have NOT answered the question, but
                        have marked the question for review.</div>
                    <div style="margin:17px"><span class="tts_ansreview">37</span>The question(s) "Answered and Marked
                        for Review" will be considered for evalution.</div>
                </div>
                <li>To expand the Image, you can Hover on the Image.(Only On Desktop/Laptop Devices)</li>
                <li>When the timer reaches zero, the examination will end by itself. You will not be required to end or
                    submit your examination.</li>
                <li>Make Sure To Have A Good Internet Connection. Loss in Internet Connectivity may prevent submission
                    of answers. </li>
                <li>DO NOT TRY TO Minimise The Full Screen Mode Of The Exam. You Will Recieive 1 Warning For Doing So
                    After Which Your Test Will End</li>
            </ol>
            <hr style = "width:95%">
            <span style="font-size:18px;color:var(--yellow)">Navigating to a Question:</span>
            <ol style="font-size:14px;">
                <li>To view/answer a question, do the following: Click on the question number in the Question Palette at
                    the right of your screen to go to that numbered question directly. Note that using this option does
                    NOT save your answer to the current question.</li>
            </ol>
            <hr style = "width:95%">
            <span style="font-size:18px;color:var(--yellow)">Answering a Question:</span>
            <ol style="font-size:14px;">
                Procedure for answering a multiple choice type question:
                <li>To select you answer, click on the button of one of the options.</li>
                <li>To deselect your chosen answer, click on the button of the chosen option again or click on the Clear
                    Response button</li>
                <li>To change your chosen answer, click on the button of another option</li>
                <li>To save your answer, you MUST click on the Save button.</li>
                <li>To mark the question for review, click on the Mark for Review button.</li>
                <li>To change your answer to a question that has already been answered, first select that question for
                    answering and then follow the procedure for answering that type of question.</li>
            </ol>
            <hr style = "width:95%">
            <span style="font-size:18px;color:var(--yellow)">Navigating through sections:</span>
            <ol style="font-size:14px;">
                <li>All Questions are Visible in the Question Pallete along under the respective sections/subjects</li>
            </ol>
            <hr style = "width:95%">
            <span style="font-size:18px;color:var(--yellow)">Test Specific Instructions:</span>
            <div id = "tsi" style="font-size:14px;">
            </div>
            <hr style = "width:95%">
            <span style="font-size:18px;color:var(--yellow)">Terms And Conditions:</span>
            <span style="font-size:14px;">By Checking on "I Agree" you Agree to All Terms And Conditions:</span>
            <ol style="font-size:14px;">
                <li>I have read and understood all the instructions. </li>
                <li>I agree that all computer hardware allotted to me are in proper working condition. </li>
                <li>I declare that i am not in possession of / not wearing / not carrying any prohibited gadget like
                    mobile phone,bluetooth devices etc. /any prohibited material with me into the Examination Hall.</li>
                <li>I also agree that I will not tamper with any software/technologies/devices alloted to me while
                    attempting
                    this test.
                </li>
                <li>I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this
                    Test and/or to disciplinary action, which may include ban from future Test / Examinations</li>
            </ol>
            <div style = "font-size:25px;color:lime;"><input type="checkbox" id = "agree_in" name = "agree_in"><label for="agree_in">I Agree</label></div>
            <span style="font-size:5vh;text-align: center;">👍 All The Best! 👍</span>
            <button class="tst_btn rpl" id="tin_start" 
                onclick='window.location.hash = "#/attempt/" + window.location.hash.split("#/instructions/")[1]' disabled>Start</button>
        </div>
`
export default {page_test_instructions} 