<script setup lang="ts">
defineProps({
  iconWidth:{
    type: String,
    default: "35"
  },
  iconHeight:{
    type: String,
    default: "35"
  }
})
</script>

<template>
  <div class="right-arrow">
    <svg t="1724331620115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4245" :width="iconWidth" :height="iconHeight"><path d="M557.397333 167.204571l293.059048 293.059048L902.192762 512l-51.712 51.712-293.059048 293.083429-51.736381-51.712L762.148571 548.571429H121.904762v-73.142858h640.243809L505.660952 218.940952l51.736381-51.736381z" p-id="4246" fill=""></path></svg>
  </div>
</template>

<style scoped lang="scss">

</style>