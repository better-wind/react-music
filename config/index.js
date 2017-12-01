module.exports = {
    // build: {
    //     env: require('./prod.env'),
    //     index: path.resolve(__dirname, '../dist/index.html'),
    //     assetsRoot: path.resolve(__dirname, '../dist'),
    //     assetsSubDirectory: 'static',
    //     assetsPublicPath: '/',
    //     productionSourceMap: true,
    //     productionGzip: false,
    //     productionGzipExtensions: ['js', 'css'],
    //
    //     bundleAnalyzerReport: process.env.npm_config_report
    // },
    dev: {
        env: require('./dev.env'),
        port: 9999,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/NetAPI': {
                target: 'http://192.168.0.246:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/NetAPI': '/'
                }
            },
            '/sellerAdmin': {
                target: 'http://114.215.254.36:9005',
                changeOrigin: true,
                pathRewrite: {
                    '^/sellerAdmin': '/sellerAdmin'
                }
            },
        },
        cssSourceMap: false
    }
}