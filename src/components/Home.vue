<template>
    <div>
        <div class="hero-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-8">
                        <!-- Breaking News Widget -->
                        <div class="breaking-news-area d-flex align-items-center">
                            <div class="news-title">
                                <p>Breaking News</p>
                            </div>
                            <div id="breakingNewsTicker" class="ticker">
                                <ul>
                                    <li v-for="news in this.$store.state.breakingNews" :key="news.id">
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: news.date_url, id: news.id}}">
                                            {{ news.title
                                            }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Breaking News Widget -->
                        <div class="breaking-news-area d-flex align-items-center mt-15">
                            <div class="news-title title2">
                                <p>International</p>
                            </div>
                            <div id="internationalTicker" class="ticker">
                                <ul>
                                    <li v-for="news in this.$store.state.internationalNews" :key="news.id">
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: news.date_url, id: news.id}}">
                                            {{news.title}}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Hero Add -->
                    <div class="col-12 col-lg-4">
                        <div class="hero-add">
                            <a href="#"><img src="img/bg-img/hero-add.gif" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="featured-post-area">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-8">
                        <div class="row">

                            <!-- Single Featured Post -->
                            <div class="col-12 col-lg-7">
                                <div class="single-blog-post featured-post"
                                     v-for='(article, index) in $store.state.articles.slice(3,4)'>
                                    <div class="post-thumb">
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}">
                                            <img
                                                    :src="`img/bg-img/${16+index}.jpg`" alt=""></router-link>
                                    </div>
                                    <div class="post-data">
                                        <router-link :to="{name: 'category-slug', params: {slug: cat.slug}}"
                                                     class="post-catagory"
                                                     v-for="cat in article.category" :key="cat.slug">{{cat.title}}
                                        </router-link>
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"
                                                class="post-title">
                                            <h6>{{article.title}}</h6>
                                        </router-link>
                                        <div class="post-meta">
                                            <p class="post-author">By
                                                <router-link
                                                        :to="{name: 'reporter-slug', params: {slug: article.reporter.slug}}">
                                                    {{article.reporter.name}}
                                                </router-link>
                                            </p>
                                            <p class="post-excerp">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Nam eu metus sit
                                                amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus
                                                nunc maximus. Integer
                                                convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue
                                                lectus, a venenatis massa.
                                                Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem. </p>
                                            <!-- Post Like & Post Comment -->
                                            <div class="d-flex align-items-center">
                                                <a href="#" class="post-like"><img src="img/core-img/like.png" alt="">
                                                    <span>392</span></a>
                                                <a href="#" class="post-comment"><img src="img/core-img/chat.png"
                                                                                      alt=""> <span>10</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-5">
                                <!-- Single Featured Post -->
                                <div class="single-blog-post featured-post-2"
                                     v-for="(article, index) in $store.state.articles.slice(0,2)">
                                    <div class="post-thumb">
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}">
                                            <img
                                                    :src="`img/bg-img/${17+index}.jpg`" alt=""></router-link>
                                    </div>
                                    <div class="post-data">
                                        <router-link :to="{name: 'category-slug', params: {slug: cat.slug}}"
                                                     class="post-catagory"
                                                     v-for="cat in article.category" :key="cat.slug">{{ cat.title }}
                                        </router-link>
                                        <div class="post-meta">
                                            <router-link
                                                    :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"
                                                    class="post-title">
                                                <h6>{{article.title}}</h6>
                                            </router-link>
                                            <!-- Post Like & Post Comment -->
                                            <div class="d-flex align-items-center">
                                                <a href="#" class="post-like"><img src="img/core-img/like.png" alt="">
                                                    <span>392</span></a>
                                                <a href="#" class="post-comment"><img src="img/core-img/chat.png"
                                                                                      alt=""> <span>10</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <!-- Single Featured Post -->
                        <div class="single-blog-post small-featured-post d-flex"
                             v-for="(article, index) in $store.state.articles">
                            <div class="post-thumb">
                                <router-link
                                        :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}">
                                    <img
                                            :src="`img/bg-img/${19+index}.jpg`" alt=""></router-link>
                            </div>
                            <div class="post-data">
                                <router-link :to="{name: 'category-slug', params: {slug: cat.slug}}"
                                             class="post-catagory"
                                             v-for="cat in article.category" :key="cat.slug">{{cat.title}}
                                </router-link>
                                <div class="post-meta">
                                    <router-link
                                            :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"
                                            class="post-title">
                                        <h6>{{ article.title }}</h6>
                                    </router-link>
                                    <p class="post-date"><span>{{ formatAMPM(new Date(article.created))}} </span> |
                                        <span>{{ new
                    Date(article.created).toDateString()}}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popular-news-area section-padding-80-50">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="section-heading">
                            <h6>Popular News</h6>
                        </div>

                        <div class="row">
                            <!-- Single Post -->
                            <div class="col-12 col-md-6" v-for="(article, index) in $store.state.articles.slice(0,4)">
                                <div class="single-blog-post style-3">
                                    <div class="post-thumb">
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}">
                                            <img
                                                    :src="`img/bg-img/${12 + index}.jpg`" alt=""></router-link>
                                    </div>
                                    <div class="post-data">
                                        <router-link :to="{name: 'category-slug', params: {slug: cat.slug}}"
                                                     class="post-catagory"
                                                     v-for="cat in article.category" :key="cat.slug">{{cat.title}}
                                        </router-link>
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"
                                                class="post-title">
                                            <h6>{{ article.title }}</h6>
                                        </router-link>
                                        <div class="post-meta d-flex align-items-center">
                                            <a href="#" class="post-like"><img src="img/core-img/like.png" alt="">
                                                <span>392</span></a>
                                            <a href="#" class="post-comment"><img src="img/core-img/chat.png" alt="">
                                                <span>10</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4">
                        <div class="section-heading">
                            <h6>Info</h6>
                        </div>
                        <!-- Popular News Widget -->
                        <div class="popular-news-widget mb-30">
                            <h3>4 Most Popular News</h3>

                            <!-- Single Popular Blog -->
                            <div class="single-popular-post"
                                 v-for="(article, index) in $store.state.articles.slice(0,4)">
                                <router-link
                                        :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}">
                                    <h6><span>{{ `${index+1}` }}</span>{{article.title}}</h6>
                                </router-link>
                                <p><span>{{ formatAMPM(new Date(article.created))}} </span> | <span>{{ new
                    Date(article.created).toDateString()}}</span></p>
                            </div>
                        </div>

                        <!-- Newsletter Widget -->
                        <div class="newsletter-widget">
                            <h4>Newsletter</h4>
                            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus.</p>
                            <form action="#" method="post">
                                <input type="text" name="text" placeholder="Name">
                                <input type="email" name="email" placeholder="Email">
                                <button type="submit" class="btn w-100">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-post-area bg-img bg-overlay" style="background-image: url(img/bg-img/bg1.jpg);">
            <div class="container">
                <div class="row justify-content-center">
                    <!-- Single Video Post -->
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="single-video-post">
                            <img src="img/bg-img/video1.jpg" alt="">
                            <!-- Video Button -->
                            <div class="videobtn">
                                <a href="https://www.youtube.com/watch?v=5BQr-j3BBzU" class="videoPlayer"><i
                                        class="fa fa-play"
                                        aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Single Video Post -->
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="single-video-post">
                            <img src="img/bg-img/video2.jpg" alt="">
                            <!-- Video Button -->
                            <div class="videobtn">
                                <a href="https://www.youtube.com/watch?v=5BQr-j3BBzU" class="videoPlayer"><i
                                        class="fa fa-play"
                                        aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Single Video Post -->
                    <div class="col-12 col-sm-6 col-md-4">
                        <div class="single-video-post">
                            <img src="img/bg-img/video3.jpg" alt="">
                            <!-- Video Button -->
                            <div class="videobtn">
                                <a href="https://www.youtube.com/watch?v=5BQr-j3BBzU" class="videoPlayer"><i
                                        class="fa fa-play"
                                        aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="editors-pick-post-area section-padding-80-50">
            <div class="container">
                <div class="row">
                    <!-- Editors Pick -->
                    <div class="col-12 col-md-7 col-lg-9">
                        <div class="section-heading">
                            <h6>Editor’s Pick</h6>
                        </div>
                        <div class="row">
                            <!-- Single Post -->
                            <div class="col-12 col-lg-4" v-for="(article, index) in $store.state.articles">
                                <div class="single-blog-post">
                                    <div class="post-thumb">
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}">
                                            <img
                                                    :src="`img/bg-img/${1 + index}.jpg`" alt=""></router-link>
                                    </div>
                                    <div class="post-data">
                                        <router-link
                                                :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"
                                                class="post-title">
                                            <h6>{{article.title}}</h6>
                                        </router-link>
                                        <div class="post-meta">
                                            <div class="post-date"><a href="#"><span>{{ new
                    Date(article.created).toDateString()}}</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- World News -->
                    <div class="col-12 col-md-5 col-lg-3">
                        <div class="section-heading">
                            <h6>World News</h6>
                        </div>

                        <!-- Single Post -->
                        <div class="single-blog-post style-2"
                             v-for="(article, index) in $store.state.articles.slice(0,5)">
                            <div class="post-thumb">
                                <router-link
                                        :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}">
                                    <img
                                            :src="`img/bg-img/${7 + index}.jpg`" alt=""></router-link>
                            </div>
                            <div class="post-data">
                                <router-link
                                        :to="{name: 'article-slug-id', params: {slug: article.date_url, id: article.id}}"
                                        class="post-title">
                                    <h6>{{article.title}}</h6>
                                </router-link>
                                <div class="post-meta">
                                    <div class="post-date"><a href="#"><span>{{ new
                    Date(article.created).toDateString()}}</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-add-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-add">
                            <a href="#"><img src="img/bg-img/footer-add.gif" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                article: '',
                categories: ''
            }
        },
        created() {
            let self = this;
            axios.get('article')
                .then(response => {
                    self.$store.commit('addArticle', response.data)
                    self.article = response.data
                    console.log(response);
                })
                .catch(e => {
                    console.log(error);
                    // this.errors.push(e)
                })
            axios.get('category')
                .then(function (response) {
                    self.$store.commit('addCategories', response.data)
                    self.categories = response.data
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios.get('article/?category__slug=international-news')
                .then(function (response) {
                    console.log(self)
                    self.$store.commit('addInternationalNews', response.data)
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios.get('article/?category__slug=breaking-news')
                .then(function (response) {
                    self.$store.commit('addBreakingNews', response.data)
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            // let url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=a9eac86b961ece1768b402204cc02d63";
            // axios
            //   .get(url)
            //   .then(response => {
            //     console.log(response)
            //   })
        },
        // mounted() {
        //     axios
        //         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //         .then(response => (this.info = response))
        // },
        methods: {
            formatAMPM(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }
        },
        components: {}
    }
</script>

<style>
</style>
