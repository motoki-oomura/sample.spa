<template>
  <div>
    <parent-component></parent-component>
    <child-component></child-component>
  </div>
</template>

<style lang="scss" scoped>
  p {
    color: red;
  }
</style>

<script>
  import ParentComponent from './parent.component.vue';
  import ChildComponent from './child.component.vue';

  export default {
    components: {
      ParentComponent,
      ChildComponent
    }
  }
</script>