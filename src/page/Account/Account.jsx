import React,{ Component } from 'react';
import  {render} from 'react-dom'
import MixinMenu from '../../components/mixin/MixinMenu'

class Account extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                accountManage
            </div>
        )
    }
}
export default MixinMenu({
    ComponentTemp:Account,
    tagIndex:3,
    header:{
        name:'我的账户',
        type:2
    }
})