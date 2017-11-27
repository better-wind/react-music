const Menu = (state,action) => {
    state = {
        currentMenu:0,
    }
    switch(action.type){
        case 'SELECTMENU':
            return {
                currentMenu:action.data
            }
        default:
            return state
    }
}
export default Menu