const path = require('path')

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname,'dist')
    }
}