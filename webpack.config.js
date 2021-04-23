const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: isProduction ? 'source-map' : false,
    devServer: {
        port: 9090,
        hot: true,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: { //因为可能会使用浏览器路由，刷新的时候需要重定向到根文件
            index: './index.html'
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            "~": path.resolve(__dirname, 'node_modules')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.(j|t)sx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript"
                ],
                plugins: [
                    ['import', {
                        libraryName: 'antd',
                        style: 'css'
                    }],
                ]

            },
            include: path.resolve('src'),
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                {
                    loader: 'css-loader'
                }
            ]
        }, {
            test: /\.less$/,
            use: [
                isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 3
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: ['autoprefixer']
                        }
                    }
                }, {
                    loader: 'px2rem-loader',
                    options: {
                        remUnit: 75,
                        remPrecision: 8
                    }
                },
                "less-loader"
            ]
        }, {
            test: /\.(jpg|png|gif|svg|jpeg)/,
            type: 'asset'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}