<template>
  <p v-if="this.isVisible">{{ this.message }}</p>
</template>

<style lang="scss" scoped>
  p {
    color: red;
  }
</style>

<script>
  export default {
    data: function() {
      return {
        message: 'hello, vue.js'
      };
    },
    computed: {
      isVisible: function() {
        return this.message ? true : false;
      }
    }

  };
</script>