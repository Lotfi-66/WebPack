const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // 1. On lui donne son point d'entrée de l'application
    entry: path.resolve(__dirname,'./src/index.js'),
    module: {
        //on va lui donner des regles
        rules: [
            {
                // on lui dit que pour tous les fichiers js on les traite avec babel-loader
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
              //on lui dit que pour les fichiers css on va utiliser style-loader et cc-loader
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        //on lui dit qu'on va utiliser les extensions .js
        extensions: ['*','.js']
    },

    // 2. On lui donne son point de sortie de l'application
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },

    // 3. On lui donne le devServer pour lancer le serveur
    devServer: {
        static: path.resolve(__dirname,'./dist'),
    },
}