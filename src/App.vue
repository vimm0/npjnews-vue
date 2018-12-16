<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import Vue from 'vue'
    import axios from 'axios'

    export default {
        name: 'app',
        created() {
            axios.defaults.baseURL = 'http://localhost:8000';
            // axios.defaults.headers['Access-Control-Allow-Origin'] = `*`
            // axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
            // axios.defaults.xsrfCookieName = 'csrftoken'
            // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            // PER CLIENT CONFIG
            // axios.defaults.auth = {
            //     username: 'client1',
            //     password: 'admin'
            // }
            // axios.interceptors.request.use((config) => {
            //     // this.$store.commit('loading', true)
            //     return config
            // }, (error) => {
            //     // this.$store.commit('loading', false)
            //     alert(error)
            //     return Promise.reject(error)
            // })
            // axios.interceptors.response.use((response) => {
            //     // this.$store.commit('loading', false)
            //     return response
            // }, (error) => {
            //     console.log(error)
            //     // this.$store.commit('loading', false)
            //     // if (error.response.status === 401) {
            //     //     // this.$store.commit('logout')
            //     //     // this.$snotify.error('Token Expired. Please login again.')
            //     //     // this.$store.dispatch('logout')
            //     // }
            //
            //     return Promise.reject(error)
            // })
            // global.axios = axios
            // global.Vue = Vue
            // global.Bus = new Vue()
        }
    }
</script>

<style>

</style>
