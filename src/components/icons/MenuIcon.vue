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
<div class="menu">
  <svg t="1723719282015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50418" :width="iconWidth" :height="iconHeight"><path d="M44.4 245.9h935.2c24.4 0 44.4-20 44.4-44.4s-19.8-44.4-44.4-44.4H44.4C20 157.1 0 177.1 0 201.5s20 44.4 44.4 44.4z m935.2 221.8H44.4C20 467.7 0 487.7 0 512.1s20 44.4 44.4 44.4h935.2c24.4 0 44.4-20 44.4-44.4s-20-44.4-44.4-44.4z m0 310.4H44.4C20 778.1 0 797.8 0 822.5s20 44.4 44.4 44.4h935.2c24.4 0 44.4-19.8 44.4-44.4s-20-44.4-44.4-44.4z" p-id="50419" fill="#8a8a8a"></path></svg>
</div>
</template>

<style scoped lang="scss">
.menu{

}
</style>