export let page_jee_main = 
`
    <span style="font-size: 5vh;color:var(--clr16)" id="fm_title">Mains Formula Sheet</span>
    <hr style="color:var(--clr18)" width="100%">
    <div style="overflow-y: scroll;height:50vh;" class="flex_type">
    </div>
    <span style="font-size: 8px;">All PDF's Are Owned by their Respective Owners</span>
`
export let page_downloads = `
<span style="font-size: 5vh;color:var(--clr16)" id="fm_title">Downloads</span>
    <hr style="color:var(--clr18)" width="100%">
    <div style="overflow-y: scroll;height:50vh;" class="flex_type">
      
    </div>
`
export function downloads_render(download_links_list,rendertype){
    var jee_html = ""
    if (rendertype == "formulasheet"){jee_html+=`<span style="font-size: 5vh;color:var(--clr16)" id="fm_title">Mains Formula Sheet</span>`}
    else{jee_html+=`<span style="font-size: 5vh;color:var(--clr16)" id="fm_title">Downloads</span>`}
    jee_html+= `
    <hr style="color:var(--clr18)" width="100%">
    <div style="overflow-y: scroll;height:50vh;" class="flex_type">`
    for (var i = 0;i<download_links_list.length;i++){
        if (download_links_list[i].type2 == rendertype){
            if (download_links_list[i].url == ""){
                jee_html += `<span class="tlinks-2 rpl " onclick = "window.location.hash = '`+download_links_list[i].hashurl+`'"><span class="material-symbols-outlined">`+download_links_list[i].type+`</span>&nbsp;&nbsp;`+download_links_list[i].title+`</span>`
            }else{
                jee_html += `<span class="tlinks-2 rpl " onclick = "window.open('`+download_links_list[i].url+`','_blank')"><span class="material-symbols-outlined">`+download_links_list[i].type+`</span>&nbsp;&nbsp;`+download_links_list[i].title+`</span>`
            }
        }
    }
    jee_html +=` </div>
    <span style="font-size: 8px;">All PDF's Marked As <span style="font-size: 8px;" class="material-symbols-outlined">quiet_time_active</span> Are Owned by their Respective Owners</span>`
    return jee_html
}
// quiet_time,quiet_time_active
export let download_links_list = [
    {hashurl:"/notes/PHYFORMULAS",title:"Physics Formula Sheet",url:"",type:"quiet_time_active",type2:"formulasheet"},
    {hashurl:"/notes/MATHFORMULAS",title:"Maths Formula Sheet",url:"",type:"quiet_time_active",type2:"formulasheet"},
    {hashurl:"/notes/PCHEMNOTES",title:"Physical Chemistry Formula Sheet",url:"",type:"quiet_time_active",type2:"formulasheet"},
    {hashurl:"/notes/OCHEMNOTES",title:"Organic Chemistry Sheet",url:"",type:"quiet_time_active",type2:"formulasheet"},
    {hashurl:"/notes/ICHEMNOTES",title:"Inorganic Chemistry Sheet",url:"",type:"quiet_time_active",type2:"formulasheet"},
    {hashurl:"",title:"Full Chemistry Modules",url:"https://drive.google.com/file/d/1PKwlLjqXESAewAOHFi866uUb72XjooQH/view",type:"quiet_time_active",type2:"downloads"},
    {hashurl:"",title:"Full Maths Modules",url:"https://drive.google.com/file/d/1_TLdj5e8SG8VFvKu-asEy7RAq4_T85YB/view",type:"quiet_time_active",type2:"downloads"},
    {hashurl:"",title:"Full Physics Modules",url:"https://drive.google.com/file/d/10NWV6viuY2eru-y1j9MSXmhbl7bZKyOD/view",type:"quiet_time_active",type2:"downloads"}
]
export default {page_jee_main,page_downloads,download_links_list,downloads_render}