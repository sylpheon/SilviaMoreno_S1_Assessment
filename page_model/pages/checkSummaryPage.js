import {Selector} from 'testcafe'

class checkSummaryPage{
    constructor(){
        this.overviewHeader = Selector('.subheader')
        this.finishButton = Selector('.cart_button')
        this.summaryQty = Selector('.summary_quantity')
    }

    async validateItems(summaryQty){
        let cartItems = await this.summaryQty.count
        if(cartItems == summaryQty){
            return true
        } else{
            return false
        }
    }
}

export default new checkSummaryPage()