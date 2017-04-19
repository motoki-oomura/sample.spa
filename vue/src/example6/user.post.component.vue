<template>
  <div>
    <p>今日はとても楽しかったです。{{ this.id }}</p>
  </div>
</template>

<script>
  export default {
    props: ['id']
  }
</script>