export let page_register = `
<span class="in_t">Register</span>
    <div style = "display:flex;flex-direction:row;flex-wrap:wrap;font-size:15px;">
        <div class = "db_class">
        <span style="font-size: max(14px,3vh);color:var(--clr16)">Personal Info</span>
        <input type="text" id="rg_name" class="_in_reg" placeholder="Name">
        <div style = "display:flex;flex-direction:row;align-items:center;">
        <label style = "font-size:16px;" for="rg_dob">Date:&nbsp;&nbsp;</label>
        <input name = "rg_dob" type="date" id="rg_dob" class="_in_reg">
        </div>
        <div style = "display:flex;flex-direction:row;align-items:center;">
        <label style = "font-size:16px;" for="class">Class:&nbsp;&nbsp;</label>
        <select name="class" id="rg_class">
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        </div>
        <div style = "display:flex;flex-direction:row;align-items:center;">
        <label style = "font-size:16px;" for="gender">Gender:&nbsp;&nbsp;</label>
        <select name="gender" id="rg_gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        </div>
        </div>
        <div class = "db_class">
        <span style="font-size: max(14px,3vh);color:var(--clr16)">Account Info</span>
        <input type="tel" id="rg_mbleno" class="_in_reg" placeholder="Mobile No">
        <input type="text" id="rg_uname" class="_in_reg" placeholder="Email Address">
        <input type="password" id="rg_pass" class="_in_reg" placeholder="Password">
        <input type="password" id="rg_pass1" class="_in_reg" placeholder="Confirm Password">
        </div>
        </div>
        <button class="tst_btn rpl" id="rg_in">Register</button>

`