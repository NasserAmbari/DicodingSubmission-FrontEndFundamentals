const path = require ("path");
const webpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry : "./src/App.js",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : "style-loader"
                    },
                    {
                        loader : "css-loader"
                    }
                ]
            }
        ]
    },
    plugins : [
        new webpackPlugin({
            template : "./src/template.html",
            filename : "index.html"
        }),
        new Dotenv({
            systemvars: true,
        })
    ]
}