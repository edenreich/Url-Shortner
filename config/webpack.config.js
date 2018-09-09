const path = require('path');

module.exports = {
    entry: './src/Client',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'Client.js',
        path: path.resolve(__dirname, './src/public/assets/js'),
    },
};