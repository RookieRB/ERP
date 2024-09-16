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
  //background: -webkit-linear-gradient(90deg, #fbeded,#f8e1e1,#f7d9d7);
  //background: linear-gradient(90deg, #fbeded,#f8e1e1,#f7d9d7);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .container{
    width: 100%;
    height: 100%;
    //background: $HOME_BG;
    display: flex;
    box-sizing: border-box;
    background-color: $HOME_BG_COLOR;

    .container-left{
      width: 120px;
      min-width: 100px;
      background-color: $NAV_BG_COLOR;
      animation: showFromLeftToRight 1.75s ease-in-out forwards;
    }
    .container-right{
      flex:1;
      height:100%;
      box-sizing: border-box;
      padding: 10px 20px;
      overflow: hidden;
    }
  }
}


</style>