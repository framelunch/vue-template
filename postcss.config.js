const plugins = {
  'postcss-import': {},
  'postcss-custom-properties': {},
  'postcss-custom-media': {},
  'postcss-nested': {},
  'postcss-mixins': {},
  'postcss-color-hex-alpha': {},
  'postcss-simple-vars': {},
  'postcss-fixes': {},
  'postcss-url': {},
  'autoprefixer': {},
};

if (process.env.NODE_ENV === 'production') {
  plugins.cssnano = {};
};

module.exports = { plugins };
