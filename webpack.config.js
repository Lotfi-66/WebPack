const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //1. on lui donne sont point d enree de l application
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'production',
    module: {
        //on lui donne des regles
        rules: [
            {
                //on lui dit que c'est un fichier js on utilise babelloader
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env',
                                        {}

                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader'

                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['*', '.js']
    },

    //2. on lui donne son point de sortie, l endroit ou on compile le code
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    //3. on lui DONNE LE DEVSERVER POUR LANCER LE SERVEUR
    devServer: {
        static: path.resolve(__dirname, './dist')
    }
}
