const path = require('path');

module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, './src/js/app.js'),
    path.resolve(__dirname, '/src/scss/common.scss')],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [

                    {
                        loader: 'file-loader',
                        options: { outputPath: '../css/', name: 'bundle.css' }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './assets/js'),
        filename: 'bundle.js',
    },
};