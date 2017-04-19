<template>
  <div>
    <router-link to="/">top</router-link>
    <router-link to="/user/345353453">user1</router-link>
    <router-link to="/user/8509370928375">user2</router-link>
    <transition name="slide-fade-left">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  .slide-fade-left-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-left-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-left-enter, .slide-fade-left-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

<script>
  export default {}
</script>