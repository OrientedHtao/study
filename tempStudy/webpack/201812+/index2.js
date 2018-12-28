// 注意： webpack cli 应该避免的做法
/*
1. 在使用 webpack 命令行接口(CLI)（应该编写自己的命令行接口(CLI)，或使用 --env）时，访问命令行接口(CLI)参数
2. 导出不确定的值（调用 webpack 两次应该产生同样的输出文件）
3. 编写很长的配置（应该将配置拆分为多个文件）
*/

/* 配置 */
// 基本配置 webpack.config.js
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main.js'
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

// 导出一个 函数配置
module.exports = function (env, argv) {
    return {
        mode: env.production ? 'production': 'development',
        devtool: env.production ? 'source-map' : 'eval',
        plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize 
            // ??
        })
        ]
    }
}
// 导出一个 promise 对象
module.exports = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                entry: './src/main.js',
                output: {
                    filename: './index.js'
                    pathname: 
                }
            })
        }, 5000);
    })
}

// 导出多个配置对象， 对于针对多个构建目标（例如 AMD 和 CommonJS）打包一个 library 非常有用
module.exports = [{

},{

}]