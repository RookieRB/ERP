<script setup lang="ts">

import MagnifyGlass from "@/components/icons/MagnifyGlass.vue";
import NotificationIcon from "@/components/icons/NotificationIcon.vue";
</script>

<template>
<div class="sourceContent">
  <div class="sourceContent-top">
    <div class="sourceContent-top-title">
      SOURCES
    </div>
    <div class="sourceContent-top-search">
      <input type="text" placeholder="Search" >
      <MagnifyGlass class="magnify" icon-height="25" icon-width="25"></MagnifyGlass>
    </div>
    <div class="sourceContent-top-right">
      <div class="sourceContent-top-notification">
        <NotificationIcon class="notification" icon-width="40" icon-height="40"></NotificationIcon>
      </div>
      <div class="sourceContent-top-userInfo">
        <img src="@/assets/avatar03.jpg" alt="">
      </div>
    </div>


  </div>
</div>
</template>

<style scoped lang="scss">
.sourceContent{
  margin-right: 50px;
  .sourceContent-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .sourceContent-top-title{
      font-size: 50px;
      color: $HOME_NAV_FONT_COLOR
    }
    .sourceContent-top-search{
      position: relative;
      input{
        height: 40px;
        width: 800px;
        border: none;
        border-radius: 30px;
        box-sizing: border-box;
        padding: 20px;
      }
      .magnify{
        position: absolute;
        top: 10px;
        right: 30px;
        cursor: pointer;
      }
    }
    .sourceContent-top-right{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      .sourceContent-top-notification{
        .notification{
          cursor: pointer;
        }
      }
      .sourceContent-top-userInfo{
        height: 50px;
        width: 50px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;

          border-radius: 50%;
        }
      }
    }

  }
}
</style>