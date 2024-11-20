<script setup lang="ts">

import CombineIcon from "@/components/icons/CombineIcon.vue";
import SplitIcon from "@/components/icons/SplitIcon.vue";
import MoreIcon from "@/components/icons/MoreIcon.vue";
import YouShangArrowIcon from "@/components/icons/YouShangArrowIcon.vue";
import EditorIcon from "@/components/icons/EditorIcon.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
</script>

<template>
<div class="user-info">
  <div class="user-top">
    <div class="top-left">
      <div class="top-item">
        <combine-icon icon-width="25" icon-height="25"></combine-icon>
      </div>
      <div class="top-item">
        <split-icon icon-width="25" icon-height="25"></split-icon>
      </div>
    </div>
    <div class="top-right">
      <div class="top-item">
        <more-icon icon-width="25" icon-height="25"></more-icon>
      </div>
      <div class="top-item">
        <you-shang-arrow-icon icon-width="25" icon-height="25"></you-shang-arrow-icon>
      </div>
    </div>
  </div>
  <div class="user-content">
    <div class="user-img">
      <img src="@/assets/avatar01.jpg" alt="">
    </div>
    <div class="user-name">
      Eva Robinson
    </div>
    <div class="user-role">
      CEO.Inc.Alabama Machinery
    </div>
    <div class="supply">
      & Supply
    </div>
    <div class="list">
      <div class="list-item">
        <EditorIcon icon-height="35" icon-width="35"></EditorIcon>
      </div>
      <div class="list-item">
        <MessageIcon icon-height="35" icon-width="35"></MessageIcon>
      </div>
      <div class="list-item">
        <PhoneIcon icon-height="30" icon-width="30"></PhoneIcon>
      </div>
      <div class="list-item">
        <AddIcon icon-height="35" icon-width="35"></AddIcon>
      </div>
      <div class="list-item">
        <CalendarIcon icon-height="35" icon-width="35"></CalendarIcon>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.user-info{
  @extend %card-style;
  .user-top{
    display: flex;
    .top-item{
      box-sizing: border-box;
      padding: 10px;
      border-radius: 25px;
      background: #EBF3FE;
    }
    .top-left{
      flex:1;
      display: flex;
      gap: 5px;
    }
    .top-right{
      display: flex;
      gap: 5px;
    }
  }
  .user-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    .user-img{
      height: 140px;
      width: 140px;
      transform: translateY(-20px);
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    .user-name{
      font-size: 28px;
      font-weight: bold;
    }
    .user-role{
      margin-top: 20px;
      color: #a7a7a7;
    }
    .supply{
      margin-top: 5px;
      color: #a7a7a7;
    }
    .list{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      gap: 30px;
      .list-item{
        box-sizing: border-box;
        padding: 15px;
        cursor: pointer;
        border-radius: 50%;
        &:hover{
          background: #EBF3FE;
        }
      }
    }
  }
}
</style>