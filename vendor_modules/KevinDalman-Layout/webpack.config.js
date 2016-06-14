var webpack = require('webpack');
module.exports = {
     entry: './jquery.layout-latest.js',
     output: {
         path: './dist',
         filename: 'jquery.layout.min.js'
     },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" }
            // => "jade" loader is used for ".jade" files

        ]
    }
 };
