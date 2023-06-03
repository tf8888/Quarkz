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
        <div id="pt_ins" type="1"></div>
        <div id="eqb_add" type="1">
        </div>

`
export default {page_printable}