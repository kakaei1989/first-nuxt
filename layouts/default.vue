<template>
  <div>
    <!--    <img :src="require('~/assets/ahmad.jpg')" width="150" height="150">-->
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <NuxtLink class="navbar-item" to="/">
            <NuxtLogo/>
          </NuxtLink>
          <span class="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                <span></span>
                <span></span>
                </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <NuxtLink class="navbar-item is-active" to="/">
              Home
            </NuxtLink>
            <NuxtLink class="navbar-item" to="/posts">
              Posts
            </NuxtLink>
            <NuxtLink class="navbar-item" to="users">
              Users
            </NuxtLink>
            <a class="navbar-item">
              Team
            </a>
            <a class="navbar-item">
              Archives
            </a>
            <a class="navbar-item">
              Help
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Account
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Dashboard
                </a>
                <a class="navbar-item">
                  Profile
                </a>
                <a class="navbar-item">
                  Settings
                </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1>به سایت من خوش آمدید.</h1>
        </div>
      </div>
    </section>
       <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "default",
  head: {
    script: [{
      // src:'/main.js'
      src: require('~/assets/test.js')
    }],
    link: [
      {
        rel: 'stylesheet',
        // href:'/styles.css'
        href: require('~/assets/alexis.css')
      }
    ]
  }
}
</script>

<style scoped>
</style>
