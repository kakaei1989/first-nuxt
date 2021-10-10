<template>
  <div>
    <p>user1</p>
    <p>user2</p>
    <NuxtLink to="posts">posts</NuxtLink>
    <NuxtLink to="/">home</NuxtLink>
    <p v-if="$fetchState.pending">در حال دریافت اطلاعات کاربران</p>
    <p v-for="user in users">{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  asyncData(ctx) {
    // console.log(ctx.$alexis)
    ctx.$message('welcome to users page')
    console.log(ctx)
  },
  name: "users",
  // layout: 'userLayout',
  head: {
    title: 'لیست کاربران',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'لیست کاربران'}
    ],
  },
  data: () => ({
    users: []
  }), async fetch() {
    this.users = await this.$axios.$get('/users')
  }
}
</script>

<style scoped>

</style>
