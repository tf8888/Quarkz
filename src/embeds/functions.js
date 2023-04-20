export let page_functions = `
<span class="in_t" class="">Functions</span>
        <div class = "flex_type" style = "flex-direction: row;flex-wrap: wrap;">
            <div id="fc_topics" class = "db_class">
                <span style="font-size: 25px;color:yellow">Chapters/Topics</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/tpc'">Add Topics</div>
            </div>
            <div id="fc_sims" class = "db_class">
                <span style="font-size: 25px;color:yellow">Question Banks/Sims</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/simulation'">Add Simulations</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/qubank'">Add Question Bank</div>
            </div>
            <div id="fc_tests" class = "db_class">
                <span style="font-size: 25px;color:yellow">Tests</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/tests'">Add Test</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/update/tests'">Update Test</div>
            </div>
            <div id="fc_batch" class = "db_class">
                <span style="font-size: 25px;color:yellow">Batches</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/add/batch'">Add New Batch</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/list/batch'">Update Batches</div>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/update/batch'">Update Batches</div>
            </div>
            <div id="fc_misc" class = "db_class">
                <span style="font-size: 25px;color:yellow">Misc</span>
                <div class="dshbox_v2 rpl" onclick="window.location.hash = '#/edit_exams'">Edit Exams</div>
            </div>
        </div>
`
export default {page_functions}