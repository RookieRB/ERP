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
  <div class="left-arrow">
    <svg t="1725527850798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25616" :width="iconWidth" :height="iconHeight"><path d="M747.245 81.064c-28.497-29.315-74.739-29.315-103.307 0l-367.236 378.011c-28.483 29.367-28.483 76.982 0 106.291l367.236 377.997c28.562 29.367 74.806 29.367 103.307 0 28.546-29.325 28.546-76.929 0-106.304l-315.6-324.841 315.599-324.803c28.545-29.367 28.544-76.973 0-106.356v0z" fill="#515151" p-id="25617" data-spm-anchor-id="a313x.search_index.0.i6.fee03a81XdvjkD" class="selected"></path></svg>
  </div>
</template>

<style scoped lang="scss">

</style>