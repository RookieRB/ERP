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
<div class="store-management">
  <svg t="1725521608513" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1104" :width="iconWidth" :height="iconHeight"><path d="M53.4016 213.4016c0-17.664 14.336-32 32-32h853.3504a32 32 0 1 1 0 64h-53.3504v266.6496a373.3504 373.3504 0 1 1-746.6496 0V245.4016H85.4016a32 32 0 0 1-32-32z m149.3504 32v266.6496a309.3504 309.3504 0 1 0 618.6496 0V245.4016H202.752z m149.2992 266.6496a160 160 0 1 1 320 0 160 160 0 0 1-320 0z m160-96a96 96 0 1 0 0 192 96 96 0 0 0 0-192z" p-id="1105" fill="#515151"></path></svg>
</div>
</template>

<style scoped lang="scss">

</style>