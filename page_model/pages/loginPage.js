import {Selector} from 'testcafe'

class loginPage {
    constructor(){
        this.loginButton = Selector ('.btn_action')
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.errorMessage = Selector ('h3').withText('Epic sadface: Username and password do not match any user in this service')
    }

}

export default new loginPage ()