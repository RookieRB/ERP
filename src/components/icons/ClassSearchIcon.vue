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
  <div class="class-search-icon">
    <svg t="1727079661515" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="6671" :width="iconWidth" :height="iconHeight">
      <path
          d="M959.744 870.592l-199.808-199.808a382.08 382.08 0 0 0 71.552-222.72c0-212.032-171.968-384-384-384S64 235.968 64 448s171.456 384 383.488 384a381.952 381.952 0 0 0 222.72-71.552l199.808 199.808 89.728-89.664zM447.488 704a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
          p-id="6672" fill="#ffffff"></path>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.class-search-icon{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}
</style>