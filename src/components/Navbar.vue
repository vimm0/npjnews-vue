<template>
  <header class="header-area">

    <!-- Top Header Area -->
    <div class="top-header-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="top-header-content d-flex align-items-center justify-content-between">
              <!-- Logo -->
              <div class="logo">
                <router-link to="/">
                  <!--<img src="img/core-img/logo.png" alt="">-->
                  <h2 class="nav-title">Npj News Portal</h2>
                </router-link>
              </div>

              <!-- Login Search Area -->
              <div class="login-search-area d-flex align-items-center">
                <!-- Login -->
                <!--<div class="login d-flex">-->
                <!--<a href="#">Login</a>-->
                <!--<a href="#">Register</a>-->
                <!--</div>-->
                <!-- Search Form -->
                <div class="search-form">
                  <form action="#" method="post">
                    <input type="search" name="search" class="form-control" placeholder="Search">
                    <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar Area -->
    <div class="newspaper-main-menu" id="stickyMenu">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">
          <!-- Menu -->
          <nav class="classy-navbar justify-content-between" id="newspaperNav">

            <!-- Logo -->
            <div class="logo">
              <router-link to="/"><img src="img/core-img/logo.png" alt=""></router-link>
            </div>

            <!-- Navbar Toggler -->
            <div class="classy-navbar-toggler">
              <span class="navbarToggler"><span></span><span></span><span></span></span>
            </div>

            <!-- Menu -->
            <div class="classy-menu">

              <!-- close btn -->
              <div class="classycloseIcon">
                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
              </div>

              <!-- Nav Start -->
              <div class="classynav">
                <ul>
                  <li class="active">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul class="dropdown">
                      <li>
                        <router-link to="/">Home</router-link>
                      </li>
                      <li>
                        <router-link to="/categories-post">Categories</router-link>
                      </li>
                      <li>
                        <router-link to="/single-post">Single Articles</router-link>
                      </li>
                      <li>
                        <router-link to="/about">About Us</router-link>
                      </li>
                      <li>
                        <router-link to="/contact">Contact</router-link>
                      </li>
                      <li>
                        <router-link to="#">Dropdown</router-link>
                        <ul class="dropdown">
                          <li>
                            <router-link to="/">Home</router-link>
                          </li>
                          <li>
                            <router-link to="/categories-post">Categories</router-link>
                          </li>
                          <li>
                            <router-link to="/single-post">Single Articles</router-link>
                          </li>
                          <li>
                            <router-link to="/about">About Us</router-link>
                          </li>
                          <li>
                            <router-link to="/contact">Contact</router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Mega Menu</a>
                    <div class="megamenu">
                      <ul class="single-mega cn-col-4">
                        <li class="title">Categories</li>
                        <li>
                          <router-link to="/">Home</router-link>
                        </li>
                        <li>
                          <router-link to="/categories-post">Categories</router-link>
                        </li>
                        <li>
                          <router-link to="/single-post">Single Articles</router-link>
                        </li>
                        <li>
                          <router-link to="/about">About Us</router-link>
                        </li>
                        <li>
                          <router-link to="/contact">Contact</router-link>
                        </li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Categories</li>
                        <li>
                          <router-link to="/">Home</router-link>
                        </li>
                        <li>
                          <router-link to="/categories-post">Categories</router-link>
                        </li>
                        <li>
                          <router-link to="/single-post">Single Articles</router-link>
                        </li>
                        <li>
                          <router-link to="/about">About Us</router-link>
                        </li>
                        <li>
                          <router-link to="/contact">Contact</router-link>
                        </li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Categories</li>
                        <li>
                          <router-link to="/">Home</router-link>
                        </li>
                        <li>
                          <router-link to="/categories-post">Categories</router-link>
                        </li>
                        <li>
                          <router-link to="/single-post">Single Articles</router-link>
                        </li>
                        <li>
                          <router-link to="/about">About Us</router-link>
                        </li>
                        <li>
                          <router-link to="/contact">Contact</router-link>
                        </li>
                      </ul>
                      <div class="single-mega cn-col-4">
                        <!-- Single Featured Post -->
                        <div class="single-blog-post small-featured-post d-flex">
                          <div class="post-thumb">
                            <a href="#"><img src="img/bg-img/23.jpg" alt=""></a>
                          </div>
                          <div class="post-data">
                            <a href="#" class="post-catagory">Travel</a>
                            <div class="post-meta">
                              <a href="#" class="post-title">
                                <h6>Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.</h6>
                              </a>
                              <p class="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                            </div>
                          </div>
                        </div>

                        <!-- Single Featured Post -->
                        <div class="single-blog-post small-featured-post d-flex">
                          <div class="post-thumb">
                            <a href="#"><img src="img/bg-img/24.jpg" alt=""></a>
                          </div>
                          <div class="post-data">
                            <a href="#" class="post-catagory">Politics</a>
                            <div class="post-meta">
                              <a href="#" class="post-title">
                                <h6>Augue semper congue sit amet ac sapien. Fusce consequat.</h6>
                              </a>
                              <p class="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li v-for="cat in $store.state.categories">
                    <router-link :to="{name: 'category-slug', params: {slug: cat.slug}}">{{ cat.title }}</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>

              </div>
              <!-- Nav End -->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    // data() {
    //   return {
    //     categories: ''
    //   }
    // },
    // async asyncData({store, params}) {
    //   let {data} = await api.get("article/");
    //   let res = await api.get("category")
    //   return {article: data, categories: res.data};
    // },
  }
</script>
<style>

</style>
