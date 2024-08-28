<script setup lang="ts">

</script>

<template>
  <div class="content">
    <div class="card">
      <div class="tools">
        <div class="cardName">
          最多观看榜单
        </div>
        <div class="circleList">
          <div class="circle">
            <span class="red box"></span>
          </div>
          <div class="circle">
            <span class="yellow box"></span>
          </div>
          <div class="circle">
            <span class="green box"></span>
          </div>
        </div>

      </div>
      <div class="hr">

      </div>
      <div class="list">
        <div class="list-item-Top1">
          <div class="left">
            <div class="rank">NO.1</div>
            <div class="resourceName fontSize">学习资料</div>
            <div class="number red">4000</div>
            <div class="publisher">
              小猫爱吃鱼
            </div>
          </div>
          <div class="right">
            <img src="@/assets/avatar02.jpg" alt="">
          </div>
        </div>
        <div class="list-item">
          <div class="rank">
            NO.2
          </div>
          <div class="resourceName">
            学习资料
          </div>
          <div class="number">
            4000
          </div>
        </div>
        <div class="list-item">
          <div class="rank">
            NO.2
          </div>
          <div class="resourceName">
            学习资料
          </div>
          <div class="number">
            4000
          </div>
        </div>
        <div class="list-item">
          <div class="rank">
            NO.2
          </div>
          <div class="resourceName">
            学习资料
          </div>
          <div class="number">
            4000
          </div>
        </div>
        <div class="list-item">
          <div class="rank">
            NO.2
          </div>
          <div class="resourceName">
            学习资料
          </div>
          <div class="number">
            4000
          </div>
        </div>
        <div class="list-item">
          <div class="rank">
            NO.2
          </div>
          <div class="resourceName">
            学习资料
          </div>
          <div class="number">
            4000
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content{
  width: 100%;
  height: 100%;
  .card {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: $HOME_BG;
    border-radius: 15px;
    z-index: 1;
    .tools {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      .circleList{
        display: flex;
        .circle {
          padding: 0 4px;
          .box {
            display: inline-block;
            align-items: center;
            width: 10px;
            height: 10px;
            padding: 1px;
            border-radius: 50%;
          }
          .red {
            background-color: #ff605c;
          }

          .yellow {
            background-color: #ffbd44;
          }

          .green {
            background-color: #00ca4e;
          }
        }
      }
      .cardName{
        font-size: 24px;
      }
    }
    .hr{
      margin: 10px 20px;
      border: 1px solid rgba(0,0,0,.25);
    }
    .list{
      box-sizing: border-box;
      padding: 25px;
      .rank{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding:4px;
        background:	#EE0000;
        font-size: 18px;
        color: white;
        font-weight: bold;
      }
      .list-item-Top1{
        display: flex;
        flex-direction: row;
        .left{
          width: 40%;
          display: flex;
          flex-direction: column;
          gap:8px;
          .fontSize{
            font-size: 20px;
            font-weight: 500;
          }
          .red{
            color: red;
            font-size: 18px;
          }
          .publisher{
            font-size: 16px;
            color: #a8a8a8;
          }
        }
        .right{
          flex:1;
          height: 120px;
          border-radius: 15px;
          overflow: hidden;
          img{
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
      .list-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        margin-top:20px;
        &:hover{
         .resourceName{
           color: $HOVER_COLOR;
         }
        }
      }
    }
  }




}
</style>