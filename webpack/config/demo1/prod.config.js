const path = require('path');

module.export = {
    mode: "production", // 'production' 'development', 'none'
    // mode: "production", 
    // mode: "development", 
    // mode: "none", 
    entry: './app/index.js',
    entry: ['./app/index.js', './app/index2.js'],
    entry: {
        a: './app/index.js',
        b: ['./app/index.js', './app/index1.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/assets/',
        library: 'myLibrary',
        libraryTarget: 'umd', //通用模块定义 
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader:"babel-loader",
                include:[
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    path.resolve(__dirname, "app/demo-files")
                ],
                issuer: { test, include, exclude },
                enforce: 'pre',
                enforce: 'post',
                options: {
                    presets: ["es2015"]
                }
            },
            {
                
            }
        ]
    }
}