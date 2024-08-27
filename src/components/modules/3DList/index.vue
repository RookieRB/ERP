<script setup lang="ts">

</script>

<template>
  <ul>
    <li style="--i:1;">
      <img src="@/assets/avatar01.jpg" alt="">
      <div class="content">
        <h4>Alina Smith</h4>
        <p>liked your photo, <br><span>20 Apr at 05:40</span></p>
      </div>
    </li>
    <li style="--i:2;">
      <img src="@/assets/avatar02.jpg" alt="">
      <div class="content">
        <h4>Hamidah</h4>
        <p>commented your photo, <br><span>2 days ago</span></p>
      </div>
    </li>
    <li style="--i:3;">
      <img src="@/assets/avatar03.jpg" alt="">
      <div class="content">
        <h4>jaun Paul</h4>
        <p>reacted your photo, <br><span>6 min ago</span></p>
      </div>
    </li>
    <li style="--i:4;">
      <img src="@/assets/avatar04.jpg" alt="">
      <div class="content">
        <h4>lucia Soltan</h4>
        <p>share your photo, <br><span>20 Apr at 05:40</span></p>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
ul{
  position: relative;
  transform-style: preserve-3d;
  perspective: 500px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: 0.5s;
  &:hover{
    gap: 10px;
    li{
      opacity: 1;
      &:nth-child(1){
        transform: translateZ(0px) translateY(0px);
        background: #fff;
        opacity: 1;
      }
      &:nth-child(2){
        transform: translateZ(0px) translateY(0px);
        background: #fff;
      }
      &:nth-child(3){
        transform: translateZ(0px) translateY(0px);
        background: #fff;
      }
      &:nth-child(4){
        transform: translateZ(0px) translateY(0px);
        background: #fff;
      }
    }
  }

  li{
    position: relative;
    list-style: none;
    width: 250px;
    height: 50px;
    padding: 15px;
    background: #dbdbdb;
    gap: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 6px;
    box-shadow: 0 -15px 25px rgba(0,0,0,0.25);
    transition: 0.5s;
    transition-delay: calc(var(--i) * 0.05s);
    &:nth-child(1){
      transform: translateY(20px) translateZ(-65px);
      opacity: 0.6;
    }
    &:nth-child(3){
      transform: translateY(-15px) translateZ(75px);
      background: #eee;
    }
    &:nth-child(4){
      transform: translateY(-35px) translateZ(110px);
      background: #fff;
    }
    img{
      max-width: 30px;
      border-radius: 4px;
    }
    .content{
      width: 100%;
      cursor: pointer;
      h4{
        font-weight: 600;
        font-size: 12px;
        color: #333;
      }
      p{
        width: 100%;
        position: relative;
        color: #333;
        font-size: 8px;
        span{
          position: absolute;
          color: #888;
          top: 0;
          right:0;
          font-size: 10px;
          color: #888;
        }
      }
    }
  }
}

</style>