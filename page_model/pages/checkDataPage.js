import {Selector} from 'testcafe'

class checkDataPage{
    constructor(){
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipcodeField = Selector('#postal-code')
        this.continuePurchaseButton = Selector('.cart_button')
        this.errorMessage = Selector('h3')
    }
}

export default new checkDataPage()