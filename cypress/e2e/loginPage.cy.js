

import { LoginPage } from "../pages/loginPage";
const login = new LoginPage;

describe("login test", ()=>{
    it("login testing with cypress", ()=>{
       login.webUrl('https://trytestingthis.netlify.app/');
       login.userName('test');
       login.userPass('test');
       login.login();
    })
})

