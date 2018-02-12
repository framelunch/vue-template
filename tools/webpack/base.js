const fs = require('fs');
const path = require('path');
const globby = require('globby');
const webpack = require('webpack');

const paths = {
  build: path.join(process.cwd(), 'build'),
  assets: path.join(process.cwd(), 'assets'),
  script: path.join(process.cwd(), 'src', 'scripts'),
  view: path.join(process.cwd(), 'src', 'views'),
};
paths.lib = path.join(paths.assets, 'lib');
paths.dllManifest = path.join(paths.lib, 'vendor-manifest.json');

const entry = {
  index: path.join(paths.script, 'index.ts'),
};

const manifest = (() => {
  try {
    fs.statSync(paths.dllManifest);
    return require(paths.dllManifest);
  } catch (_error) {
    return {};
  }
})();

module.exports = {
  /*
   * webpack configs
   */
  entry,
  output: {
    path: paths.build,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['json', '.vue', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.join(paths.view, 'helpers'),
          precompileOptions: {
            knownHelpersOnly: false,
          }
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.DllReferencePlugin({
      manifest,
      contest: __dirname,
    }),
  ],

  /*
   * not webpack configs
   */
  paths,
  views: globby.sync([
    path.join(paths.view, '**', '*.hbs'),
    path.join('!', paths.view, '**', '_*.hbs'),
  ]).map(template => ({
    template,
    filename: template.replace(`${paths.view}/`, '').replace(/\.hbs$/, ''),
  })),
};
