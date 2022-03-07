module.exports = {
  publicPath: '/',
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/marketing/api/': {
        target: 'http://admin-test.martech.seeksdata.com',
        changeOrigin: true
      },
      '/financestore/api/': {
        target: 'http://test.seeksdata.com',
        changeOrigin: true
      },
      '/uaa/': {
        target: 'http://test.seeksdata.com',
        changeOrigin: true
      },
      '/veeker/': {
        target: 'http://test.seeksdata.com',
        changeOrigin: true,
        pathRewrite: {
          '^/veeker': '/veeker/'
        }
      },
      '/matrix/': {
        target: 'http://veeker-test.seeksdata.com/',
        changeOrigin: true
      }
    }
  }
}
