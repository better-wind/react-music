var path = require('path')
var webpack = require('webpack')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry:{
        app:[path.resolve(__dirname,'../src/App.jsx')]
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[
                    {
                        loader:'babel-loader',
                    }
                ],
                include:[path.join(__dirname, '..', 'src')]

            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        alias: {
            'a@': resolve('src/assets'),
            '@': resolve('src')
        }
    }
}