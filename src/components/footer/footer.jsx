import React,{ Component } from 'react';
import  {render} from 'react-dom'
import 'a@/css/footer/footer'
import { connect } from 'react-redux'
import * as action from '../../Redux/Action/menu'
class Icon extends Component {
    constructor(){
        super()
    }
    changeMenu(){
        const { index ,onChangeMenu} = this.props
        onChangeMenu(index)
    }
    render(){
        const { iconUrl,iconTag,current} = this.props
        return (
            <div onClick={()=>this.changeMenu()}  className={current ? 'icon-box current' : 'icon-box'} >
                <div className="icon">
                    <img src = {iconUrl}  alt=""/>
                </div>
                <div className="tag">
                    <span>{ iconTag }{ current }</span>
                </div>

            </div>
        )
    }
}
class Footer extends React.Component {
    constructor(){
        super()
    }
    render(){
        const { currentMenu, callChangeMenu } = this.props
        const list = [
            {
                url:require('a@/image/icon/user.png'),
                tag:'发现音乐'
            },
            {
                url:require('a@/image/icon/user.png'),
                tag:'我的音乐'
            },
            {
                url:require('a@/image/icon/user.png'),
                tag:'朋友'
            },
            {
                url:require('a@/image/icon/user.png'),
                tag:'账号'
            }
        ]
        return (
        <div className="footer-box">
            <div className="flex-box-around">
                {
                    list.map((item,index)=>{
                        return <Icon key={index}
                                     index={index}
                                     iconUrl={item.url}
                                     iconTag={item.tag}
                                     current={currentMenu == index ? true : false}
                                     onChangeMenu={callChangeMenu}
                        >
                        </Icon>
                    })
                }
            </div>
        </div>
        )
    }
}
export default connect(
    (state)=>{
      let { currentMenu } = state.Menu
      return {
          currentMenu
      }
    },
    action
)(Footer)