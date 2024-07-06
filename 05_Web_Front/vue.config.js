module.exports = {
  devServer: {
    proxy: {
      '/market': {
        target: 'http://localhost:8801',
        changeOrigin: true,
        pathRewrite: { '^/market': '/market' },
        logLevel: 'debug',
      },
      '/exchange': {
        target: 'http://localhost:8801',
        changeOrigin: true,
        pathRewrite: { '^/exchange': '/exchange' },
        logLevel: 'debug',
      },
      '/uc': {
        target: 'http://localhost:8801',
        changeOrigin: true,
        pathRewrite: { '^/uc': '/uc' },
        logLevel: 'debug',
      },
      '/admin': {
        target: 'http://localhost:8801',
        changeOrigin: true,
        pathRewrite: { '^/admin': '/admin' },
        logLevel: 'debug',
      },
      '/chat': {
        target: 'http://localhost:8801',
        changeOrigin: true,
        pathRewrite: { '^/chat': '/chat' },
        logLevel: 'debug',
      },
      '/otc': {
        target: 'http://localhost:8801',
        changeOrigin: true,
        pathRewrite: { '^/otc': '/otc' },
        logLevel: 'debug',
      },
    },
  },
};