export let page_jee_main = 
`
    <span style="font-size: 5vh;color:yellow" id="fm_title">Mains Formula Sheet</span>
    <hr color="white" width="100%">
    <div style="overflow-y: scroll;height:50vh;" class="flex_type">
    <span class="tlinks rpl" onclick = "window.location.hash = '/notes/PHYFORMULAS'">Physics Formula Sheet</span>
    <span class="tlinks rpl" onclick = "window.location.hash = '/notes/MATHFORMULAS'">Maths Formula Sheet</span>
    <span class="tlinks rpl" onclick = "window.location.hash = '/notes/PCHEMNOTES'">Physical Chemistry Formula Sheet</span>
    <span class="tlinks rpl" onclick = "window.location.hash = '/notes/OCHEMNOTES'">Organic Chemistry Formula Sheet</span>
    <span class="tlinks rpl" onclick = "window.location.hash = '/notes/ICHEMNOTES'">Inorganic Chemistry Formula Sheet</span>
    </div>
    <span style="font-size: 8px;">All PDF's Are Owned by their Respective Owners</span>
`
export let page_downloads = `
<span style="font-size: 5vh;color:yellow" id="fm_title">Downloads</span>
    <hr color="white" width="100%">
    <div style="overflow-y: scroll;height:50vh;" class="flex_type">
      
    </div>
`
export default {page_jee_main,page_downloads}