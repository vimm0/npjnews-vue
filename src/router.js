import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Category from './components/Category.vue'
import Reporter from './components/Reporter.vue'
import CategoriesPost from './components/CategoriesPost.vue'
import SinglePost from './components/SinglePost.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/article/:slug?/:id?',
            name: 'article-slug-id',
            component: Article,
        },
        {
            path: '/category/:slug?',
            name: 'category-slug',
            component: Category,
        },
        {
            path: '/reporter/:slug?',
            name: 'reporter-slug',
            component: Reporter,
        },
        {
            path: '/categories-post',
            // name: 'reporter-slug',
            component: CategoriesPost,
        },
        {
            path: '/single-post',
            // name: 'reporter-slug',
            component: SinglePost,
        },
        {
            path: '/about',
            // name: 'reporter-slug',
            component: About,
        },
        {
            path: '/contact',
            // name: 'reporter-slug',
            component: Contact,
        },

    ]
})
export default router
