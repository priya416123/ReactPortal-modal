const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    //babel loader
    module:{
        rules:[
            { test: /\.js$/,loader: 'babel-loader',exclude:/node_modules/}
        ]
    }
}