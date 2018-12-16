import Vuex from 'vuex'
import Vue from 'vue'
// import axios from 'axios'
// import router from './router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articles: '',
        categories: '',
        internationalNews: '',
        breakingNews: '',
    },
    mutations: {
        addArticle(state, payload) {
            state.articles = payload
        },
        addCategories(state, payload) {
            state.categories = payload
        },
        addInternationalNews(state, payload) {
            state.internationalNews = payload
        },
        addBreakingNews(state, payload) {
            state.breakingNews = payload
        }
    },
    // actions: {},
    // getters: {...}

    strict: process.env.NODE_ENV !== 'production'
})

export default store
