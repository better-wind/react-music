var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var Utils = require('./utils')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var webpackConfig = require('./webpack.config')
Object.keys(webpackConfig.entry).forEach(function(name){
    webpackConfig.entry[name] = [path.resolve((__dirname,'build/dev-client.js'))].concat(webpackConfig.entry[name])
})

module.exports = merge(webpackConfig,{
    module:{
        rules:Utils.styleLoaders({sourceMap:false})
    },
    // devtool: '#cheap-module-eval-source-map',
    plugins:[
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        hot:true,
        contentBase:path.resolve(__dirname,'../'),
        // publicPath:path.resolve(__dirname,'../assets/'),
    }
})
