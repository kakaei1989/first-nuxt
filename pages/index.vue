<template>
  <div class="container">
    <div>
      <p class="is-size-1">counter:{{ $store.state.counter.counter }}</p>
      <button class="button is-primary" @click="$store.dispatch('counter/increment')">افزایش</button>
      <button class="button is-danger" @click="$store.dispatch('counter/decrement')">کاهش</button>
    </div>
    <!--   <img :src="require('~/assets/download.png')" alt="">-->
  </div>
</template>

<script>
export default {}
</script>
