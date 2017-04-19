<template>
  <div>
    <p>これはparent要素だよ</p>
    <child-component></child-component>
  </div>
</template>

<style lang="scss" scoped>
  p {
    color: red;
  }
</style>

<script>
  import ChildComponent from './child.component.vue';

  export default {
    components: {
      'child-component': ChildComponent
    }
  }
</script>