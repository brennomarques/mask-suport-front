import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://db-registropronto.soluti.com.br/registro/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://db-registropronto.soluti.com.br/registro/'
        })
    }
})