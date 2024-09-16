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
  <div class="rise-arrow">
    <svg t="1726300419905" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4396" :width="iconWidth" :height="iconHeight"><path d="M1002.666667 149.333333l-86.442667 347.306667-99.114667-99.541333-289.834666 291.2-129.664-130.261334L82.432 874.666667 21.333333 813.269333l376.32-378.026666 129.621334 130.261333 228.736-229.802667-99.072-99.541333L1002.666667 149.333333z" fill="#2FC279" p-id="4397"></path></svg>
  </div>
</template>

<style scoped lang="scss">

</style>