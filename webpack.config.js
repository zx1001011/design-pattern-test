var { resolve } = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: './bundle.js'
    }
}