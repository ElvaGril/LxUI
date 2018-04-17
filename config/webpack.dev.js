const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        'js/app': './src/index.js',
        'js/static/vendor': ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom']
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: path.join(__dirname, ''),
        hot: true,
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-2'],
                        plugins: ['react-hot-loader/babel', 'transform-decorators-legacy']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['last 2 versions', 'Android >= 4.0', 'iOS 7'],
                                    remove: true
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'static/[name].[ext]', // 配置文件名
                        publicPath: '/' // 配置文件目录
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'js/static/vendor', // 提取公共组件
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'js/static/manifest.js',
            minChunks: Infinity
        })
    ]
}

