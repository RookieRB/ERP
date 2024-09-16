<script setup lang="ts">

</script>

<template>
<div class="my-swapper">
  <el-carousel
      :interval="4000"
      type="card"
      arrow="hover"
      motion-blur="true"
  >
    <el-carousel-item v-for="item in 6" :key="item">
      <img src="@/assets/avatar.jpg" alt="">
      <div class="item-text">

      </div>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<style scoped lang="scss">
.my-swapper{
  width: 100%;
  height: 100%;

  .el-carousel{
    height:500px;
    .el-carousel__item{
      border-radius: 30px;
      height: 500px;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .item-text{

      }
    }
  }

}
</style>