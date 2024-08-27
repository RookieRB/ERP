<script setup lang="ts">
import {InfoData} from "@/components/modules/InfoCard/ShowInfoCard/type.js";
import ShoppingIcon from "@/components/icons/ShoppingIcon.vue";

defineProps({
  infoData:{
    type: Object as () => InfoData,
    default:() =>({
      icon: ShoppingIcon,
      cardWidth: '200px',
      cardHeight: '170px',
      iconBG: '#87CEEB',
      number: '22,69,582',
      description: 'Earn of the Day'
    })
  }
})
</script>

<template>
 <div class="container" :style="{width:infoData.cardWidth,height:infoData.cardHeight}">
   <div class="icon" :style="{background: infoData.iconBG}">
     <component :is="infoData.icon"></component>
   </div>
   <div class="number">
    {{infoData.number}}
   </div>
   <div class="description">
      {{infoData.description}}
   </div>
 </div>
</template>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .3s;
  border-radius: 15px;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
    box-shadow: 0 0 4px rgb(0,0,0,.2);
  }
  .icon{
    margin-bottom: 10px;
    padding: 17px;
    border-radius: 50%;
  }
  .number{
    font-size: 21px;
  }
  .description{
    margin-top: 6px;
    font-size: 14px;
    color: $FONT_COLOR_Light_GRAY;
  }
}
</style>