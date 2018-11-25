var path = require('path');
var VueLoaderPlugin = require("vue-loader/lib/plugin.js");
//导出一个配置对象,webpack启动时,会默认来寻找webpack.config.js,读取文件中到处的配置对象,打包处理
module.exports = {
    //开发模式
    mode: "development", 
    //指定打包的入口
    entry: "./src/main.js",
    output: {
      //指定打包后的文件目录
      path: path.join(__dirname, 'dist'), 
      //指定打包后的文件
      filename: 'bundle.js' 
    },
    module:{
      rules:[
        //css的loader器
        {test:/\.css$/,use:['style-loader','css-loader']},
        //图片的loader器
        {test:/\.(jpg|jpeg|png|gif)$/,use:['url-loader?limit=3000']},
        //字体文件的loader器
        {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},
        //babel处理高级js语法的loader器
        {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
        //vue的loader器
        {test:/\.vue$/,use:['vue-loader']},
        //配置scss的loader
        {test:/\.scss/,use:['style-loader','css-loader','sass-loader']}
      ]
    },
    plugins:[
      new VueLoaderPlugin()  //实例vue-loader的实例对象，为了加载.vue组件
    ]
  
}