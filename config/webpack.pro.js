const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        'js/app': './src/index.js',
        'js/static/vendor': ['whatwg-fetch', 'babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom']
    },
    output: {
        filename: '[name].[hash].min.js',
        chunkFilename: '[name].[hash].min.js',
        path: path.resolve(__dirname, '../dist')
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
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true, //css压缩
                            importLoaders: 1
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['last 2 versions', 'Android >= 4.0', 'iOS 7'],
                                    remove: true
                                })
                            ]
                        }
                    }, 'sass-loader']
                })
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
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin({
            filename: getPath => getPath('css/[name].css').replace('css/js', 'css')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'js/static/vendor', // 提取公共组件
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'js/static/manifest.js',
            minChunks: Infinity
        }),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': { // 配置环境
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}

