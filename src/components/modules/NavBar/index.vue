<script setup lang="ts">

import Application from "@/components/icons/ApplicationIcon.vue";
import UsersIcon from "@/components/icons/UsersIcon.vue";
import JournalIcon from "@/components/icons/JournalIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import CompanyManagementIcon from "@/components/icons/CompanyManagementIcon.vue";
import SettingIcon from "@/components/icons/SettingIcon.vue";
import SunIcon from "@/components/icons/SunIcon.vue";
</script>

<template>
  <div class="nav">
    <div class="nav-top">
      <div class="nav-logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="nav-logoName">
          YAO JING
      </div>
    </div>
    <div class="nav-list">
      <div class="nav-list-item">
        <div class="list-item-icon">
          <Application></Application>
        </div>
        <div class="list-item-name">
          应用
        </div>
      </div>
      <div class="nav-list-item">
        <div class="list-item-icon">
          <UsersIcon></UsersIcon>
        </div>
        <div class="list-item-name">
          用户
        </div>
      </div>
      <div class="nav-list-item">
        <div class="list-item-icon">
          <JournalIcon></JournalIcon>
        </div>
        <div class="list-item-name">
          日志
        </div>
      </div>
      <div class="nav-list-item">
        <div class="list-item-icon">
          <MenuIcon></MenuIcon>
        </div>
        <div class="list-item-name">
          菜单
        </div>
      </div>
      <div class="nav-list-item">
        <div class="list-item-icon">
          <CompanyManagementIcon></CompanyManagementIcon>
        </div>
        <div class="list-item-name">
          公司管理
        </div>
      </div>
    </div>
    <div class="nav-bottom">
      <p>Mode</p>
      <div class="nav-bottom-list">
        <div class="nav-list-item">
          <div class="nav-bottom-list-icon">
            <SettingIcon></SettingIcon>
          </div>
          <div class="list-item-name"></div>
        </div>
        <div class="nav-list-item">
          <div class="nav-bottom-list-icon nav-list-item-icon-choose">
            <SunIcon></SunIcon>
          </div>
          <div class="list-item-name">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: $FONT_FAMILY;

  .nav-top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .nav-logo{
      margin-top: 30px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .nav-logoName{
      font-size: 20px;
      font-weight: 300;
      color: $HOME_NAV_FONT_COLOR;
      font-weight: bold;
    }
  }
  .nav-list{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .nav-list-item{
      margin: 15px auto;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover{

        .list-item-icon{
          transform: scale(1.1) translateX(-30px);
          opacity: 0;
        }
        .list-item-name{
          transform:translateX(-33%);
          opacity: 1;

        }
      }
      .list-item-icon{
        transition: 1s;
      }
      .list-item-name{
        position: absolute;
        transform: translateX(-120px);
        box-sizing: border-box;
        width:100%;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        padding: 20px;
        transition: 1s;
        white-space: nowrap;
        font-size: 20px;
        color: $HOME_NAV_FONT_COLOR;
      }
    }
  }
  .nav-bottom{
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p{
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 25px;
      color: $HOME_NAV_FONT_COLOR;
    }
    .nav-bottom-list{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      box-sizing: border-box;
      padding: 10px 20px;
      background-color: $HOME_BG;
      border-radius: 30px;
      .nav-list-item{

        .nav-bottom-list-icon{
          margin-top: 20px;
        }
        .nav-list-item-icon-choose{
          background-color: $HOME_NAV_BG;
          padding: 4px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>