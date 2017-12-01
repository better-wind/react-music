import * as MenuTypes from '../Constant/menu';
const Menu = (state = {currentMenu:0},action) => {
    switch(action.type){
        case MenuTypes.SELECT_MENU:
            return {
                currentMenu:action.data
            }
        default:
            return state
    }
}
export default Menu