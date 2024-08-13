const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseUrl = '/bonk'

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: baseUrl,
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: 'src/assets/404.html',
        templateParameters: {
          BASE_URL: '/bonk'
        }
      })
    ]
  }
})
