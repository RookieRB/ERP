<script setup lang="ts">

import MagnifyGlass from "@/components/icons/MagnifyGlass.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
import MoreIcon from "@/components/icons/MoreIcon.vue";

defineProps({
  transactionDataInfo:{
    type:Array
  }
})

</script>

<template>
  <div class="transaction">
    <div class="top">
      <div class="title">
        Transactions
      </div>
      <div class="top-right">
        <div class="search">
          <SearchIcon icon-height="25" icon-width="25"/>
        </div>
        <div class="button">
          <div class="name">
            View All
          </div>
          <div class="icon">
            <DownArrowIcon icon-width="20" icon-height="20"></DownArrowIcon>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list-title">
        <div class="receiver width_280">
          Receiver
        </div>
        <div class="date width_280">
          Date
        </div>
        <div class="status width_280">
          Status
        </div>
        <div class="type width_280">
          Type
        </div>
        <div class="amount width_280">
          Amount
        </div>
      </div>
      <div class="list-item" v-for="(item,index) in transactionDataInfo" :key="index">
        <div class="item-receiver width_280">
          <div class="item-img">
            <img :src="item.img" alt="">
          </div>
          <div class="item-name">
            {{ item.name }}
          </div>
        </div>
        <div class="item-date width_280">
          {{ item.date }}
        </div>

        <div class="item-status width_280">
          <template v-if="item.status === 1">
            <div class="status-body success-body">
              <div class="status-light success-light">
              </div>
              <div class="status-title">
                Completed
              </div>
            </div>
          </template>
          <template v-else-if="item.status === 0">
            <div class="status-body error-body">
              <div class="status-light error-light">
              </div>
              <div class="status-title">
                Completed
              </div>
            </div>
          </template>
          <template v-else>
            <div class="status-body warming-body">
              <div class="status-light warming-light">
              </div>
              <div class="status-title">
                Completed
              </div>
            </div>
          </template>
        </div>
        <div class="item-type width_280">
          {{ item.type }}
        </div>
        <div class="item-account width_280">
          - ${{ item.amount.toFixed(2) }}
        </div>
        <div class="item-more">
          <MoreIcon icon-height="25" icon-width="25"></MoreIcon>
        </div>
      </div >
    </div>
  </div>
</template>

<style scoped lang="scss">
.transaction{
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 19px 2px rgba(0,0,0,.05);
  margin-top: 30px;
  .top{
    display: flex;
    align-items: center;
    .title{
      font-size: 30px;
    }
    .top-right{
      flex:1;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 20px;
      .search{
        box-sizing: border-box;
        padding: 3px;
        border-radius: 10px;
        background-color: #ebebeb;
      }
      .button{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 10px;
        background-color: #ebebeb;
        cursor: pointer;
      }
    }
  }
  .list{
    .list-title{
      display: flex;
      margin-top: 25px;
      font-size: 14px;
    }
    .width_280{
      width: 280px;
    }
    .list-item{
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 16px;
      .item-receiver{
        display: flex;
        align-items: center;
        gap: 10px;
        .item-img{
          height: 33px;
          width: 33px;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }
        .item-name{
          flex:1;
        }
      }
      .item-date{

      }
      .item-status{
        .success-body{
          background: $SUCCESS_BG_COLOR;
        }
        .error-body{
          background: $UNCOMPLETE_BG_COLOR;
        }
        .warming-body{
          background: $WARMING_BG_COLOR;
        }
        .status-body{
          width: 50%;
          display: flex;
          border-radius: 25px;
          align-items: center;
          gap: 8px;
          box-sizing: border-box;
          padding: 5px;
          .status-light{
            margin-left: 5px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
          .error-light{
            background: $UNCOMPLETE_FONT_COLOR;
          }
          .success-light{
            background: $SUCCESS_FONT_COLOR;
          }
          .warming-light{
            background: $WARMING_FONT_COLOR;
          }
          .error{

          }
          .status-title{

          }
        }
      }
      .item-type{

      }
      .item-account{

      }
      .item-more{

      }
    }
  }
}
</style>