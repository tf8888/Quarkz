export let page_qbnkvid = `
<button id="qbnk_vid_btn" class="tst_btn rpl">Start</button>
        <button id="qbnk_vid_btn_e" class="tst_btn rpl" style="display: none;">Stop</button>
        <span style="font-size: 5vh;color:var(--clr16);font-family: Nunito;" id="tb_q_title">Topic Name</span>
        <hr width="100%" style="color:var(--clr18)">
        <div class="div-qbnk">Quarkz!</div>
        <img alt="Quarkz Logo" src="assets/Quarkz-T.png"
            style="position:absolute;height:100px;width: 100px;top:0;left:0;z-index: 1;">
        <div id="qbnk_vid_q" style="display: flex;flex-direction: column;align-items: center;z-index: 2;">
            <div class="div-qbnk1"><span>Pause The Video If You Need More Time.Each Question Will Be Shown For 10
                    Seconds.</span><span id="qbnk_timer" style="font-size: 80px;color:rgb(0, 255, 255)">0</span></div>
            <span style="width: 60vw;"><span id="tb_q_qno" style="color: coral;"></span>
                <div id="tb_q_qtext" style="width:100%;height:max-content;min-height: 12vh;">Question</div>
            </span>
            <div id="tb_q_ans_hold">
                <input type="answer" id="tb_q_answer" class="_in_aq" placeholder="Answer">
                <div id="tb_q_mcq_con" class="flex_type">
                </div>
                <div id="tb_q_matrix">
                    <table>
                        <tr>
                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>
                        </tr>
                        <tr>
                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>
                        </tr>
                        <tr>
                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>
                        </tr>
                        <tr>
                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div id="qbnk_vid_ans" style="display: flex;flex-direction: column;align-items: center;">
            <span style="font-size: 5vh;color:var(--clr16);">Answer</span>
            <div id="tb_q_hint" style="width:80%;height:max-content;min-height: 12vh;"></div>
            <div id="tb_q_ans" style="height:max-content;min-height: 12vh;"></div>
            <div id="tb_q_expl" style="width:80%;height:max-content;min-height: 12vh;"></div>
        </div>
        <div id="qbnk_vid_title"
            style="display:flex;flex-direction: column;align-items: center;justify-content: center;height:60vh">
            <span style="font-size: 15vh;color:var(--clr16);font-family: Nunito;" id="qb_vid_ti"></span>
        </div>
        <div id="qbnk_vid_end" style="display:flex;flex-direction: column;align-items: center;justify-content: center;">
            <span style="font-size: 5vh;color:var(--clr16)">Thanks For Watching</span>
            <span style="font-size: 3vh;color:var(--clr16)">Subscribe To Quarkz! For More Such Videos</span>

        </div>`
export default {page_qbnkvid}