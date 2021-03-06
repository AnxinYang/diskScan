const path = require('path');

module.exports = {
    devtool: 'none',
    entry: {
        client: './app.ts',
        worker: './worker.ts'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    target: "electron-renderer",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};