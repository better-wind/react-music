import * as HeaderTypes from '../Constant/header';
const Header = (state = {name:'发现音乐',type:1},action) => {
    // name:'发现音乐'
    // type 1 搜索+歌曲 2 title
    // state.MenuList = {
    //     0:'发现音乐',
    //     1:'我的音乐',
    //     2:'发现朋友',
    //     3:'我的账户',
    //     4:'歌单'
    // }
    switch(action.type){
        case HeaderTypes.CHANGE_TITLE:
            return {
                name:action.data.name,
                type:action.data.type
            }
        default:
            return state
    }
}
export default Header