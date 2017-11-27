
const changeMenu = data => {
    return {
        type: 'SELECTMENU',
        data
    }
}
export const callChangeMenu = (data)=>{
    return dispatch => {
        dispatch(changeMenu(data))
    }
}