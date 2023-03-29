const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = './dist/';

module.exports = {
  entry: ['./src/scripts/index.js'],
  output: {
    path: path.join(__dirname, buildPath),
    filename: '[name].[hash].js'
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              "@babel/plugin-proposal-class-properties",
              [ "@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        },
        exclude: path.resolve(__dirname, './node_modules/')
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|tga|gltf|babylon|mtl|pcb|pcd|prwm|obj|stl|mat|mp3|ogg|otf)$/i,
        use: 'file-loader',
        exclude: path.resolve(__dirname, './node_modules/')
      },
      {
        test: /\.(vert|frag|glsl|shader|txt)$/i,
        use: 'raw-loader',
        exclude: path.resolve(__dirname, './node_modules/')
      },
      {
        type: 'javascript/auto',
        test: /\.(json)/,
        include: [path.resolve(__dirname, 'src')],
        exclude: path.resolve(__dirname, './node_modules/'),
        use: [{
          loader: 'json-loader'
        }],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      'title': 'Frontend starter',
      'template': 'src/index.html'
    })
  ]
}
