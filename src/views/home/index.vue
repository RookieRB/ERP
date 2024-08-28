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
  background: $BGC_THEME;
  //background: -webkit-linear-gradient(90deg, #fbeded,#f8e1e1,#f7d9d7);
  //background: linear-gradient(90deg, #fbeded,#f8e1e1,#f7d9d7);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .container{
    width: 97%;
    height: 97%;
    //background: $HOME_BG;
    border-radius: 50px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(26px);
    -webkit-backdrop-filter: blur(26px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-border-radius: 12px;

    .container-left{
      height: 74%;
      width: 120px;
      min-width: 100px;
      background-color: $HOME_NAV_BG;
      border-radius: 60px;
      margin: auto 0;
      animation: showFromLeftToRight 1.75s ease-in-out forwards;
    }
    .container-right{
      flex:1;
      height: 98%;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
}


</style>