// webpack 官方文档 概念模块  学习。 比较浅显
module.exports = {
    // 入口 entry
    // 1. entry String 字符串 简写 单入口
    entry: './src/main.js',
    // 2. entry Object 单个入口 书写格式
    entry: {
        main: '.src/main.js'
    }
    // 3. entry 是数组时候，是什么情况？？ TODO
    // 4. entry Object 是可扩展 配置
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
    /*
    使用场景：单页应用程序
    应用程序和 第三方库入口，入口处表达：在 创建依赖图时候，将 程序 和第三方库 完全分离，形成相互独立的 依赖图；
    常使用于: 只有一个入口起点的  单页应用程序；
    分开入口，可以 让 使用 CommonsChunkPlugin 插件。 在app中 引入 verdors 第三方库
    */
    // 5. entry Objct 
    entry: {
        pageOne: './src/pageOne.js',
        pageTwo: './src/pageTwo.js',
        pageThree: './src/pageThree.js'
    }
    /*
    使用场景：多页面应用程序
    需要3个独立分离的依赖图， 多页面应用中，每次页面跳转时， 服务器会获取一个新的html文档，页面会重新加载文档，资源会被重新下载
    可以 使用 CommonsChunkPlugin 插件，为每个页面间的应用程序共享代码创建 bundle
    */


    // **关于缓存，说一嘴。
    // **通过 修改 output.filename 修改 打包后输出的 文件名字，让浏览器 能使用缓存，其中使用版本号情况。
    output :{
        filename: '[name].[hash].js' // 一个构建相关的hash
        filename: '[name].[chunkhash].js' // 一个chunk 相关的 hash  chunkhash  优于 hash

    } 

    // 出口 ouput： 永远只有一个输出 出口
    // 1. 最低配置， output Object  includes attr ==>  path filename
    output: {
        filename: 'bundle.js', //输出后的文件名字
        path: '/home/src/dist/assets' // 输出时候，的保存 文件 目录位置
    }
    // 2. output 使用占位符 确保每个文件具有 唯一的名字
    /*
    配置创建了多个单独的 "chunk": 多个入口点 或 使用了CommonsChunkPlugin 插件
    */
    output:{
        filename: '[name].js', // [name] 这是一个占位符
        path: __dirname + '/dist'
    }
    // 3. output 高阶 demo
    output: {
        path: '/home/src/dist/[hash]',
        publicPath: 'https://cdn.aliyun/com/assets/[hash]/'
    }
    /*
    高阶中，使用了占位符，hash  
    使用了 输出 文件 公共目录设置，
    */
    // 4. output 高阶 公共目录 ，如果在运行前不知道，可以 public 置空。 在入口起点文件运行时动态设置。如果你在编译时不知道 publicPath，你可以先忽略它，并且在入口起点设置 __webpack_public_path__
    entry: { // output 中 publicPath : 空时候，需要设置 运行时 赋予 publicPath 
        __webpack_public_path__ = myRuntimePublicPath
    }

    // mode： 相应模式， 可以方便用户 针对不同模式，做不同的优化处理
    // 1. mode ： production  生产环境下
    mode: 'production'
    // 2. mode 可以通过命令设置
    webpack --mode=production
    /* mode 取值
    development webpack 会设置 process.env.NODE_ENV = "development" 于此同时启动一些插件，做优化
    production webpack 会设置 process.env.NODE_ENV ="production" 与此同时 启动一些 插件 做优化
     两种模式 所启动的插件 不同。
    none
    */

    // loader 主要使用是将 其他语言转换为js ,webpack 只能运行js , es6 都需要 babel-loader 转化成 es5 让浏览器使用。
    // 1. loader 最初版本 ==> 这里面的loader 都必须在node-module 里面
    module: {
        rules: [
        {test:  /\.css$/, use: 'css.loader'},
        {test: /\.js$/, use: 'babel-loader'},
        {test: /\.ts$/, use: 'ts-loader'}
        ]
    }
    // 2. 可以有三种方式 使用loader： 配置文件，如上； 内联， cli 上添加
    import Styles from 'style-loader!css-loader?modules!./styles.css'; // 内联 通过import 引用
    webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader' // 运行命令上面 使用，命令使用方式 很陌生

    // plugin 插件使用 概念部分解释不多，

    


}