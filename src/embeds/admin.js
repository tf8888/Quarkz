export let page_batch_list = `
<span class="in_t">Batches</span>
        <hr style = "color:var(--clr18)" width="100%">
        <div id="batchlinks">
        </div>`

export let page_edit_batch = `
<span class="in_t" class="" id="fu_topic_title">Add/Edit Batch</span>
<center>
<div id="aq_basic" style="flex-direction: column;">    
    <input type="text" id="aq_batname" class="_in_aq" placeholder="Batch Name">
    <input type="number" id="aq_class" class="_in_aq" placeholder="Class">
    <input type="datetime-local" id="aq_tst_delon" class="_in_aq">
    <input type="text" id="aq_timetable" class="_in_aq" placeholder="Timetable ID">
    <select name="type" id="aq_level" class="_in_aq col-red">
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
                <option value="foundation">Foundation</option>
    </select>
</div>
</center>
    <button class="tst_btn rpl" id="aq_batch_save">Save/Update Batch</button>
`
export default {page_batch_list,page_edit_batch}