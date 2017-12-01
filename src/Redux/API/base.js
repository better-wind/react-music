import axios from 'axios'

const fetch = (opts)=>{
    return new Promise((resolve)=>{
        axios(opts).then((response)=>{
            resolve(response.data)
        })
    })

}
export default {
    API:'NetAPI',
    fetch:fetch
}