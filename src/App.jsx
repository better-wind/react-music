import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import Index from '@/page/Index'
import store from './Redux/Store'
import 'a@/css/layout.scss'
import 'a@/js/console'


render(
    <Provider store={store}>
        <Index></Index>
    </Provider>,
    document.getElementById('app')
)
