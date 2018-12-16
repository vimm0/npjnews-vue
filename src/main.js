import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import { sync } from 'vuex-router-sync'

// These are the routes we're going to create.
import router from './router.js';
import Vuex from 'vuex'

Vue.use(Vuex)
// sync(store, router)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
