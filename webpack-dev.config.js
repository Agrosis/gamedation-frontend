module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './javascripts/entry.js'],
    },

    output: {
        path: './public/built',
        publicPath: '/built',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    }
};