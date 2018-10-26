
// webpack.config.js
// entry: string| Array<string> 简写
module.export = {
    entry: './path/index.js'
}
// 上--下 简写--原来写
module.export = {
    entry: {
        main: './path/index.js'
    }
}
// 
// 应用场景： 分离应用程序 和 第三方库 入口
module.export = {
    entry: {
        app: './src/app.js', // 应用程序入口
        vendors: './src/vendors.js' // 第三方库 入口
    }
}
// 应用场景： 多页面应用程序
module.export = {
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
};