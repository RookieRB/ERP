<script setup lang="ts">

import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import RiseArrowIcon from "@/components/icons/RiseArrowIcon.vue";

const option = {

  grid:{
    left:'5%',
    right:0,
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    axisTick:{
      show: false,
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    nameTextStyle:{
      fontStyle: 'oblique'
    },
    axisLabel:{
      formatter:'${value}k'
    },
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

</script>

<template>
<div class="content">
  <div class="content-top ">
    <div class="title">
      Total Revenue
    </div>
    <div class="switch">
      <div class="time">
        week
      </div>
      <div class="icon">
        <DownArrowIcon icon-height="20" icon-width="20"></DownArrowIcon>
      </div>
    </div>
  </div>
  <div class="content-income">
    <div class="number">
      $7,263
    </div>
    <div class="income-icon" :style="{'background': '#e2f4e7'}">
      <RiseArrowIcon icon-width="12" icon-height="12"></RiseArrowIcon>
      <div class="percent-number">
        3.1%
      </div>
    </div>
  </div>
  <div class="content-chart">
    <e-charts class="charts" :option="option"></e-charts>
  </div>
</div>
</template>

<style scoped lang="scss">
.content{
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 19px 2px rgba(0,0,0,.05);
  .content-top{
    display: flex;
    align-items: center;
    .title{
      flex:1;
    }
    .switch{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 8px;
      border-radius: 10px;
      box-shadow:  0 0 2px 2px rgba(0,0,0,.1);
      cursor: pointer;
      .time{
        width: 65px;
      }
      .icon{

      }
    }
  }
  .content-income{
    display: flex;
    align-items: end;
    gap: 10px;
    .number{
      font-size: 34px;
      font-weight: bold;
    }
    .income-icon{
      display: flex;
      align-items: center;
      gap: 5px;
      box-sizing: border-box;
      padding: 3px;
      border-radius: 20px;
      .percent-number{
        font-size: 12px;
        font-weight: bold;
        color: $SUCCESS_FONT_COLOR;
      }
    }
  }
  .content-chart{
    flex:1;
    .charts{
      width: 100%;
      height: 100%;
    }
  }
}
</style>