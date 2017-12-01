import { createStore } from 'redux'
import middleWares from './middleWares'
import Reducer from '../Reducer/'


const store = createStore(
    Reducer,
    middleWares
)
export default store