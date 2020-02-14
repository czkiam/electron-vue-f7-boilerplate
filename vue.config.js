// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        appId: 'electron.vue.f7.test',
        mac: {
          category: 'your.app.category.type'
        },
        linux: {
          target: {
            target: 'deb',
            arch: ['armv7l']
          },
          category: 'Utility'
        },
        win: {
          target: [
            {
              target: 'nsis',
              arch: ['x64', 'ia32']
            }
          ]
        }
      }
    }
  }
};
