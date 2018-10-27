const path = require('path');
const serverConfig = {
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'lib.bundle.js'
    }
};
const clientConfig = {
    target: 'web',
    output: {
        filename: 'lib.js',
        path: path.resolve(__dirname, 'dist')
    }
};
module.export = [serverConfig, clientConfig]