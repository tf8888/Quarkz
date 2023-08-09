export let page_dashboard = `
<div id="options_tab"
                style="display: flex;flex-direction: column;align-items:center;justify-content: space-evenly;width: 150px;height:100%;">
                <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/settings'">settings</span>
                <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/about'">info</span>
                <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/updates'">notifications</span>
                <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/profile'">account_circle</span>
                <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/store'">shopping_cart</span>
                <span class="material-symbols-outlined rpl rpl-2 db_opt" id="lgt_btn">logout</span>
            </div>
        <div
            style="display: flex;flex-direction: row;flex-wrap: wrap;margin-left: 10px;align-items: flex-start;height:100%;margin-top: 15px;justify-content: space-evenly;overflow-y: scroll;">
            <div id="db_exam_info" class = "db_class" style="max-height: 30vh;">
                <span style="font-size: 25px;color:var(--clr16)">Exam Info</span>
                <div id="db_exam_list"></div>
            </div>
            <div id="db_social_media" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16)">We're on Social Media</span>
                <span style="font-size: 14px;color:grey;margin-left: 10px;">Follow us, & share with your friends. It motivates us to keep
                    working hard for you to bring new features. </span>
                <img style="width:50px;" alt="Youtube Logo" style = "cursor:pointer;" class="rpl rpl-2"
                    onclick="window.open('https://www.youtube.com/@quarkz./', '_blank');"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABaCAMAAABHRa6wAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACcFBMVEUAAAD/Ly//BQX/AAD/ExP/MDD/LS3/LCz/PDz/Z2f/X1//EhL/CAj/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/CAj/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/R0f/Q0P/Wlr/QED/Vlb/PT3/UlL/PDz/UFD/Ojr/Tk7/OTn/TEz/ODj/S0v/Nzf/Skr/Nzf/SUn/Njb/SEj/Njb/SEj/Njb/R0f/NTX/R0f/NTX/R0f/NTX/Rkb/NTX/NTX/AAD/AAD/AAD/CAj/Hh7/HBz/HBz/Gxv/Gxv/Ghr/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/HR3/AAD/AQH/BQX/wcH/EBD/////jY3/X1//7+//MzP/x8f/DQ3/mZn/Zmb/9vb/Ojr/0ND/EhL/oqL/dXX/+vr/QkL/1dX/GRn/qKj/fHz/SUn/3Nz/Hh7/sbH/paX/S0s8CEr+AAAAsHRSTlMAAAAAAAAAAAAAAAAABhMhKzdCUVlkbnqHjpidpqi3us7C1tnP3uLl7uzn18W2saV8ZVtQRjYBHDxaq8HT5vP98uivXkAiBidyrN3ksnkvCpenGaG5VfWCqhXb+kNxs8bp9ESQjLjN8OP5AQ4JIBYxJkE4VUhlVnJlgHSOgJiKoZOpnrKftKu9r8LA9/bYAQ4bJC88R1BYYnB6goqQlZykp7WzvL69xcrJzNrZxqmjGt/aNR4AAAABYktHRLUzDlpLAAAAB3RJTUUH5wEdCycyRsErbAAAAv5JREFUaN7dmudXE1EQxR8bu0KiKCSgggFi1KhRUexKVEQFxV6xYa/Yu2LBrkjvKE0CtmcZe+/df8nNCgfhgLi7z9xznE/58ub+srtvd97MZewP4SNJBl8/o6lzF/+u3QICzZag4O49eoaE9rKGhUfYbLbe9j5y2PvKPyPC+1kdoSH9BwwMDrKYnQGDBg+JHGoy+vkaJMmHqQtpWNTwEYGWkaNGjxk7juuP8dFWh8vinDBxUoyhRe3JsVOmCtBsNqbFxU9vnmJGwr/Uro+Zs5r+97O9I++JOU1cBZP35D0R2Vh/rnf1OXc21Pf3tj7n8b/rG72v3+AuGOYhAHj9kzgfos8X1Om3wuhzvrAWIBYFkFALsAgFsFhS9GNQ+pwbFYAlOIBEBcCMA1iqACzDASz31CqtV+AAlHeRAajPPZVBFBJgJXYT/NoGiUiAJBlgFRJgtQzgQgJYZYA1ahfdFgiwtg1ru07tojt374kjaMfar1e9iOi+MIANrIP6RSTHA0EAG9kmbQD08JEQgM1si0YAosdPBABsZcmaAYie6gfYxrbrACB6phdgB9upC4Cev9AHsIvt1gdA9PKVHoA9bK9eAKLXOgD2sf36AYjeaAY4wA6KAKC37zQCHGKHhQAQvf+gCeAISxEEQPRRC8BRdkwYANEn9bmOsxMCAYg+q82Vyk4KBaAvX9XlOsVOiwUg+qYq1xnxAETfVeQ6+x8CqL0F8IdQ7Db8oTZXKv5FlCIMQOOrGP4xgn+O4QUJvCSDF6Xwshx+MEnWASDkaAY/nMKP5/AGBbxFA29Swdt0+EYlvFULb1bD2/XwgQV8ZAMfWsHHdvjBJXx0Cx9ew8f3eAMD3MIBN7HgbTxwIxPeyoU3s+HtfHhDI97SqVwFrKm1jsJj63VaXI6w6HMiRM/bLzjikv7O1tsofCSp48W0S+kZmVnZObl5+QWFRcUll6+UlpVXVF6tcrura67JUVPtdlddr6woLyu9cbOkuKiwID8vNyc7KzMj/VZap5aMzT8BRpXwJFof0ooAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDEtMjlUMTE6Mzk6NTArMDA6MDCGz66vAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAxLTI5VDExOjM5OjUwKzAwOjAw95IWEwAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5MDwVcVIAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTI40I0R3QAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAARdEVYdFRodW1iOjpTaXplADE1NDVC02RgawAAABZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vUE5HOqYqZyIAAAAASUVORK5CYII=">
                <span style="font-size: 25px;color:var(--clr16)">Join Our Discord Server</span>
                    <span style="font-size: 14px;color:grey;margin-left: 10px;">Join our Server, and talk with like-minded peers. Ask doubts. Answer Doubts.</span>
                    <svg style="width:50px;" alt="Discord Logo" style = "cursor:pointer;" class="rpl rpl-2"
                    onclick="window.open('https://discord.gg/XKTtqaSW', '_blank');" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero">
                    </path></g></svg>
                    <span style = "font-size:10px;color:grey;">Copyright 2023 Quarkz! by MTTOne</span>
                    </div>
            <div id="db_study_resources" class = "db_class">
                <span style="font-size: 25px;color:var(--clr16)">Additional Study Resources</span>
                <div class="tlinks_min rpl" onclick="window.location.hash = '/mainsformulas'"><span
                        style="font-size: 16px;">JEE Mains Formula Sheets</span></div>
                <div class="tlinks_min rpl" onclick="window.location.hash = '/downloads'"><span
                        style="font-size: 16px;">FREE PDF Downloads</span></div>
            </div>
            <div class = "db_class" id="profile_tab"
                style="display: flex;flex-direction: column;align-items: center;">
                <span style="font-size: 25px;color:var(--clr16)">About Me</span>
                <img id="prf_tab_img" style="width: 100px;height:100px;object-fit: cover;margin:5px;border:2px solid #06d85f;border-radius:30px;"></img>
                <span style="color:var(--clr4)" id="dshd_name">NAME</span>
                <span style="color:var(--clr5);font-size: small;" id="dshd_uname">@username</span>
                <span style="color:var(--clr16)" id="dshd_batch">BATCH</span>
            </div>
        </div>
<div id="options_tab_2"
        style="display: flex;flex-direction: column;align-items:center;justify-content: space-evenly;width: 150px;height:100%;">
        <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/timetable'">calendar_month</span>
        <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/chplist'">menu_book</span>
        <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/testinfo'">glyphs</span>
        <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/simlist'">play_circle</span>
        <span class="material-symbols-outlined rpl rpl-2 db_opt" onclick="window.location = '#/usernotes'">edit_note</span>
        <span class="material-symbols-outlined rpl rpl-2 db_opt" id = "adminonly" onclick="window.location = '#/functions'">admin_panel_settings</span>
</div>
`

export let page_bug_report = `
<iframe id="bgrep_frame"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeo2JZDaBApBiTeXmAnkVX60hSuJGHJkd9jsF9ePg0iM9ufjA/formResponse?embedded=true&entry.1599248323=Quarkz!&entry.1645606077=`+Date.now()+`"
            frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`

export let page_app_info = `
<span class="in_t">App Info</span>
        <pre id="ren_appinf"></pre>`

export let page_schedule = `
<span class="in_t">Schedule</span>
        <iframe id="tmt_frame" width="100%" height="90%" frameborder="0" scrolling="no" onload = "showqLS('q')"></iframe>`

export let error_page = `
<span class="in_t">404</span>
        <hr style="color:var(--clr18)" width="100%">
        <span style="font-size: 3vh;">You don't have access to this page.</span>
        <a class="tst_btn rpl" href="/#/dashboard">Go To Dashboard</a>`

export let page_notes = `
<div style="position: fixed;width:100%;">
            <iframe id="nt_id" style="width: 100%;height: 90vh;"></iframe>
            <div id = "nt_nocontrol">Quarkz!</div>
        </div>`

export let page_ariel = `
<div id="c-output"
            style="color:var(--clr16);overflow-y: scroll;display: flex;flex-direction: column;height: 80vh;width: 90vw;border: 3px greenvar(--clr16) solid;padding-left: 6px;">

        </div>
        <div>
            <input type="text" id="c-input" class="_in_aq" placeholder="Command">
            <button class="tst_btn rpl" id="c-exec">Execute</button>
        </div>`

export let page_edit_exams = `
<div id="lqadd" style="display: flex;flex-direction: row;margin:10px;height: 50vh;">
            <div id="question_list"
                style="border: 2px lime solid;width: 15vw;height:50vh;display: flex;flex-direction: column;align-items: center;text-align: center;font-size: 3vh;overflow-y: scroll;"
                class="title-notes"></span>
            </div>
            <div
                style="border: 2px lime solid;width:75vw;display: flex;flex-direction: column;overflow-y: scroll;height:50vh;">
                <select name="type" id="aq_mode" class="_in_aq col-red" value = "exam">
                    <option value="exam">Exam</option>
                </select>
                <div class="flex_type" id="aq_exams">
                    <input type="text" id="aq_examname" class="_in_aq" placeholder="Exam Names">
                    <input type="text" id="aq_examdate" class="_in_aq" placeholder="Exam Dates">
                    <input type="text" id="aq_examinfo" class="_in_aq" placeholder="Exam Info Link">
                    <input type="text" id="aq_examsyllabus" class="_in_aq" placeholder="Syllabus Link">
                </div>
                <button class="tst_btn rpl" id="aq_re">Remove Entry</button>
            </div>
        </div>
        <button class="tst_btn rpl" id="aq_exam_save">Save/Update Exams</button>
`
export let page_updates = `
<div class = "flex_type" style="flex-direction: row;flex-wrap: wrap;">
            <div class = "db_class">
                <span style="font-size: 25px;color:var(--clr16)">Release Notes</span>
                <div id="rel_list" style="overflow-y: scroll;height:80vh; width: 100%; display: block;" class="flex_type"></div>
            </div>
            <div class = "db_class">
                <span style="font-size: 25px;color:var(--clr16)">Updates</span>
                <div id="updt_list" style="overflow-y: scroll;height:80vh; width: 100%; display: block;" class="flex_type"></div>
            </div>
        </div>


`
export let page_uploads = `
<div class = "db_class">
<span style="font-size: 25px;color:var(--clr16)">Upload Files</span>
        <label for="file" style= "background-color: indigo;color: var(--clr18);padding: 0.5rem;font-family: sans-serif;border-radius: 0.3rem;cursor: pointer;margin-top: 1rem;" class = "rpl">Choose File To Upload</label>
        <input type="file" id="file" style="width: 50vw;height: 30px;margin: auto;" hidden>
        <span id="file_progress"></span>
        <span id="file_status"></span>
        <input id="file_link_long" type="url" class = "_in_aq" style = "width:20vw;" placeholder = "Long URL" disabled>
        <span style="font-size: 10px;">Note: File Names Will Be Modified to the following format:</span>
        <span style="font-size: 10px;">{IP ADDRESS}-{DATE}-{ORIGNAL FILE NAME}</span>
        <span style="font-size: 10px;">Max File Upload Size: 50mb</span>
    </div>
`
export default {page_app_info,page_ariel,page_bug_report,page_dashboard,page_notes,page_schedule,error_page,page_edit_exams,page_updates,page_uploads }