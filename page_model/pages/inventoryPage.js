import {Selector} from 'testcafe'

class inventoryPage{
    constructor(){
        this.inventoryContainer = Selector('#inventory_container')
        this.cartButton = Selector('.fa-shopping-cart')
        this.addToCartButton = Selector('.btn_inventory').withExactText('ADD TO CART')
        this.sideColumnOptions = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
    }
}

export default new inventoryPage()