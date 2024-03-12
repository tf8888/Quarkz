export let page_store = `
<span class="in_t">Store</span><button class="tst_btn rpl" id="stre_itm_add" style="display: none;" onclick='window.location.hash = "#/add_storeitem/"'>Add Item</button>
<hr style="color:var(--clr18)" width="100%">
<div id = "store_list" style = "width:100%;height:75vh;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;overflow-y:scroll"></div>
<span style = "font-size:10px">This page contains product affiliate links. We may receive a commission if you make a purchase after clicking on one of these links.</span>
`
export let page_store_edit = `
<div class="flex_type" id="aq_store">
    <input type="text" id="aq_itemname" class="_in_aq" placeholder="Item Name">
    <input type="text" id="aq_itemprice" class="_in_aq" placeholder="Item Price">
    <input type="text" id="aq_itembanner" class="_in_aq" placeholder="Item Banner Link">
    <input type="text" id="aq_itemaffiliate" class="_in_aq" placeholder="Item Affilate Link">
</div>
`

export default { page_store,page_store_edit }