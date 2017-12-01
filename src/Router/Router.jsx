import React from 'react'
import { Route , Router } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

const history = new createHistory()

//直接渲染
import FindMusic from '../page/FindMusic/FindMusic'

//延迟加载
import Bundle from '../bundle';
import MineMusicContainer from 'bundle-loader?lazy!../page/MineMusic/MineMusic';
import AccountContainer from 'bundle-loader?lazy!../page/Account/Account';
import FriendContainer from 'bundle-loader?lazy!../page/Friend/Friend';
import SongsListContainer from 'bundle-loader?lazy!../page/SongsList/SongsList';
import PlayDetailContainer from 'bundle-loader?lazy!../page/PlayDetail/PlayDetail';

const MineMusic = (props) => (
    <Bundle load={MineMusicContainer}>
        {(MineMusic) => <MineMusic {...props.props} />}
    </Bundle>
);
const Account = (props) => (
    <Bundle load={AccountContainer}>
        {(Account) => <Account {...props.props}/>}
    </Bundle>
);
const Friend = (props) => (
    <Bundle load={FriendContainer}>
        {(Friend) => <Friend  {...props.props}/>}
    </Bundle>
);
const SongsList = (props) => (
    <Bundle load={SongsListContainer}>
        {(SongsList) => <SongsList {...props.props}/>}
    </Bundle>
);
const PlayDetail = (props) => (
    <Bundle load={PlayDetailContainer}>
        {(PlayDetail) => <PlayDetail {...props.props}/>}
    </Bundle>
);
const RouteConfig = (
    <Router history={history}>
        <div className="box-page">
            <Header></Header>
            <div className="content-box">
                <Route path="/findMusic" component={FindMusic}></Route>
                <Route exact path='/mineMusic' render={props => (
                    <MineMusic props={props}/>
                )}/>
                <Route exact path='/friendManage' render={props => (
                    <Friend props={props}/>
                )}/>
                <Route exact path='/accountManage' render={props => (
                    <Account props={props}/>
                )}/>
                <Route exact path='/songsList' render={props => (
                    <SongsList props={props}/>
                )}/>
                <Route exact path='/playDetail/:id' render={props => (
                    <PlayDetail props={props}/>
                )}/>
            </div>
            <Footer></Footer>
        </div>

    </Router>
)
export default RouteConfig