module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './javascripts/entry.js'],
    },

    output: {
        path: './public/built',
        publicPath: '/built/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: "public",
        publicPath: 'http://localhost:8080/built/',
        historyApiFallback: true
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    }
};