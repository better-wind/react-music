import React,{ Component } from 'react';
import  {render} from 'react-dom'
import MixinMenu from '../../components/mixin/MixinMenu'

class Friend extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                friendManage
            </div>
        )
    }
}
export default MixinMenu({
    ComponentTemp:Friend,
    tagIndex:2,
    header:{
        name:'发现朋友',
        type:2
    }
})