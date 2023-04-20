export let page_dashboard = `
<div id="sidebar">
            <div id="options_tab"
                style="display: flex;flex-direction: row;align-items:center;height:50px;justify-content: space-evenly;width: 25vw;max-width: 250px;">
                <span class="material-symbols-outlined rpl" onclick="window.location = '#/settings'">settings</span>
                <span class="material-symbols-outlined rpl" id="abt_btn">info</span>
                <span class="material-symbols-outlined rpl" onclick="window.location = '#/update'">notifications</span>
                <span class="material-symbols-outlined rpl" id="prf_btn">account_circle</span>
                <span class="material-symbols-outlined rpl" id="lgt_btn">logout</span>
            </div>
            <hr style="width: 100%;">
            <div id="profile_tab"
                style="display: flex;flex-direction: column;align-items: center;height:170px;max-width: 250px;">
                <div id="prf_tab_img" style="width: 100px;height:100px;object-fit: cover;margin:5px;"></div>
                <span style="color:rgb(0, 255, 221)" id="dshd_name">NAME</span>
                <span style="color:rgb(104, 104, 92);font-size: small;" id="dshd_uname">@username</span>
                <span style="color:rgb(251, 255, 0)" id="dshd_batch">BATCH</span>
            </div>
            <hr style="width: 100%;">
            <div class="flex_type"
                style="flex-direction: column;align-items: center;overflow-y: scroll;width: 30vw;height:250px;max-width: 250px;">
                <div class="dshbox_v2 " id="tmt_btn">Time Table</div>
                <div class="dshbox_v2" id="chp_btn">Chapters</div>
                <div class="dshbox_v2" id="tstinf_btn">Test Infos</div>
                <div class="dshbox_v2" id="usn_btn" onclick="window.location.hash = '/usernotes/'">Your Notes</div>
                <div class="dshbox_v2" id="tpc_btn" style="display: none;">Topics</div>
                <div class="dshbox_v2" id="lvq_btn" style="display:none">Live Quiz</div>
                <div class="dshbox_v2" id="frm_btn">Forum</div>
                <div class="dshbox_v2" id="qba_btn" style="display: none;">Question Bank</div>
                <div class="dshbox_v2" id="sim_btn">Simulations</div>
                <div class="dshbox_v2" id="cyb_btn">Cyberhunts</div>
                <div id="adminonly" style="display:none;flex-direction:column;">
                    <div class="dshbox_v2" id="adi_btn">Admin Functions</div>
                    <div class="dshbox_v2" id="usc_btn">Users</div>
                </div>
            </div>
            <hr style="width: 100%;">
            <span style="font-size: small;">© 2021-23 Quarkz!</span>
        </div>
        <div
            style="display: flex;flex-direction: row;flex-wrap: wrap;margin-left: 10px;align-items: flex-start;height:100%;margin-top: 15px;justify-content: space-evenly;overflow-y: scroll;">
            <div id="db_exam_info" class = "db_class" style="max-height: 30vh;">
                <span style="font-size: 25px;color:yellow">Exam Info</span>
                <div id="db_exam_list"></div>
            </div>
            <div id="db_social_media" class = "db_class">
                <span style="font-size: 25px;color:yellow">We're on Social Media</span>
                <span style="font-size: 14px;color:grey;margin-left: 10px;">Follow us, & share with your friends. It motivates us to keep
                    working hard for you to bring new features. </span>
                <img style="width:50px;" alt="Youtube Logo" class="rpl"
                    onclick="window.open('https://www.youtube.com/@quarkz./', '_blank');"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABaCAMAAABHRa6wAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACcFBMVEUAAAD/Ly//BQX/AAD/ExP/MDD/LS3/LCz/PDz/Z2f/X1//EhL/CAj/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/CAj/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/R0f/Q0P/Wlr/QED/Vlb/PT3/UlL/PDz/UFD/Ojr/Tk7/OTn/TEz/ODj/S0v/Nzf/Skr/Nzf/SUn/Njb/SEj/Njb/SEj/Njb/R0f/NTX/R0f/NTX/R0f/NTX/Rkb/NTX/NTX/AAD/AAD/AAD/CAj/Hh7/HBz/HBz/Gxv/Gxv/Ghr/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/HR3/AAD/AQH/BQX/wcH/EBD/////jY3/X1//7+//MzP/x8f/DQ3/mZn/Zmb/9vb/Ojr/0ND/EhL/oqL/dXX/+vr/QkL/1dX/GRn/qKj/fHz/SUn/3Nz/Hh7/sbH/paX/S0s8CEr+AAAAsHRSTlMAAAAAAAAAAAAAAAAABhMhKzdCUVlkbnqHjpidpqi3us7C1tnP3uLl7uzn18W2saV8ZVtQRjYBHDxaq8HT5vP98uivXkAiBidyrN3ksnkvCpenGaG5VfWCqhXb+kNxs8bp9ESQjLjN8OP5AQ4JIBYxJkE4VUhlVnJlgHSOgJiKoZOpnrKftKu9r8LA9/bYAQ4bJC88R1BYYnB6goqQlZykp7WzvL69xcrJzNrZxqmjGt/aNR4AAAABYktHRLUzDlpLAAAAB3RJTUUH5wEdCycyRsErbAAAAv5JREFUaN7dmudXE1EQxR8bu0KiKCSgggFi1KhRUexKVEQFxV6xYa/Yu2LBrkjvKE0CtmcZe+/df8nNCgfhgLi7z9xznE/58ub+srtvd97MZewP4SNJBl8/o6lzF/+u3QICzZag4O49eoaE9rKGhUfYbLbe9j5y2PvKPyPC+1kdoSH9BwwMDrKYnQGDBg+JHGoy+vkaJMmHqQtpWNTwEYGWkaNGjxk7juuP8dFWh8vinDBxUoyhRe3JsVOmCtBsNqbFxU9vnmJGwr/Uro+Zs5r+97O9I++JOU1cBZP35D0R2Vh/rnf1OXc21Pf3tj7n8b/rG72v3+AuGOYhAHj9kzgfos8X1Om3wuhzvrAWIBYFkFALsAgFsFhS9GNQ+pwbFYAlOIBEBcCMA1iqACzDASz31CqtV+AAlHeRAajPPZVBFBJgJXYT/NoGiUiAJBlgFRJgtQzgQgJYZYA1ahfdFgiwtg1ru07tojt374kjaMfar1e9iOi+MIANrIP6RSTHA0EAG9kmbQD08JEQgM1si0YAosdPBABsZcmaAYie6gfYxrbrACB6phdgB9upC4Cev9AHsIvt1gdA9PKVHoA9bK9eAKLXOgD2sf36AYjeaAY4wA6KAKC37zQCHGKHhQAQvf+gCeAISxEEQPRRC8BRdkwYANEn9bmOsxMCAYg+q82Vyk4KBaAvX9XlOsVOiwUg+qYq1xnxAETfVeQ6+x8CqL0F8IdQ7Db8oTZXKv5FlCIMQOOrGP4xgn+O4QUJvCSDF6Xwshx+MEnWASDkaAY/nMKP5/AGBbxFA29Swdt0+EYlvFULb1bD2/XwgQV8ZAMfWsHHdvjBJXx0Cx9ew8f3eAMD3MIBN7HgbTxwIxPeyoU3s+HtfHhDI97SqVwFrKm1jsJj63VaXI6w6HMiRM/bLzjikv7O1tsofCSp48W0S+kZmVnZObl5+QWFRcUll6+UlpVXVF6tcrura67JUVPtdlddr6woLyu9cbOkuKiwID8vNyc7KzMj/VZap5aMzT8BRpXwJFof0ooAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDEtMjlUMTE6Mzk6NTArMDA6MDCGz66vAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAxLTI5VDExOjM5OjUwKzAwOjAw95IWEwAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5MDwVcVIAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTI40I0R3QAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAARdEVYdFRodW1iOjpTaXplADE1NDVC02RgawAAABZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vUE5HOqYqZyIAAAAASUVORK5CYII=">
            </div>
            <div id="db_study_resources" class = "db_class">
                <span style="font-size: 25px;color:yellow">Additional Study Resources</span>
                <div class="tlinks_min rpl" onclick="window.location.hash = '/mainsformulas'"><span
                        style="font-size: 16px;">JEE Mains Formula Sheets</span></div>
                <div class="tlinks_min rpl" onclick="window.location.hash = '/downloads'"><span
                        style="font-size: 16px;">FREE PDF Downloads</span></div>
            </div>
        </div>`

export let page_bug_report = `
<iframe id="bgrep_frame"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeo2JZDaBApBiTeXmAnkVX60hSuJGHJkd9jsF9ePg0iM9ufjA/viewform?embedded=true"
            frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`

export let page_app_info = `
<span class="in_t">App Info</span>
        <pre id="ren_appinf"></pre>`

export let page_schedule = `
<span class="in_t">Schedule</span>
        <iframe id="tmt_frame" width="100%" height="90%" frameborder="0" scrolling="no"></iframe>`

export let error_page = `
<span class="in_t">404</span>
        <hr color="white" width="100%">
        <span style="font-size: 3vh;">You don't have access to this page.</span>
        <a class="tst_btn rpl" href="/#/dashboard">Go To Dashboard</a>`

export let page_notes = `
<div style="position: fixed;">
            <embed id="nt_id" style="width: 95vw;height: 90vh;">
            <div id = "nt_nocontrol">Quarkz!</div>
        </div>`

export let page_ariel = `
<div id="c-output"
            style="color:yellow;overflow-y: scroll;display: flex;flex-direction: column;height: 80vh;width: 90vw;border: 3px greenyellow solid;padding-left: 6px;">

        </div>
        <div>
            <input type="text" id="c-input" class="_in_aq" placeholder="Command">
            <button class="tst_btn rpl" id="c-exec">Execute</button>
        </div>`
export default {page_app_info,page_ariel,page_bug_report,page_dashboard,page_notes,page_schedule,error_page}