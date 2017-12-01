import React from 'react';
import  {render} from 'react-dom'
import Header from '@/components/header/header'
import RouteConfig from '../Router/Router'



class Index extends React.Component {
    constructor(){
        super()
    }
    render() {

        return (
            <div className="box-page">
                <Header></Header>
                    {RouteConfig}

            </div>
        )

    }
}
export default Index