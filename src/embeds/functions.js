export let page_functions = `
<span class="in_t" class="">Functions</span>
        <div class = "flex_type" style = "flex-direction: row;flex-wrap: wrap;justify-content:center;">
        <div id="fc_chapters" class = "db_class">
            <span style="font-size: 25px;color:var(--clr16);">Chapters</span>
            <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/chapter'">Add Chapter</div>
            <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/list/chapter'">List Chapter</div>
        </div>
        <div id="fc_topics_qbanks" class = "db_class">
            <span style="font-size: 25px;color:var(--clr16);">Topics/Question Banks</span>
            <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/qubank'">Add Question Bank</div>
        </div>
            <div id="fc_sims" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Question Banks/Sims</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/simulation'">Add Simulations</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/qubank'">Add Question Bank</div>
            </div>
            <div id="fc_tests" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Tests</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/tests'">Add Test</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/list/tests'">List Tests</div>
            </div>
            <div id="fc_batch" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Batches</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/batch'">Add New Batch</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/list/batch'">List Batches</div>
            </div>
            <div id="fc_misc" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16);">Misc</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/edit_exams'">Edit Exams</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/site-analytics'">Site Analytics</div>
            </div>
        </div>
`
export default {page_functions}