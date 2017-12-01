import React,{ Component } from 'react';
import  {render} from 'react-dom'
import { Link } from 'react-router-dom'
import MixinMenu from '../../components/mixin/MixinMenu'
import './findMusic.scss'
class Swipe extends React.Component {
    constructor(){
        super()
        this.state = {
            isTouching:false,
            startX:0,
            moveX:0,
            endX:0,
            style:{
                transform: 'translate3d(0,0,0)'
            },
            swipeItem:[],
            currentItem:0,
            autoTime:[]
        }

    }
    touchStartSwipe(e){
        if(this.state.isTouching) return
        const _e = e.changedTouches[0]
        this.setState({
            isTouching:true,
            startX:_e.pageX,
        })
        this.clearAutoSwipe()

    }
    touchMoveSwipe(e){
        if(!this.state.isTouching) return
        e.preventDefault()
        const width = document.body.clientWidth
        const _e = e.changedTouches[0]
        const _moveX = _e.pageX - this.state.startX  + this.state.moveX
        const _moveStyle = `translate3d(${_moveX - width * this.state.currentItem}px,0,0)`
        this.setState({
            startX:_e.pageX,
            style:{
                transform: _moveStyle
            },
            moveX:_moveX
        })

    }
    touchEndSwipe(e){
        const width = document.body.clientWidth
        const _e = e.changedTouches[0]
        const _moveX = this.state.moveX
        let _currentItem = this.state.currentItem
        //满足移动条件
        if(Math.abs(_moveX) * 3 > width){
            //左移
            if(_moveX > 0){
                // 第一个
                if(_currentItem == 0){
                    _currentItem = this.state.swipeItem.length - 1
                } else {
                    _currentItem--
                }
            }
            //右移
            else {
                //最后一个
                if(_currentItem == this.state.swipeItem.length - 1){
                    _currentItem = 0
                } else {
                    _currentItem++
                }

            }
        }
        this.setState({
            isTouching:false,
            endX:_e.pageX,
            style:{
                transform: `translate3d(-${width*_currentItem}px,0,0)`,
                transition: 'all 0.25s ease'
            },
            currentItem:_currentItem,
            moveX:0
        })
        this.autoSwipe()
    }
    clearAutoSwipe(){
        const autoTime = this.state.autoTime.pop()
        clearTimeout(autoTime)
    }
    autoSwipe(){
        const _self = this
        let autoTime = setTimeout(function(){
            const width = document.body.clientWidth
            let _currentItem = _self.state.currentItem
            _currentItem ++
            if(_currentItem == _self.state.swipeItem.length){
                _currentItem = 0
            }
            _self.setState({
                style:{
                    transform: `translate3d(-${width*_currentItem}px,0,0)`,
                    transition: 'all 0.75s ease'
                },
                currentItem:_currentItem,
            })
            clearTimeout(autoTime)
            _self.autoSwipe()
        },5000)
        this.state.autoTime.push(autoTime)
    }
    componentDidMount(){
        this.autoSwipe()
    }
    componentWillMount(){
        const width = document.body.clientWidth
        const { swipeItem } = this.props
        swipeItem.map((item,index)=>{
            item.left = width*index
        })
        this.setState({
            swipeItem:swipeItem
        })
    }
    render(){
        const width = document.body.clientWidth
        const swipeItem = JSON.parse(JSON.stringify(this.state.swipeItem))
        if(this.state.currentItem == 0){
            let _item = JSON.parse(JSON.stringify(swipeItem[swipeItem.length-1]))
            _item.left = -width
            // swipeItem.unshift(_item)
            swipeItem.push(_item)
        }
        else if(this.state.currentItem == this.state.swipeItem.length-1){
            let _item = JSON.parse(JSON.stringify(swipeItem[0]))
            _item.left = this.state.swipeItem.length * width
            swipeItem.push(_item)
        }
        return (
            <div className="swipe-box">
                <ul style={this.state.style}>
                    {
                        swipeItem.map((item,index)=>{
                            return <li key={index} style={{left:item.left+'px'}}  onTouchStart={this.touchStartSwipe.bind(this)} onTouchMove={this.touchMoveSwipe.bind(this)} onTouchEnd={this.touchEndSwipe.bind(this)}>
                                    <img src={item.url} alt=""/>
                                  </li>
                        })
                    }
                </ul>
                <div className="carousel-point-box">
                    {
                        this.state.swipeItem.map((item,index)=>{
                            return <span key={index} className={this.state.currentItem == index ? 'current' :''}></span>
                        })
                    }
                </div>

            </div>
        )

    }
}
class FindMusic extends React.Component {
    constructor(){
        super()
    }
    componentWillMount() {
        const list = [1, 2, 3, 4, 5, 6, 7, 8]
        const swipeItem = []
        list.map((item) => {
            let _obj = {
                url: require('a@/image/findMusic/music' + item + '.jpg')
            }
            swipeItem.push(_obj)
        })
        const recommend = [
            {
                label: '私人FM',
                icon: '&#xe65e;',
                link:'/songsList'
            },
            {
                label: '每日推荐',
                icon: '&#xe62e;',
                link:'/songsList'
            },
            {
                label: '歌单',
                icon: '&#xe603;',
                link:'/songsList'
            },
            {
                label: '排行榜',
                icon: '&#xe679;',
                link:'/songsList'
            }
        ]
        this.setState({
            swipeItem: swipeItem,
            recommend: recommend
    })
    }
    render(){
        return (
            <div data-v-findmusic>
                <Swipe swipeItem={this.state.swipeItem}></Swipe>
                <div className="recommend-box flex-box-around">
                    {
                        this.state.recommend.map((item,index)=>{
                            return <div key={index}>
                                <Link to={item.link}>
                                    <div className="icon-box">
                                        <i className="music-icon" dangerouslySetInnerHTML={{__html:item.icon}}></i>
                                    </div>
                                </Link>
                                <div className="icon-sign">{item.label}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default MixinMenu({
    ComponentTemp:FindMusic,
    tagIndex:0,
    header:{
        name:'发现音乐',
        type:1
    }
})