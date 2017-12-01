import React,{ Component } from 'react';
import  {render} from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from '../../Redux/Action/menu';
import * as headerActions from '../../Redux/Action/header';

const Main = (setting)=>{
    class Index extends React.Component {
        static defaultProps = { setting }
        constructor(props,context) {
            super(props,context);
        }
        componentWillMount(){
            const {menuAction,headerAction,setting} = this.props
            // menuAction.changeMenu(this.props.location.pathname)
            menuAction.changeMenu(setting.tagIndex)
            headerAction.changeTitle(setting.header)
        }
        render(){
            const { ComponentTemp } = this.props.setting
            return (
                <ComponentTemp {...this.props} />
            )
        }
    }
    return connect(
        (state)=>{
            let { currentMenu } = state.Menu
            return {
                currentMenu
            }
        },
        (dispatch) => {
            return {
                menuAction: bindActionCreators(menuActions, dispatch),
                headerAction: bindActionCreators(headerActions, dispatch)
            }
        }
    )(Index)
}
export default Main