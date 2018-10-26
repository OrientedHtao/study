// webpack.config.js
/**
* 即使存在多个入口， 也只能有一个输出
*/
// output 输出最低配置是 包含两个属性的 filename 输出文件的名称 path 绝对路径
module.export = {
    output: {
        filename: 'bundle.js'
        path: 'home/project/dist' // 绝对路径
    }
}
// 多个入口文件
module.export = {
    entry: {
        app:'./src/app.js',
        vendors: './src/vendors.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + 'dist'
    }
}

// 使用 CDN 和资源 hash 的复杂示例
module.export = {
    output: {
        path: '/home/proj/cdn/assets/[hash]',
        publicPath: 'http://cdn.example.com/assets/[hash]/'
    }
}