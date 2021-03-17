import {Role} from 'testcafe'
import {CREDENTIALS} from './Constants'
import loginPage from '../pages/loginPage'

export const ValidUser = Role("https://www.saucedemo.com/", async t=> {
    await t
    .typeText(loginPage.usernameField,CREDENTIALS.Valid_user.Username)
    .typeText(loginPage.passwordField, CREDENTIALS.Valid_user.Password)
    .click(loginPage.loginButton)
}, {
    preserveUrl: true
    })

export const InvalidUser = Role("https://www.saucedemo.com/", async t=> {

})