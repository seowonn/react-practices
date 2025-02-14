const path = require('path');

module.exports = function(env) {
    return {
        mode: "none",
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('../backend/src/main/resources'),
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules:[{
                test: /\.js/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(c|sa|sc)ss$/i,
                use:['style-loader', {
                        loader: 'css-loader',
                        options: {
                            // true로 설정하면 SCSS, SCC 파일을 자동으로 "CSS 모듈" 방식으로 변환해서 사용할 수 있게 된다.
                            modules: true 
                        }
                    }, 'sass-loader']
            }, {
                test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
                type: 'asset/resource'
            }]
        },
        devServer: {
            host: '0.0.0.0',
            port: 9090,
            static: {
                directory: path.resolve('public'),
                watch: true
            },        
            liveReload: true,
            compress: true,
            hot: false
        }    
    };
}