// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.css';

// Import App Component
import App from './app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);


Vue.config.productionTip = false

new Vue({
  el: '#app',
  // Register App Component
  components: {
    app: App
  },
  render: h => h(App)
})
