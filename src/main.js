import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { sync } from 'vuex-router-sync'

// These are the routes we're going to create.
import router from './router.js';
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(Vuex)
sync(store, router)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
