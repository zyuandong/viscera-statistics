const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: Path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: Path.join(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'sass-loader'
      ]
    },{
      test: /\.(gif|png|jpg|jpeg|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'icon-[name].[ext]'
        }
      }]
    }]
  },

  plugins: [
    /**
     * TODO
     */
    /*new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),*/
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
    /*new HtmlWebpackPlugin({
      : __dirname + "/src/s/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
    })*/
  ]
};

if (true) {
  /**
   * source-map                    完整、慢
   * cheap-module-source-map       不带列映射、较快
   * eval-source-map               完整、性能和安全隐患、很快
   * cheap-module-eval-source-map  不带列映射、性能和安全隐患、最快
   * @type {string}
   */
  config.devtool = 'cheap-module-eval-source-map';
  /**
   * TODO
   * @type {{port: number, host: string, overlay: {errors: boolean}, historyFallback: {}, open: boolean}}
   */
  config.devServer = {
    port: 8081,
    inline: true,
    open: true,
    hot: true,
    historyApiFallback: true
  };
  config.resolve = {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  };
  config.plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config;
