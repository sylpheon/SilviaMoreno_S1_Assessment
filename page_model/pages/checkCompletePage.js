import {Selector} from 'testcafe'

class checkCompletePage{
    constructor(){
        this.finishHeader = Selector('.subheader')
        this.thankyouLabel = Selector('.complete-header')
    }

}

export default new checkCompletePage()