const path = require('path');
module.exports = {
        entry: './src/index.js',
        mode: 'development',
        output: {
                filename: 'main.js',
                path: path.resolve(__dirname, 'dist')
        } ,
        module: {
                rules: [
                        {
                                test: /\.(c|sc|sa)ss$/,
                                use: [
                                        'style-loader', {
                                                loader: 'css-loader', 
                                                options: {
                                                        sourceMap: true
                                                } 
                                        }, {
                                                loader: 'postcss-loader',
                                                options: {
                                                        ident: 'postcss', // 唯一标识   值是随意的
                                                        sourceMap: true,
                                                        plugins: loader => [
                                                                require('autoprefixer')({browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']})   // 浏览器分额大于15%
                                                        ]        
                                                } 
                                        }, {
                                                loader: 'sass-loader', 
                                                options: {
                                                        sourceMap: true
                                                } 
                                        }
                                ]
                        }
                ]
        }
}