import {Selector} from 'testcafe'

class cartPage{
    constructor(){
        this.cartHeader = Selector('.subheader')
        this.qty = Selector('.cart_quantity')
        this.continueShoppingButton = Selector('.btn_secondary')
        this.checkoutButton = Selector('.checkout_button')
    }

    async validateItems(qty){
        let cartItems = await this.qty.count
        if(cartItems == qty){
            return true
        } else{
            return false
        }
    }
}

export default new cartPage()

