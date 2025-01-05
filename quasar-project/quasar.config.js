/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')

module.exports = configure(function (/* ctx */) {
  return {
    // Boot files
    boot: ['firebase'],

    // CSS files
    css: [
      'app.scss',
      '~@fortawesome/fontawesome-free/css/all.min.css'
    ],

    // Quasar Extras (icons/fonts)
    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    // Build configuration
    build: {
      vueRouterMode: 'hash', // options: 'hash' or 'history'

      alias: {
        vue: 'vue/dist/vue.esm-bundler.js' // Enable runtime + compiler
      },

      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20'
      },

      vitePlugins: [
        ['vite-plugin-checker', {
          eslint: {
            lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"'
          }
        }]
      ]
    },

    // Dev server configuration
    devServer: {
      open: true // opens browser window automatically
    },

    // Quasar Framework configuration
    framework: {
      config: {
        dark: true
      },

      // Quasar plugins (if needed)
      plugins: []
    },

    // Animations
    animations: [],

    // Source files override (optional)
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },

    // SSR configuration
    ssr: {
      pwa: false,
      prodPort: 3000,

      middlewares: [
        'render' // keep this as the last middleware
      ]
    },

    // PWA configuration
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json'
    },

    // Capacitor configuration
    capacitor: {
      hideSplashscreen: true
    },

    // Electron configuration
    electron: {
      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // Electron packager options
      },

      builder: {
        appId: 'quasar-project'
      }
    },

    // Browser Extension (BEX) configuration
    bex: {
      contentScripts: [
        'my-content-script'
      ]
    }
  }
})
