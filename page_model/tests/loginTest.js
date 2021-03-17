import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import {CREDENTIALS} from '../data/Constants'
import {ValidUser} from '../data/tempRoles'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('User can log with valid credentials', async t=>{
    await t.useRole(ValidUser)
    await t.expect(inventoryPage.inventoryContainer.exists).ok()
})

test.only('Invalid user gets error message when trying to log', async t=>{
    await t
    .typeText(loginPage.usernameField,'nouser')
    .typeText(loginPage.passwordField, CREDENTIALS.Valid_user.Password)
    .click(loginPage.loginButton)

    await t.expect(loginPage.errorMessage.exists).ok()
})

test('User can logout from products page', async t=> {
    await t.useRole(ValidUser)
    .click(inventoryPage.sideColumnOptions)
    .click(inventoryPage.logoutButton)

    await t.expect(loginPage.usernameField.exists).ok()
})