module.exports = {
    entry: {
        app: ['./javascripts/entry.js'],
    },

    output: {
        path: './public',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },

    resolve: {
        alias: {
            'server': '../servers/remote.js'
        }
    }
};