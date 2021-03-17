import inventoryPage from '../pages/inventoryPage'
import cartPage from '../pages/cartPage'
import {ValidUser} from '../data/tempRoles'

fixture('Shopping cart feature testing')
    .beforeEach(async t=> {
        await t
        .useRole(ValidUser)
    })

test('User can navigate to shopping Cart page', async t=>{
    await t
    .click(inventoryPage.cartButton)

    await t.expect(cartPage.cartHeader.exists).ok()

})

test('User can add an item in the cart and it is available in cart page', async t=>{
    await t
    .click(inventoryPage.addToCartButton.nth(-1))
    .click(inventoryPage.cartButton)

    await t.expect(await cartPage.validateItems(1)).ok()
    //await t.expect(inventoryPage.qty.exists).ok()

})

test('User can add multiple items in cart and validate them in cart page', async t=>{
    await t
    .click(inventoryPage.addToCartButton.nth(1))
    .click(inventoryPage.addToCartButton.nth(-1))
    .click(inventoryPage.cartButton)

    await t.expect(await cartPage.validateItems(2)).ok()
    //await t.expect(inventoryPage.qty.exists).ok()
})
