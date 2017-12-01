import React,{ Component } from 'react';
import {render} from 'react-dom'
import MixinMenu from '../../components/mixin/MixinMenu'
import SongsAPI from '../../Redux/API/songsList'
import Color from './color'
import './playDetail.scss'
class PlayDetail extends Component {
    constructor(){
        super()
        this.state= {
            playList:{},
            isReady:false,
            playImgBg:'rgba(0,0,0,.2)'

        }
    }
    fromtPlayCount(count){
        let _count = ''
        count > 10000 ?
            _count = Math.floor(count / 10000)+'万'
            : _count = count
        return _count
    }
    fromtSrc(url){
        let _url = url.split(/\/\//g)[1]
        let _list = _url.split(/\//g)
        let hostname = _list.shift()
        let src = _list.join('/')
        let _s = `NetAPI/pic?hostname=${hostname}&src=${src}`

        return _s
    }
    componentWillMount(){
        const id = this.props.match.params.id;
        // SongsAPI.getPic()
        SongsAPI.getPlayDetail({id})
            .then((rs)=>{
                this.setState({
                    playList:rs.playlist,
                    isReady:true
                })
                this.getPlayBg()
            })
    }
    getPlayBg(){
        let _s = this.fromtSrc(this.state.playList.coverImgUrl)
        Color(_s,(rs)=>{
            var s = `linear-gradient(135deg,${rs.cluster.join(',')})`
            this.setState({
                playImgBg:s
            })
        })
    }
    render(){
        return (
            <div data-v-playdetail>
                <canvas id="Demo" style={{display:'none'}}></canvas>
                {this.state.isReady}
                {
                    this.state.isReady ?
                        <div className="play-detail-box">
                            <div className="play-msg" style={{background:this.state.playImgBg}}>
                                <div className="pic-box">
                                    <div className="pic-wrap">
                                        <img src={this.fromtSrc(this.state.playList.coverImgUrl)} alt=""/>
                                    </div>
                                    <div className="play-count-box">
                                        <i className="music-icon">&#xe647;</i>
                                        <span>{this.fromtPlayCount(this.state.playList.playCount)}</span>
                                    </div>
                                    <div className="play-icon-hot">
                                        <i className="music-icon">&#xe614;</i>
                                    </div>
                                </div>
                                <div className="msg-box">
                                    <div className="title-box">
                                        <p className="title">{this.state.playList.name}</p>
                                        <p className="author">{this.state.playList.creator.nickname}
                                            <i className="music-icon">&#xe86e;</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="songs-box">
                                <ul>
                                    {
                                        this.state.playList.tracks.map((item,index)=>{
                                            return <li key={item.id}>
                                                <div className="num">{index + 1}</div>
                                                <div className="song-msg">
                                                    <p className="title">{item.name}</p>
                                                    <p>{item.ar[0].name} - {item.al.name}</p>
                                                </div>
                                                <div className="song-menu"></div>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>

                        </div>
                        : ''
                }

            </div>
        )
    }

}
export default MixinMenu({
    ComponentTemp:PlayDetail,
    tagIndex:0,
    header:{
        name:'歌单',
        type:3
    }
})
