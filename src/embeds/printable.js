export let page_printable = `
<span class=" in_t no-print">Export</span>
        <hr color="white" width="100%" class="no-print">
        <span class="no-print"><button class="tst_btn rpl no-print" onclick="print()">Print</button><button
                class="tst_btn rpl no-print" id="shf_btn">Shuffle</button><button class="tst_btn rpl no-print"
                id="tsinf_btn">Update Bank
                Info</button><button class="tst_btn rpl no-print" id="tans_btn">Answers</button><button
                class="tst_btn rpl no-print" id="tansexpl_btn">Explanation And Answers</button><button
                class="tst_btn rpl no-print" id="tremove_btn">Remove
                All</button></span>
        <hr color="white" width="100%">
        <span class="in_t_3" id="qb_title">ERROR</span>
        <hr color="white" width="100%">
        <div id="pe_tst_info" class="flex_type no-print">
            <span>Test<input id="pe_tst_type_1" type="checkbox"></span>
            <span id="">General Instructions<input id="pe_tst_type_2" type="checkbox"></span>
            <textarea type="answer" id="pe_gi_ins" class="_in_aq" placeholder="General Instructions"></textarea>
            <div id="pe_tst_mrk">
                <span>MCQ:<input type="number" id="pe_mcq_pno" class="_in_pq" value="3"><input type="number"
                        id="pe_mcq_nno" class="_in_pq" value="-1"></span>
                <span>MCQ Multiple:<input type="number" id="pe_mcmul_pno" class="_in_pq" value="3"><input type="number"
                        id="pe_mcmul_nno" class="_in_pq" value="-1"></span>
                <span>Numerical:<input type="number" id="pe_num_pno" class="_in_pq" value="4"><input type="number"
                        id="pe_num_nno" class="_in_pq" value="0"></span>
                <span>True Or False:<input type="number" id="pe_taf_pno" class="_in_pq" value="1"><input type="number"
                        id="pe_taf_fno" class="_in_pq" value="0"></span>
                <span>Explain:<input type="number" id="pe_exp_pno" class="_in_pq" value="4"><input type="number"
                        id="pe_exp_nno" class="_in_pq" value="0"></span>
                <span>Matrix<input type="number" id="pe_mat_pno" class="_in_pq" value="12"><input type="number"
                        id="pe_mat_nno" class="_in_pq" value="-4"></span>
            </div>
        </div>
        <div id="eqb_instr"><span style="color: green;">General
                Instructions:&nbsp;&nbsp;</span><span id="equ_gi"></span>
            <hr color="white" width="100%">
        </div>

        <div id="eqb_add" type="1">
        </div>

`
export default {page_printable}