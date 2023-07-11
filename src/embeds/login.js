export let page_login = `
<div id="lgn_bx">
    <span class="in_t">Welcome to Quarkz!</span>
    <input type="text" id="lg_uname" class="text_bx_1" placeholder="Username">
    <input type="password" id="lg_pass" class="text_bx_1" placeholder="Password">
    <div>
        <button class="tst_btn rpl" id="sgn_in">Sign In</button>
        <button class="tst_btn rpl" id="reg_in">Register</button>
    </div>
    <span id="lgn_err" class="err_txt">ERROR:Wrong Username Or Password</span>
    <span class="lgn_c_1"><a href="/#/about">About</a>&nbsp;&nbsp;<a href="/#/legal">Legal</a>&nbsp;&nbsp;<a
            href="/#/bugreport">Report A Bug</a>
    </span>
    <span class="lgn_c_1">
        <a href="/#/mainsformulas">Formula Sheets</a>&nbsp;&nbsp;
        <a href="/#/downloads">Downloads</a>
    </span>
</div>
`
export default {page_login}