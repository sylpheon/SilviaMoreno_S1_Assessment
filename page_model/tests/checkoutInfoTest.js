import inventoryPage from '../pages/inventoryPage'
import cartPage from '../pages/cartPage'
import checkDataPage from '../pages/checkDataPage'
import checkSummaryPage from '../pages/checkSummaryPage'
import checkCompletePage from '../pages/checkCompletePage'
import {ValidUser} from '../data/tempRoles'
import {PURCHASE} from '../data/Constants'

fixture('Checkout data -1st screen- test')
    .beforeEach(async t=> {
        await t.useRole(ValidUser)
    })

test('Missing field info', async t=>{
    await t
    .click(inventoryPage.addToCartButton.nth(1))
    .click(inventoryPage.addToCartButton.nth(-1))
    .click(inventoryPage.cartButton)

    .click(cartPage.checkoutButton)

    .typeText(checkDataPage.lastNameField, PURCHASE.Data.Last_Name)
    .typeText(checkDataPage.zipcodeField, PURCHASE.Data.Zip_Code)
    .click(checkDataPage.continuePurchaseButton)

    await t.expect(checkDataPage.errorMessage.exists).ok()
})

test.only('Correct final order', async t=>{
    await t
    .click(inventoryPage.addToCartButton.nth(1))
    .click(inventoryPage.addToCartButton.nth(-1))
    .click(inventoryPage.cartButton)

    .click(cartPage.checkoutButton)
    

    .typeText(checkDataPage.firstNameField, PURCHASE.Data.First_Name)
    .typeText(checkDataPage.lastNameField, PURCHASE.Data.Last_Name)
    .typeText(checkDataPage.zipcodeField, PURCHASE.Data.Zip_Code)
    .click(checkDataPage.continuePurchaseButton)

    await t.expect(await checkSummaryPage.validateItems(2)).ok()
})

test('Complete purchase', async t=>{
    await t
    .click(inventoryPage.addToCartButton.nth(1))
    .click(inventoryPage.addToCartButton.nth(-1))
    .click(inventoryPage.cartButton)

    .click(cartPage.checkoutButton)

    .typeText(checkDataPage.firstNameField, PURCHASE.Data.First_Name)
    .typeText(checkDataPage.lastNameField, PURCHASE.Data.Last_Name)
    .typeText(checkDataPage.zipcodeField, PURCHASE.Data.Zip_Code)
    .click(checkDataPage.continuePurchaseButton)

    .click(checkSummaryPage.finishButton)

    await t.expect(checkCompletePage.finishHeader.exists).ok()
})