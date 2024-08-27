<script setup lang="ts">
  import NoteBook from '@/components/modules/notebook/index.vue'
  import List3D from '@/components/modules/3DList/index.vue'
  import Notification from "@/components/icons/NotificationIcon.vue";
  import LeftArrow from "@/components/icons/LeftArrowIcon.vue";
</script>

<template>
  <div class="user-container">
    <div class="user-left">
      <div class="user-left-top">
        <h1>早上好!! Vitaliy</h1>
        <p>欢迎来到erp系统</p>
      </div>
      <div class="user-left-middle">
        <div class="user-left-middle-userInfo">
          
        </div>
        <div class="user-left-middle-information">
          <List3D></List3D>
        </div>
      </div>
    </div>
    <div class="user-right">
      <div class="user-right-top">
        <div class="user-right-top-back">
          <LeftArrow></LeftArrow>
        </div>
        <div class="user-right-top-notification">
          <Notification></Notification>
        </div>
      </div>
      <div class="user-right-avatar">
        <img src="@/assets/avatar.jpg" alt="">
        <p>User Name</p>
      </div>
      <div class="user-right-userInfo">
        <div class="user-right-userInfo-item">
          <p>Teams</p>
          <span class="number">3</span>
        </div>
        <div class="line"></div>
        <div class="user-right-userInfo-item">
          <p>Projects</p>
          <span class="number">10</span>
        </div>
        <div class="line"></div>
        <div class="user-right-userInfo-item">
          <p>Feedback</p>
          <span class="number">11</span>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
*{
  font-family: $FONT_FAMILY;
  box-sizing: border-box;
}
.user-container{
  width: 100%;
  height: 100%;
  display: flex;
  .user-left{
    width: 70%;
    height: 100%;
    display: flex;
    margin-left: 30px;
    margin-top: 30px;
    flex-direction: column;
    .user-left-top{
      h1{
        font-size: 32px;
      }
      p{
        font-weight: 400;
        margin-top: 8px;
      }
    }
    .user-left-middle{
      margin-top: 40px;
      width: 90%;
      height: 50%;
      display: flex;
      .user-left-middle-userInfo{
        width: 60%;
        border-radius: 30px;

      }
      .user-left-middle-information{
        margin-left: 100px;
      }
    }
  }
  .user-right{
    flex:1;
    height: 100%;
    background: rgb(247,247,247);
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 20px 50px;

    .user-right-top{
      display: flex;
      height: 10vh;
      align-items: center;
      .user-right-top-back{
        flex:1;
      }
      .user-right-top-notification{
        margin-right: 40px;
      }
    }
    .user-right-avatar{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        height: 200px;
        width: 200px;
        border-radius: 50%;
      }
      p{
        font-size: 2em;
        font-weight: 400;
        margin-top: 20px;
      }
    }
    .user-right-userInfo{
      .user-right-userInfo-item{
        display: flex;
        p{
          flex:1;
          font-size: 28px;

        }
        span{
          font-size: 20px;
        }
      }
      .line{
        margin: 10px 0;
        width: 100%;
        height: 2px;
        background: rgba(0,0,0,.1);
      }
    }
  }
  
}
</style>