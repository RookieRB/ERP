<script setup lang="ts">
import Interaction from '@/views/user/modules/dashboard/workbench/modules/Interaction/index.vue'
import UserInfo from '@/views/user/modules/dashboard/workbench/modules/UserInfo/index.vue'
import DetailInfo from '@/views/user/modules/dashboard/workbench/modules/DetailInfo/index.vue'
import Statistics from '@/views/user/modules/dashboard/workbench/modules/Statistics/index.vue'
import Notifications from '@/views/user/modules/dashboard/workbench/modules/Notifications/index.vue'
</script>

<template>
<div class="content">

  <div class="content-left">
    <div class="content-interaction animate__animated animate__fadeInLeft">
      <Interaction></Interaction>
    </div>
    <div class="content-bottom">
      <div class="content-statistics animate__animated animate__fadeInLeft">
        <Statistics></Statistics>
      </div>
      <div class="content-notifications animate__animated animate__fadeInLeft">
        <Notifications></Notifications>
      </div>
    </div>
  </div>
  <div class="content-right">
    <div class="content-userInfo animate__animated animate__fadeInLeft">
      <UserInfo></UserInfo>
    </div>
    <div class="content-detailInfo animate__animated animate__fadeInLeft">
      <DetailInfo></DetailInfo>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.content{
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  width: 100%;
  height:100%;
  .content-left{
    width: 63%;
    .content-interaction{

    }
    .content-bottom{
      margin-top: 30px;
      display: flex;
      gap: 20px;
      .content-statistics{
        width: 45%;
      }
      .content-notifications{
        flex:1;
      }
    }
  }
  .content-right{
    flex:1;
    margin-left: 20px;
    .content-userInfo{

    }
    .content-detailInfo{
      margin-top: 20px;
    }
  }
}
</style>