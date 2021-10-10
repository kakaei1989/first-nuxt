<template>
  <div>
    <NuxtLink to="users">users</NuxtLink>
    <NuxtLink to="/">home</NuxtLink>
    <!--  <img src="~/assets/download.png" alt="">-->
    <!--  <img :src="require('~/assets/download.png')" alt="">-->
    <!--    <p class="has-background-info">post1</p>
        <p class="has-background-primary">post2</p>
        <button class="button is-success" @click="$toast('Hi, there!', {
               duration:3000,
               horizontalPosition: 'center',
                verticalPosition: 'center',
                className:'et-warn'
              })">alert
        </button>
        <button class="button is-info" @click="$fetch">دریافت دوباره اطلاعات
        </button>

    &lt;!&ndash;    <p v-if="$fetchState.pending">در حال دریافت پست ها</p>
        <p v-if="$fetchState.error" class="has-background-danger">خطا در دریافت پست ها</p>&ndash;&gt;
        <p v-for="post in posts">{{ post.title }}</p>-->
    <div class="container">
      <!-- START ARTICLE FEED -->
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <!-- START ARTICLE -->
          <div class="card article" v-for="(post,index) in posts">
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title article-title">{{ index + 1 }}-{{ post.title }}</p>
                  <div class="tags has-addons level-item">
                    <span
                      class="tag is-rounded is-info">@{{ users.find(user => user.id === post.userId).username }}</span>
                    <span class="tag is-rounded">May 10, 2018</span>
                  </div>
                </div>
              </div>
              <div class="content article-body">
                <p>{{ post.body }}</p>
              </div>
            </div>
          </div>
          <!-- END ARTICLE -->
        </div>

      </section>
      <!-- END ARTICLE FEED -->
    </div>

  </div>
</template>

<script>
export default {
  name: "posts",
  middleware:['auth'],
  head() {
    return {
      title: 'لیست پست ها'
    }
  },
  /*data: () => ({
    postha: []
  }),*/
  methods: {
    myToast: () => {
      /*
            this.$toast('Hi, there!', {
              id: 'my-toast',
              parent: '#toast-container',
              className: ['my-toast', 'toast-warning'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 3000,
              mode: 'queue',
              transition: 'my-transition'
            })
      */
    }
  },
  async fetch() {
    // this.$toast.show('Logging in...')
    //  this.$axios.delete('http://localhost:3000/posts/1')
    /* this.$axios.put('http://localhost:3000/posts/2',{"id": 2,
       "title": "title2",
       "body": "body2",
       "userId": 2})*/

    /*this.$axios.post('http://localhost:3000/posts',{
      "title": "newTitle",
      "body": "newBody",
      "userId": 2})*/
    // this.postha = await this.$axios.$get('http://localhost:3000/posts')
  },
  async asyncData(context) {
    const posts = await context.$axios.$get('/posts')
    const users = await context.$axios.$get('/users')
    return {posts, users}
  }
}
</script>

<style scoped>
.alexis-transition {
  transition: all .3s ease;
  height: 100px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .alexis-enter defines the starting state for entering */
/* .alexis-leave defines the ending state for leaving */
.alexis-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
