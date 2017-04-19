<template>
  <div>
    <p>私のidは「{{ this.id }}」です</p>
    <router-link :to="`/user/${this.id}/profile`">プロフィール</router-link>
    <router-link :to="`/user/${this.id}/post`">ポスト</router-link>
    <transition name="slide-fade-left">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['id']
  }
</script>