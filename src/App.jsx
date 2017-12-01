import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import RouteConfig from './Router/Router'
import store from './Redux/Store'
import 'a@/css/layout.scss'
import 'a@/js/console'


render(
    <Provider store={store}>
        {RouteConfig}
    </Provider>,
    document.getElementById('app')
)
