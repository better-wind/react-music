import React,{ Component } from 'react';
import  {render} from 'react-dom'
import './footer.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as menuActions from '../../Redux/Action/menu';
class Icon extends Component {
    constructor(){
        super()
    }
    changeMenu(){
        const { link ,index,onChangeMenu} = this.props
        onChangeMenu(index)
    }
    createMarkup(iconUrl){
        return {__html: iconUrl};
    }
    render(){
        const { iconUrl,iconTag,current,link} = this.props
        return (
            <div onClick={()=>this.changeMenu()}  className={current ? 'icon-box current' : 'icon-box'} >
                <Link to={link}>
                    <div className="icon">
                        <i className="music-icon" dangerouslySetInnerHTML={this.createMarkup(iconUrl)}></i>
                    </div>
                    <div className="tag">
                        <span>{ iconTag }</span>
                    </div>
                </Link>
            </div>
        )
    }
}
class Footer extends React.Component {
    constructor(){
        super()
    }
    render(){
        const { currentMenu, menuAction } = this.props
        const list = [
            {
                url:'&#xe648;',
                tag:'发现音乐',
                link:'/findMusic'
            },
            {
                url:'&#xe64d;',
                tag:'我的音乐',
                link:'/mineMusic'
            },
            {
                url:'&#xe602;',
                tag:'朋友',
                link:'/friendManage'
            },
            {
                url:'&#xe600;',
                tag:'账号',
                link:'/accountManage'
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
                                     link={item.link}
                                     current={currentMenu == index ? true : false }
                                     onChangeMenu={menuAction.changeMenu}
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
    (dispatch) => {
        return {
            menuAction: bindActionCreators(menuActions, dispatch)
        }
    }
)(Footer)