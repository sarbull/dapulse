const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const webpack = require('webpack');

const API_URL = process.env.API_URL || 'http://localhost/';

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(API_URL)
    }),
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
