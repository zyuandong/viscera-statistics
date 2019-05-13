<template>
  <div id="heart">
    心
    <router-link to="/menu">返回</router-link>

    <ChartPin></ChartPin>
  </div>
</template>

<script>
  import ChartPin from './chartPin.vue';

  export default {
    components: {
      ChartPin
    }
  }
</script>
