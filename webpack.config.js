module.exports = {
    resolve: {
        alias: {
            'styles' : path.resolve(__dirname, './src/scss')
        }
    },
    module:{
        rules: [
            {
                loader: "babel-loader",
                test: /\.js/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
                use: [
                    'url-loader?name=assets/[name].[ext]',
                ]
            }
       ]
    },
    build: {
        assetsPublicPath: '/',
        assetsSubDirectory: 'assets'
    }
}