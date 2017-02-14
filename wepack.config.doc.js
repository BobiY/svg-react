//把css/scss/less文件从js文件中分离出来的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//自动加厂商前缀
var autoprefixer = require("autoprefixer");
//自动提取公共模块
var CommonsChunkPlgin = require("CommonsChunkPlgin");
//webpack配置
module.exports = {
  //在这里制定分离出来的css文件的名字
  plugins:[new ExtractTextPlugin("style.css"),new CommonsChunkPlgin("commons.js",["p1","p2","admin-common.js"])],
  //自动在样式前加上浏览器前缀
  postcss:[autoprefixer({browsers:["last 2 version"]})],
  //entry表示入口文件，可以有多个，也可以只有单个，如果是一个数组，则会将所有文件打包到最后一个文件中输出
  //__dirname表示的是根目录
  entry:{
    app: __dirname + "/src/app.js",
    mode: __dirname + "/src/mode.js",
    array:  [__dirname + "./src/array.js",__dirname + "./src/array1.js"]
  },
  //output是输出的文件，path表示输出文件虽在文件夹，[name]代表的是上面entry的键，打包好的文件依次是
  //app.js/mode.js/array.js
  output:{
    path:__dirname + "./public",
    filename:"[name].js"
  },
  //loader有两种写法，webpack1和2的写法有很大的出入，但是基本的格式是没有变化的，首先来看一下1的写法
  module:{
    loaders:[
      //用来编译js文件的loader
      {
        test:/\.js$/,
        loader:"babel",
        //此项表示要使用es6的语法，并且是使用的是react进行的编写
        query:{
          presets:["es2015","react"]
        }
      },
      //编译css文件的loader
      {
        test:/\.css$/,
        loader:"style!css"
        //loader:ExtractTextPlugin.extract("style","css")
      },
      //编译scss文件的loader
      {
        test:/\.scss$/,
        loader:"style!css!sass"
        //loader:ExtractTextPlugin.extract("style","css!sass")
      },
      //编译图片格式为png或者jpg的loader
      {
         test:/\.(png|jpg)$/,
         loader:"url!limit=8192"
      }
    ]
  },
  //webpack服务器配置
  devServer:{
    contentBase:__dirname,//服务器加载的页面在哪个文件夹下
    colors:true,//彩色模式
    inline:true,//热更新
    historyApiFallback:true//
  },
  resolve:{
    //别名配置，配置以后，可直接在js文件里面通过require/import引用
    alias：{
      "d3":"d3/d3.min.js"
    }
  }
};
