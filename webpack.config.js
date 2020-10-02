const path = require('path');

module.exports = {
    entry: {
        Login : path.resolve(__dirname, 'frontend/src/Login.js'),
        Register : path.resolve(__dirname, 'frontend/src/Register.js'),
    },
    // entry: {main: '/home/toruitas/Documents/GitHub/LollipopAI/django_backend/lollipopAI/frontend/src/index.js'},
    output: {
        // where compiled files go
        path: path.resolve(__dirname, "frontend/static/frontend/public/"),

        // 127.0.0.1/static/frontend/public/ where files are served from
        publicPath: "/static/frontend/public/",
        filename: '[name]_main.js',  // the same one we import in index.html
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                // regex test for js and jsx files
                test: /\.(js|jsx|mjs)?$/,
                // don't look in any node_modules/ or bower_components/ folders
                exclude: /(node_modules|bower_components)/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/env", "@babel/preset-react"] }
                },
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }

        ],
    },
    devServer: {
        writeToDisk: true,
    }
};
