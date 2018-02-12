const path = require('path');
const webpack = require('webpack');

const { paths } = require('./base');
const { dependencies } = require(path.join(process.cwd(), 'package.json'));

const ignoreList = [
  'sanitize.css',
  'libraries-frontend-framelunch',
];
const libPath = path.join(paths.assets, 'lib');
const library = '[name]_library';

module.exports = {
  entry: {
    vendor: Object.keys(dependencies).filter(name => !ignoreList.includes(name)),
  },
  output: {
    library,
    path: path.join(paths.lib, 'js'),
    filename: 'vendor.dll.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"production"',
    }),
    new webpack.DllPlugin({
      path: paths.dllManifest,
      name: library,
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
