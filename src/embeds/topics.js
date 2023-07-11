export let page_edit_topic = `
<span class="in_t" class="" id="fu_topic_title">Add/Edit Topic</span>
        <div id="aq_basic" style="flex-direction: column;">
            <input type="text" id="aq_tpcname" class="_in_aq" placeholder="Tests/Topic/Question Bank Name">
            <select name="type" id="aq_tpclevel" class="_in_aq col-red">
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
                <option value="foundation">Foundation</option>
            </select>
            <input type="text" id="aq_tpc_chapterid" class="_in_aq" placeholder="Chapter ID">
            <select name="type" id="aq_tpc_subj" class="_in_aq col-red">
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="maths">Maths</option>
                <option value="biology">Biology</option>
                <option value="computer">Computer</option>
                <option value="statistics">Statistics</option>
                <option value="unfiled">Unfiled</option>
            </select>
        </div>
        <div id="aq_test_extra" style="flex-direction: column;width:72vw">
            <input type="text" id="aq_tst_batches" class="_in_aq" placeholder="Batch ID">
            <input type="datetime-local" id="aq_tst_stron" class="_in_aq">
            <input type="datetime-local" id="aq_tst_endon" class="_in_aq">
            <input type="text" id="aq_tst_syllabi" class="_in_aq" placeholder="Syllabus">
            <input type="number" id="aq_tst_timealotted" class="_in_aq" placeholder="Time Alloted">
            <div><input type="checkbox" id="aq_randomize" name="aq_randomise" value="randomize">
            <label for="aq_randomize">Randomise Questions</label></div>
            <div class="summernote" id="aq_add_test_instr">Additional Test Instructions</div>
        </div>
        <div id="lqadd" style="display: flex;flex-direction: row;margin:10px;height: 50vh;">
            <div id="question_list"
                style="border: 2px lime solid;width: 15vw;height:50vh;display: flex;flex-direction: column;align-items: center;text-align: center;font-size: 3vh;overflow-y: scroll;"
                class="title-notes"></span>
            </div>
            <div
                style="border: 2px lime solid;width:75vw;display: flex;flex-direction: column;overflow-y: scroll;height:50vh;">
                <select name="type" id="aq_mode" class="_in_aq col-red">
                    <option value="question">Question</option>
                    <option value="lesson">Lesson</option>
                    <option value="exam">Exam</option>
                </select>
                <div class="flex_type" id="aq_exams">
                    <input type="text" id="aq_examname" class="_in_aq" placeholder="Exam Names">
                    <input type="text" id="aq_examdate" class="_in_aq" placeholder="Exam Dates">
                    <input type="text" id="aq_examinfo" class="_in_aq" placeholder="Exam Info Link">
                    <input type="text" id="aq_examsyllabus" class="_in_aq" placeholder="Syllabus Link">
                </div>
                <div class="flex_type" id="aq_all" style="align-items: unset;" id="aq_uiad">
                    <input type="text" id="aq_id" class="_in_aq" placeholder="ID" disabled>
                    <div class="summernote" id="aq_qtext">Question</div>
                    <input type="text" id="aq_answer" class="_in_aq" placeholder="Answer">
                    <input type="url" id="aq_yurl" class="_in_aq" placeholder="Youtube ID">
                    <div class="summernote" id="aq_expl">Explanation</div>
                    <textarea type="answer" id="aq_hint" class="_in_aq" style="resize: none;overflow-y: scroll;"
                        placeholder="Hint"></textarea>
                    <input type="number" id="aq_posmrks" class="_in_aq" placeholder="Marks For Correct">
                    <input type="number" id="aq_negmrks" class="_in_aq" placeholder="Marks For Incorrect">
                    <input type="url" id="aq_q_topic" class="_in_aq" placeholder="Topic">
                    <select name="type" id="aq_section" class="_in_aq col-red">
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Math">Math</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer">Computer</option>
                        <option value="Statistics">Statistics</option>
                        <option value="Unfiled">Unfiled</option>
                    </select>
                </div>
                <div id="aq_ans_hold">
                    <select name="type" id="aq_type" class="_in_aq col-red">
                        <option value="mcq">MCQ</option>
                        <option value="mcq_multiple">MCQ Multiple</option>
                        <option value="mcq_multiple_partial">MCQ Multiple(Partial)</option>
                        <option value="matrix">Matrix</option>
                        <option value="numerical">Numerical</option>
                        <option value="explain">Explain</option>
                        <option value="fill">Fill In The Blanks</option>
                    </select>
                    <div id="aq_mcq_con" class="flex_type">
                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>
                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>
                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>
                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>
                    </div>
                    <div id="aq_matrix">
                        <table>
                            <tr>
                                <td><input class="aq_i1"><input class="aq_i2"></td>
                            </tr>
                            <tr>
                                <td><input class="aq_i1"><input class="aq_i2"></td>
                            </tr>
                            <tr>
                                <td><input class="aq_i1"><input class="aq_i2"></td>
                            </tr>
                            <tr>
                                <td><input class="aq_i1"><input class="aq_i2"></td>
                            </tr>
                        </table>
                    </div>
                    <button class="tst_btn rpl" id="aq_ao">Add Option</button>
                    <button class="tst_btn rpl" id="aq_ro">Remove Option</button>
                </div>
                <button class="tst_btn rpl" id="aq_re">Remove Entry</button>
            </div>
        </div>
        <button class="tst_btn rpl" id="aq_tpc_save">Save/Update Topic</button>
        <button class="tst_btn rpl" id="aq_qbc_save">Save/Update QBank</button>
        <button class="tst_btn rpl" id="aq_tst_save">Save/Update Test</button>
        <button class="tst_btn rpl" id="aq_exam_save">Save/Update Exams</button>
        <button class="tst_btn rpl" id="aq_export">Export</button>

`
export let page_topic = `
<span style="font-size: 3vh;color:lime" id="tp_title">Topic Name</span>
<span style="font-size: 4vh;color:var(--clr16)" id="tp_lsno">Lesson Name</span>
        <hr width="100%" style="color:var(--clr18)">
        <div class="flex_type" style="flex-direction: row;flex-wrap: wrap;">
            <button class="tst_btn rpl" id="tp_nxt">Next</button>
            <button class="tst_btn rpl" id="tp_prv">Previous</button>
            <button class="tst_btn rpl" id="tp_pnt" style="display: none;">Export</button>
            <button class="tst_btn rpl" id="tp_edt" style="display: none;">Edit</button>
            <button class="tst_btn rpl" id="tp_rep">Report</button>
        </div>
        <hr width="100%" style="color:var(--clr18)">
        <div id="tp_lesson" style="width: 80%;">
            <div id="tp_full_vid">
                <!-- <iframe id = "video" style = "width:80%; height: 450px; border-style: solid; ;border-width: 10px;" hidden = "True"  allow = "autoplay"></iframe> -->
                <div style="pointer-events: none;width:100%;">
                    <div>
                        <div id="player" style="width: 100%;"></div>
                    </div>
                    <div id="yt_progressBar" style="width:100%;">
                        <div id="yt_progressBar_in"></div>
                    </div>
                </div>
                <div id="toolbar"
                    style="border:3px solid grey; border-radius: 10px 10px 10px 10px;padding-left: 5px;padding-right: 5px;">
                    <span class="material-icons" id="tp_bw_btn" onclick="player.seekTo(player.getCurrentTime()-10)"
                        title="-10 Seconds">fast_rewind</span>
                    <span class="material-icons" id="tp_pl_btn" title="Play"
                        onclick="player.playVideo()">play_arrow</span>
                    <span class="material-icons" id="tb_pa_btn" title="Pause" onclick="player.pauseVideo()">pause</span>
                    <span class="material-icons" onclick="player.stopVideo()" id="tb_st_btn" title="Stop">stop</span>
                    <span class="material-icons" id="tb_fw_btn" onclick="player.seekTo(player.getCurrentTime()+10)"
                        title="+10 Seconds">fast_forward</span>
                    <span id="mute" class="material-icons" id="tb_um_btn" onclick="volumetype()"
                        title="Mute/Unmute">volume_up</span>
                    <span id="mute" class="material-icons" id="tb_um_btn" title="Mute/Unmute"
                        onclick="fullscreen()">fit_screen</span>
                    <span class="material-symbols-outlined" id="tb_wy_btn" onclick="window.open(player.getVideoUrl())"
                        title="Watch On Youtube">youtube_activity</span>
                    <input type="range" min="0" max="100" value="50" id="tb_vl_br" style="background-color: grey;"
                        onchange="volumechange()" oninput="volumechange()">
                </div>
            </div>
            <div>
                <div id="tp_expl" style="height:max-content;min-height: 12vh;text-align: left;">Explanation</div>
                <img id="tp_lsimg">
            </div>
        </div>

        <div id="tp_question" style="width: 80%;align-items: center;display: flex;flex-direction: column;">
            <div id="tp_qtext" style="width:80%;height:max-content;min-height: 12vh;">Question</div>
            <div id="tp_ans_hold">
                <input type="answer" id="tp_answer" class="_in_aq" placeholder="Answer">
                <div id="tp_mcq_con" class="flex_type">
                </div>
                <div id="tp_matrix">
                    <table>
                        <tr>
                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>
                        </tr>
                        <tr>
                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>
                        </tr>
                        <tr>
                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>
                        </tr>
                        <tr>
                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>
                        </tr>
                    </table>
                </div>
            </div>

            <div>
                <button class="tst_btn rpl" id="tp_sbm">Submit</button>
                <div id="tp_status"></div>
            </div>
            <div id="tp_hint" style="display: none;">Hint</div>
            <div id="tp_e_answer" style="display: none;">Answer</div>
            <div id="tp_a_expl" style="display: none;">Explanation</div>
        </div>`
export default {page_edit_topic,page_topic}