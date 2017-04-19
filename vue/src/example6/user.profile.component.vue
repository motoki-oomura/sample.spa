<template>
  <div>
    <p>ID：{{ this.id }}</p>
    <p>名前：もときおおむら</p>
    <p>年齢：２６歳</p>
  </div>
</template>

<script>
  export default {
    props: ['id']
  }
</script>