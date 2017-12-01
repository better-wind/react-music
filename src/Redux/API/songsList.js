import baseAction from './base'

export default {
    /*
    * 精品歌单
    * */
    getSongsList:(data)=>{
        const params = {
            url:baseAction.API+'/top/playlist/highquality',
            type:'POST',
            params:{
                ...data
            }
        }
        return baseAction.fetch(params)
    },
    /*
    * 歌单详情
    * */
    getPlayDetail:(data)=>{
        const params = {
            url:baseAction.API+'/playlist/detail',
            type:'POST',
            params:{
                ...data
            }
        }
        return baseAction.fetch(params)
    },
    getPic:(data)=>{
        const params = {
            url:baseAction.API+'/pic',
            type:'POST',
            params:{
                ...data
            }
        }
        return baseAction.fetch(params)
    }
}