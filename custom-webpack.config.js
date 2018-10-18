const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');

module.exports = {
  plugins: [
    new MergeJsonWebpackPlugin({
      output: {
        groupBy: [
          {
            pattern: './src/**/en.partial.json',
            fileName: './i18n/en.merged.json'
          },
          {
            pattern: './src/**/ro.partial.json',
            fileName: './i18n/ro.merged.json'
          }
        ]
      }
    })
  ]
};
