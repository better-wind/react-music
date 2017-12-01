import * as MenuTypes from '../Constant/menu';
export const changeMenu = data => {
    return {
        type: MenuTypes.SELECT_MENU,
        data
    }
}
