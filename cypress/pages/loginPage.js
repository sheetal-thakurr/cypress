// page object model

export class LoginPage {
    loginPage_userName = '#uname'
    loginPage_passeord = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    webUrl(url) {
        cy.visit(url)
    }

    userName(name) {
        cy.get(this.loginPage_userName).type(name);
    }

    userPass(password) {
        cy.get(this.loginPage_passeord).type(password);
    }

    login() {
        cy.get(this.loginPage_loginButton).click();
    }
}