const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'Flexi App';

/**
 * Webpack Configuration
 */
const getPath = file => path.resolve(process.cwd(), file);

module.exports = {
    entry: {
        vendor: [
            'lodash',
            'react',
            'react-dom'
        ],
        bundle: ["babel-polyfill", path.join(dirApp, 'index')]
    },
    resolve: {
      alias: {
        react: path.resolve(process.cwd(), './node_modules', 'react')
      },
      modules: [
          dirNode,
          dirApp,
          dirAssets
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            _: 'lodash',
            React: 'react'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.ejs'),
            title: appHtmlTitle
        })
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },

            // EJS
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },

            // Optimize images
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: '65-90',
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    }
                  }
                },
              ],
            }
        ]
    }
};
