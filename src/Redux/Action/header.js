import * as HeaderTypes from '../Constant/header';
export const changeTitle = data =>{
    return {
        type: HeaderTypes.CHANGE_TITLE,
        data
    }
}