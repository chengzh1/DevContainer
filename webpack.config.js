const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        library: "DevOnly",
        libraryTarget: 'commonjs2'
    },
    externals: ['react', 'react-dom', 'prop-types'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                     presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
}