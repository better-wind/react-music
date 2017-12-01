var webpack = require('webpack')
var path = require('path')
var webpackConfig = require('./webpack.dev.config')
var express = require('express')
var config = require('../config/index')
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')

var port = process.env.PORT || config.dev.port
var proxyTable = config.dev.proxyTable
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

Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})
app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(port,function(err){
    if(err){
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    opn(uri)
})
