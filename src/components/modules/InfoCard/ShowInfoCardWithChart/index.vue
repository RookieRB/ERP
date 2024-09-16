<script setup lang="ts">
import {computed,ref} from "vue";
import {CardInfoData} from "@/components/modules/InfoCard/ShowInfoCardWithChart/type.ts";
import UpArrowIcon from "@/components/icons/UpArrowIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
const props = defineProps({
  cardInfoData:{
    type: Object as () => CardInfoData,
    default: () => ({
      title: '订单数量',
      eventNumber: '2500',
      color: 'blue',
      isIncrement: true,
      percentageNumber: '28%',
    })
  }
})


const ringStyle = computed(() => {
  return {
    background: `conic-gradient(${props.cardInfoData.color} 0% ${props.cardInfoData.percentageNumber}, #f0f0f0 ${props.cardInfoData.percentageNumber} 100%)`
  }
})
</script>

<template>
<div class="content">
  <div class="content-left">
    <div class="title">
      {{cardInfoData.title}}
    </div>
    <div class="number">
      {{cardInfoData.eventNumber}}
    </div>
    <div class="bottom">
      <UpArrowIcon v-if="cardInfoData.isIncrement" class="arrow-font" :color="cardInfoData.color" icon-width="22px" icon-height="22px"></UpArrowIcon>
      <DownArrowIcon v-else class="arrow-font" :color="cardInfoData.color" icon-width="22px" icon-height="22px"></DownArrowIcon>
      {{cardInfoData.percentageNumber}}
      <div class="span" v-if="cardInfoData.isIncrement">Inc</div>
      <div class="span" v-else>Dec</div>
    </div>
  </div>
  <div class="content-right">
    <div class="ring-progress" :style="ringStyle">
      <span :style="{color: cardInfoData.color}">
        <div class="percentageNumber" v-if="cardInfoData.isIncrement">+</div>
        <div class="percentageNumber" v-else>-</div>
        {{cardInfoData.percentageNumber}}
      </span>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.content{
  width: 250px;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 25px;
  background: $HOME_NAV_BG;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  box-shadow: 0 0 2px 2px rgba(0,0,0,.05);
  transition: transform .5s;
  animation: showFromTopToBottom 1.75s backwards   ease-in-out;
  &:hover{
    transform: scale(1.05);
    box-shadow: 0 0 2px 2px rgba(0,0,0,.2);
  }
  .content-left{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    .title{
      font-size: 20px;
      margin-bottom: 10px;
    }
    .number {
      font-size: 25px;
      font-weight: bold;
    }
    .bottom{
      display: flex;
      align-items: center;
      font-size: 14px;
      .span{
        font-size: 14px;
      }
      .arrow-font{

      }
    }
  }
  .content-right{

    display: flex;
    align-items: center;
    justify-content: center;
    .ring-progress {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: conic-gradient(#4e79fc 0% 28%, #f0f0f0 28% 100%);
      &::before {
        content: "";
        position: absolute;
        top: 10px; /* 调整内圆的大小 */
        left: 10px;
        width: 80px;
        height: 80px;
        background-color: white;
        border-radius: 50%;
        z-index: 1;
      }
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: bold;
        color: #4e79fc;
        z-index: 2;
        .percentageNumber{
          display: inline;
        }
      }
    }

  }
}
</style>