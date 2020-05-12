const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // 웹 펙 빌드 js 파일
  // entry: "./day1/helloWorld.js",
  entry: "./day1/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  devServer: {
    // 루트 폴더 설정
    contentBase: path.resolve("./build"),
    // entry 포인트 파일 설정
    index: "index.html",
    // 포트
    port: 9000
  },
  mode: "none",
  module: {
    rules: [
      // 리액트 빌드를 위한 js 파일 read 옵션
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        // html 파일를 읽을 수 있게 설정
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true // minimize 옵션을 통해 output 파일의 코드를 one 라인 코드로 생성한다.
            }
          }
        ]
      },
      // css 파일을 읽을 수 있게
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      // scss 파일을 읽을 수 있게

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    // html 파일 리턴
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname + "/public/index.html"), // 번들링할 html 파일
      filename: 'index.html' //번들링된 html 파일
    }),
    // css 파일 리턴
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};

