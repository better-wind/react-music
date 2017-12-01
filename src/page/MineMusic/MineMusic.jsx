import React,{ Component } from 'react';
import  {render} from 'react-dom'
import MixinMenu from '../../components/mixin/MixinMenu'

class MineMusic extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                MineMusic
                <div className="swipe-box">

                </div>
            </div>
        )
    }
}
export default MixinMenu({
    ComponentTemp:MineMusic,
    tagIndex:1,
    header:{
        name:'我的音乐',
        type:2
    }
})