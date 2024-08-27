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
  <svg t="1723690792782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11901" :width="iconWidth" :height="iconHeight"><path d="M853.333333 469.333333H334.08l238.293333-238.293333L512 170.666667 170.666667 512l341.333333 341.333333 60.373333-60.373333L334.08 554.666667H853.333333v-85.333334z" fill="" p-id="11902"></path></svg>
</div>
</template>

<style scoped lang="scss">
.left-arrow{

}
</style>