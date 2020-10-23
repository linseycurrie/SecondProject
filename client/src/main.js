import 'leaflet/dist/leaflet.css';
import L from 'vue2-leaflet';
import Vue from 'vue'
import App from './App.vue'




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
