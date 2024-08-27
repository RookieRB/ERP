<script setup lang="ts">
import NavBar from '@/components/modules/NavBar/index.vue'
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="container-left">
        <NavBar></NavBar>
      </div>
      <div class="container-right">
          <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100vh;
  min-height: 1080px;
  min-width: 1920px;
  background: -webkit-linear-gradient(90deg, #fbeded,#f8e1e1,#f7d9d7);
  background: linear-gradient(90deg, #fbeded,#f8e1e1,#f7d9d7);
  display: flex;
  justify-content: center;
  align-items: center;
  .container{
    width: 98%;
    height: 98%;
    //background: $HOME_BG;
    border-radius: 50px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-border-radius: 25px;

    .container-left{
      height: 70%;
      width: 140px;
      min-width: 100px;
      background-color: $HOME_NAV_BG;
      border-radius: 60px;
      margin: auto 0;
      animation: showFromLeftToRight 1.75s ease-in-out forwards;
    }
    .container-right{
      flex:1;
      height: 95%;
      margin: auto;
      box-sizing: border-box;
    }
  }
}


</style>