import 'leaflet/dist/leaflet.css';
import 'animate.css';
import VueAnimated from '@codekraft-studio/vue-animated';

Vue.use(VueAnimated);


import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import { Icon } from 'leaflet';

// delete Icon.Default.prototype._getIconUrl;
// Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });




Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')