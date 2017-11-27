import React from 'react';
import ReactDOM, {render} from 'react-dom';
// import Banner from './component/banner/banner'
import RouteConfig from './Router/Router'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}
const store = createStore(counter)


render(
    <Provider store={store}>
        {RouteConfig}
    </Provider>,
    document.getElementById('app')
);
