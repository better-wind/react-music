import React,{ Component } from 'react';
import {render} from 'react-dom'
import { Link } from 'react-router-dom'
import MixinMenu from '../../components/mixin/MixinMenu'
import SongsAPI from '../../Redux/API/songsList'
import './songsList.scss'
class SongsList extends Component {
    constructor(){
        super()
        this.state= {
            playList:[]
        }
    }
    fromtPlayCount(count){
        let _count = ''
        count > 10000 ?
            _count = Math.floor(count / 10000)+'万'
            : _count = count
        return _count
    }
    componentWillMount(){
        SongsAPI.getSongsList({offset:20,limit:20})
            .then((rs)=>{
            console.log(rs.playlists)
                this.setState({
                    playList:rs.playlists
                })
            })
    }
    render(){
        return (
            <div data-v-songslist>
                <ul className="play-list-box">
                    {
                        this.state.playList.map((item,index)=>{
                            return <Link key={item.id} to={`/playDetail/${item.id}`}>
                                <li >
                                    <div className="pic-box">
                                        <div className="pic-wrap">
                                            <img src={item.coverImgUrl} alt=""/>
                                        </div>
                                        <div className="play-count-box">
                                            <i className="music-icon">&#xe647;</i>
                                            <span>{this.fromtPlayCount(item.playCount)}</span>
                                        </div>
                                        <div className="play-icon-hot">
                                            <i className="music-icon">&#xe614;</i>
                                        </div>
                                    </div>
                                    <div className="msg-box">
                                        <div className="title-box">
                                            <p className="title">{item.name}</p>
                                            <p className="author">by&nbsp;{item.creator.nickname}
                                                <i className="music-icon">&#xe86e;</i>
                                            </p>
                                        </div>

                                        <div className="tag">
                                            <span className="tag-icon">{item.tag}</span>
                                            <span>{item.copywriter}</span>
                                        </div>
                                    </div>
                                </li>
                            </Link>

                        })
                    }
                </ul>
            </div>
        )
    }

}

export default MixinMenu({
    ComponentTemp:SongsList,
    tagIndex:0,
    header:{
        name:'歌单',
        type:3
    }
})
