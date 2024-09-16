<script setup lang="ts">
import zhejiang from '@/assets/zhejiang.json'
import * as echarts from "echarts";
import ExclamationIcon from "@/components/icons/ExclamationIcon.vue";
import MoreIcon from "@/components/icons/MoreIcon.vue";


const props = defineProps({
  mapDataInfoArray: Array
})
echarts.registerMap('zhejiang', {geoJSON: zhejiang})
const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  series: [
    {
      type: 'map',
      map: 'zhejiang',
      label: {
        normal: {
          show: true
        },

      },

    }
  ]
};

</script>

<template>
  <div class="map-chart">
    <div class="top">
      <span>
        TOP AREA CUSTOMERS
      </span>
      <div class="icon">
        <ExclamationIcon icon-height="20" icon-width="20"></ExclamationIcon>
      </div>
      <div class="more">
        <MoreIcon></MoreIcon>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <e-charts class="charts" :option="option"></e-charts>
      </div>
      <div class="content-right">
        <div class="content-right-list">
          <div class="content-right-list-item" v-for="(item,index) in mapDataInfoArray.sort(function (a,b){return b.incomeNumber - a.incomeNumber})" :key="index">
            <div class="item-top">
              <div class="icon">
                <component :is="item.icon" icon-width="30" icon-height="30"></component>
              </div>
              <div class="area-name">
                {{ item.areaName }}
              </div>
              <div class="income">
                {{ item.incomeNumber }}k
              </div>
            </div>
            <div class="item-bottom">
              <div class="g-container">
                <div class="g-progress" :style="{'--progress': item.percent}"></div>
              </div>
              <div class="percent">
                {{item.percent}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.map-chart {
  box-sizing: border-box;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 19px 2px rgba(0,0,0,.05);
  .top {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      font-weight: bold;
      color: $HOME_FONT_COLOR_SHALLOW_WHITE;
    }

    .icon {
      margin-left: 5px;
    }

    .more {
      flex: 1;
      display: flex;
      justify-content: end;
    }
  }

  .content {
    display: flex;
    .content-left {
      width: 60%;
      .charts{
        width: 100%;
        height: 100%;
      }
    }

    .content-right {
      flex: 1;

      .content-right-list {
        box-sizing: border-box;
        padding: 20px 40px;

        .content-right-list-item {
          margin-top: 20px;
          .item-top {
            display: flex;
            align-items: center;

            .icon {

            }

            .area-name {
              margin-left: 10px;
              font-size: 20px;
              color: $HOME_FONT_COLOR_SHALLOW_WHITE;
            }

            .income {
              flex: 1;
              text-align: end;
              font-size: 17px;
              font-weight: bold;
            }
          }

          .item-bottom {
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            .g-container {
              width: 100%;
              height: 7px;
              background: #eee;
              .g-progress{
                width: var(--progress);
                height: inherit;
                background: $SUCCESS_FONT_COLOR;
                transition: width .2s linear;
              }
            }

            .percent {
              color: $HOME_FONT_COLOR_SHALLOW_WHITE;
            }
          }
        }
      }
    }
  }

  .charts {
    width: 300px;
    height: 300px;
  }
}
</style>