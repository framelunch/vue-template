const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const { entry, output, resolve, module: { rules }, plugins, views, paths } = require('./base');
const viewData = require(path.join(paths.view, '/data.json'));

const appendRules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      'postcss-loader',
    ],
  },
];

module.exports = {
  entry: Object.entries(entry).reduce((tmp, [key, value]) => {
    tmp[key] = [
      'webpack-dev-server/client?http://localhost:13000',
      'webpack/hot/only-dev-server',
      ...(typeof value === 'string' ? [value] : value),
    ];
    return tmp;
  }, {}),
  output,
  resolve,
  plugins: [
    ...plugins,
    new webpack.NamedModulesPlugin(),
    ...views.map(({ template, filename }) => new HtmlWebpackPlugin({
      template,
      filename: `${filename}.html`,
      inject: false,
      conf: Object.assign({ viewPath: paths.view }, viewData.common, viewData[filename] ? viewData[filename] : {}),
    })),
    new DashboardPlugin(),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        files: [
          'src/views/**/*.hbs',
          'assets/**/*',
        ],
        proxy: 'http://localhost:13000',
      },
      {
        reload: false,
      }
    ),
  ],
  module: {
    rules: [...rules, ...appendRules],
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: output.publicPath,
    contentBase: [paths.assets],
    port: 13000,
  },
};
