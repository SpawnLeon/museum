const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: [],
  output: {
    publicPath: '/spawnleon-JSFE2021Q3/museum/',
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
