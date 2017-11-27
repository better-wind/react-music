import React from 'react'
import { Route, Router , Link} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
const history = createHistory()
import App from '../page/demoA'
import Repos from '../page/demoB'
import About from '../page/demoC'

const RouteConfig =  (
    <Router history={history} >
        <div>
            <Route path="/" component={App}/>
            <Route path="/a" component={Repos}/>
            <Route path="/b" component={About}/>
        </div>
    </Router>
    )

export default RouteConfig

