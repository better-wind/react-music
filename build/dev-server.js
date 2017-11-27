var webpack = require('webpack')
var path = require('path')
var webpackConfig = require('./webpack.dev.config')
var express = require('express')
var opn = require('opn')

var app = express()

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler,{
    quiet: true,
    // stats: {
    //     colors: true,
    //     chunks: false
    // }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler,{
    log: () => {}
})

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})
app.use(devMiddleware)
app.use(hotMiddleware)

app.listen('9999',function(err){
    if(err){
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + 9999
    opn(uri)
})
