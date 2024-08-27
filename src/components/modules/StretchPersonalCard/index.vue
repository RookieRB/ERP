<script setup lang="ts">

import NudgeIcon from "@/components/icons/NudgeIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
</script>

<template>
<div class="personal-card">
  <div class="img">
    <img src="@/assets/avatar04.jpg" alt="">
  </div>
  <div class="stretch-content">
    <div class="personal-role">
      Management
    </div>
    <div class="userId">
      员工ID: #0001
    </div>
    <div class="userPhone">
      员工电话: 19727227983
    </div>
    <div class="send-message">
      30 min 之前发表过任务
    </div>
  </div>
  <div class="personal-name">
    Aroulysids Mons
  </div>
  <div class="function-list">
    <div class="function-list-item shallow-pink">
      <NudgeIcon icon-width="25" icon-height="25"></NudgeIcon>
    </div>
    <div class="function-list-item skyblue">
      <PhoneIcon icon-width="25" icon-height="25"></PhoneIcon>
    </div>
    <div class="function-list-item pink">
      <MessageIcon icon-width="25" icon-height="25"></MessageIcon>
  </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.personal-card{
  position: relative;
  width: 80px;
  height: 270px;
  border-radius: 30px;
  background:$HOME_NAV_BG;
  cursor: pointer;
  transition: all 1.5s;
  display: flex;
  flex-direction: column;
  &:hover{
    width: 240px;
    .personal-name{
      opacity: 0;
    }
    .function-list{

    }
    .stretch-content{
      opacity: 1;
    }
  }
  .img{
    width: 50px;
    height: 50px;
    transform: translateY(-15px) translateX(15px);
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 0 4px 4px rgb(0,0,0,.2);
    }
  }
  .personal-name{
    position: absolute;
    color: $HOME_NAV_FONT_COLOR;
    transform: rotate(270deg) translateX(-100px);
    opacity: 1;
  }
  .stretch-content{
    padding-left: 20px;
    height: 150px;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    .personal-role{
      font-size: 22px;
      margin-bottom: 20px;
    }
    .userId{
      color: $HOME_NAV_FONT_COLOR;
      margin-bottom: 6px;
    }
    .userPhone{
      color: $HOME_NAV_FONT_COLOR;
      margin-bottom: 6px;

    }
    .send-message{
      margin-top: 10px;
      color: $HOME_NAV_FONT_COLOR;
      font-size: 15px;
    }
  }
  .function-list{
    display: flex;
    flex:1;
    gap:25px;
    margin-bottom: 20px;
    padding-left: 20px;
    overflow: hidden;
    .function-list-item{
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;

    }
    .skyblue{
      background-color: #EBF3FE;
    }
    .pink{
      background-color: #FDF1F8;
    }
    .shallow-pink{
      background-color: #F8EEFC;
    }
  }
}
</style>