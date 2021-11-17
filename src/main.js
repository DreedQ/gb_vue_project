import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import contextMenu from "./plugins/ContextMenu/index"
import modal from "./plugins/ModalWindow/index.js"
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.use(contextMenu)
Vue.use(modal)

new Vue({
    // comments: { App },
    render: h => h(App),

    store,
    vuetify,
    router
}).$mount('#app')