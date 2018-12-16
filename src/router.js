import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Category from './components/Category.vue'
import Reporter from './components/Reporter.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: 'article/:slug?/:id?',
            name: 'article-slug-id',
            component: Article,
        },
        {
            path: 'category/:slug?',
            name: 'category-slug',
            component: Category,
        },
        {
            path: 'reporter/:slug?',
            name: 'reporter-slug',
            component: Reporter,
        },

    ]
})
export default router
