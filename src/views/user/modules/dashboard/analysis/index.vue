<script setup lang="ts">
import ShowInfoCardWithIcon from '@/components/modules/InfoCard/ShowInfoCardWithIcon/index.vue';
import {analysisMockDataArray,analysisMockChartDataArray,analysisMockTransactionDataArray} from '@/Mock/analysisMock.ts';
import MapChart from '@/views/user/modules/dashboard/analysis/modules/MapChart/index.vue';
import TotalRevenue from '@/views/user/modules/dashboard/analysis/modules/TotalRevenue/index.vue'
import Transactions from '@/views/user/modules/dashboard/analysis/modules/Transactions/index.vue'
</script>

<template>
  <div class="analysis">
    <div class="analysis-top">
      <template v-for="item in analysisMockDataArray">
        <div class="analysis-top-item animate__animated animate__backInDown ">
          <ShowInfoCardWithIcon :infoCardDataInfo="item"></ShowInfoCardWithIcon>
        </div>
      </template>
    </div>
    <div class="analysis-middle">
      <div class="total-revenue animate__animated animate__lightSpeedInLeft ">
        <TotalRevenue></TotalRevenue>
      </div>
      <div class="detail  animate__animated animate__lightSpeedInRight ">
        <MapChart :mapDataInfoArray="analysisMockChartDataArray"></MapChart>
      </div>
    </div>
    <div class="analysis-bottom animate__animated animate__bounceInLeft ">
      <Transactions :transactionDataInfo="analysisMockTransactionDataArray"></Transactions>
    </div>
  </div>
</template>

<style scoped lang="scss">
.analysis {
  box-sizing: border-box;
  padding: 20px 30px;
  width: 100%;
  height:100%;
  overflow: auto;

  .analysis-top {
    display: flex;
    justify-content: space-between;
    .analysis-top-item {
      flex: 0 0 22%;
    }
  }

  .analysis-middle {
    margin-top: 40px;
    display: flex;
    gap: 40px;
    .detail{
      width: 40%;
    }
    .total-revenue{
      flex:1;
    }
  }
  .analysis-bottom{

  }
}

</style>