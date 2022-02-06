// let mode = "development"
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    // mode: mode,
    devtool:"source-map",

    output:{
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename:"images/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader",
                }
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: "" }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
          },
        hot: true,
    },

   performance: {
        maxEntrypointSize: 1024 * 1024,
        maxAssetSize: 1024 * 1024
   },

   optimization: {
       minimizer: [
           `...`,
           new CssMinimizerPlugin()
        ],
    },
}