const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'release'),
        filename: './bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                "presets": [
                    [
                        '@babel/preset-env',
                        {
                            useBuiltIns: 'usage',
                            corejs: {
                                version: 3
                            },
                            targets: {
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }
                    ]
                ],
            }
        }]
    },
    devServer: {
        // 从contentBase设置的目录下面获取文件
        contentBase: path.join(__dirname, './release'),
        open: true,
        port: 3000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8880/'
            }
        }
    },
    mode: 'development',
    devtool: 'eval-source-map'
}