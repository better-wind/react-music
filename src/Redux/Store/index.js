import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import Menu from '../Reducer/menu'

const store = createStore(
    combineReducers({
        Menu
    }),
    applyMiddleware(thunk)
)
export default store