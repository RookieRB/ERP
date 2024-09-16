<script setup lang="ts">
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import {InfoCardData} from "@/views/user/modules/dashboard/analysis/type.ts";
import UpArrowIcon from "@/components/icons/UpArrowIcon.vue";
defineProps({
  infoCardDataInfo:{
    type: Object as () => InfoCardData
  }
})
</script>

<template>
  <div class="show-info-card-with-icon" :style="{'borderBottom': `4px solid ${infoCardDataInfo?.bottomColor}`}">
    <div class="content">
      <div class="content-left">
        <div class="title">
          {{ infoCardDataInfo.title }}
        </div>
        <div class="number">
          {{infoCardDataInfo.number}}
        </div>
        <div class="bottom">
          <div class="show down-color" v-if="!infoCardDataInfo?.isAdd">
            <DownArrowIcon color="#b5626a"></DownArrowIcon>
            <div class="percent-number">
              -{{ infoCardDataInfo.percentNumber }}
            </div>
          </div>
          <div class="show up-color" v-else>
            <UpArrowIcon color="#5fa68f"></UpArrowIcon>
            <div class="percent-number">
              +{{ infoCardDataInfo.percentNumber }}
            </div>
          </div>
          <div class="time">
            {{ infoCardDataInfo.time }}
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="icon">
          <component :is="infoCardDataInfo?.icon" :bgColor="infoCardDataInfo?.bottomColor"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show-info-card-with-icon {
  box-shadow: 0 2px 18px 1px rgba(0,0,0,.1);
  cursor: pointer;
  &:hover{
    box-shadow: 0 0 18px 1px rgba(0,0,0,.15);
  }
  .content{
    display: flex;
    padding: 10px;
    .content-left{
      .title{
        color: #a6a6a6;
      }
      .number{
        margin: 20px 0;
        font-size: 22px;
        font-weight: bold;
      }
      .bottom{
        display: flex;
        gap: 10px;
        font-weight: bold;
        .show{
          display: flex;
          white-space: nowrap;
        }
        .up-color{
          color: #5da28c;
        }
        .down-color{
          color: #b5626a;
        }
        .time{
          color: #a6a6a6;
          white-space: nowrap;
        }
      }
    }
    .content-right{
      flex:1;
      display: flex;
      justify-content: center;
      .icon{
        margin-top: 20px;

      }
    }
  }
}
</style>