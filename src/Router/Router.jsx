import React from 'react'
import { Route , Router } from 'react-router-dom'
import createHistory from 'history/createHashHistory'



const history = new createHistory()

import FindMusic from '../page/FindMusic/FindMusic'
const RouteConfig = (
    <Router history={history}>
        <div className="content-box">
            <Route path="/findMusic" component={FindMusic}></Route>
        </div>

    </Router>
)
export default RouteConfig