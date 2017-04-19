<template>
  <div>私のIDは「{{ $route.params.id }}」です {{ $route.params }}</div>

</template>

<script>
  export default {
    // routingが変更された際に呼び出される
    // 同じルーティング（同じコンポーネントが呼び出された場合はライフサイクルフックが呼ばれない）
    watch: {
      '$route' (to, from) {

      }
    }
  }
</script>