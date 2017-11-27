import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Link} from 'react-router-dom'
class Banner extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/">主页</Link></li>
                        <li><Link to="/a">A</Link></li>
                        <li><Link to="/b">B</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Banner
