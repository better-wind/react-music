import React,{ Component } from 'react';
import  {render} from 'react-dom'
import { connect } from 'react-redux'
import './header.scss'
class Header extends React.Component {
    constructor(){
        super()
    }
    render(){
        const { name,type } = this.props
        let _headerDom = ''
        switch (type){
            case 1:
                _headerDom = <div className="search-header-box header-color">
                    <div className="search-input">
                        <i className="music-icon">&#xe86f;</i><input placeholder="搜索音乐、视频、歌词、电台" type="text"/>
                    </div>
                    <div className="current-box">
                        <i className="music-icon">&#xe630;</i>
                    </div>
                </div>
                break
            case 2:
                _headerDom = <div className="header-color title">
                    {name}
                </div>
                break
            case 3:
                _headerDom = <div className="title header-trans">
                    {name}
                </div>
                break
        }
        return (
            <div className="header-box">
                {_headerDom}
            </div>
        )
    }
}
export default connect(
    (state)=>{
        let { name,type } = state.Header
        return {
            name,
            type
        }
    }
)(Header)