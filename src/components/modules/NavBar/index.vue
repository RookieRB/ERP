<script setup lang="ts">

import Application from "@/components/icons/ApplicationIcon.vue";
import UsersIcon from "@/components/icons/UsersIcon.vue";
import JournalIcon from "@/components/icons/JournalIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import CompanyManagementIcon from "@/components/icons/CompanyManagementIcon.vue";
import SettingIcon from "@/components/icons/SettingIcon.vue";
import SunIcon from "@/components/icons/SunIcon.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>

<template>

  <div class="nav">
    <div class="nav-top">
      <div class="btn">
        <div class="btn-item"></div>
        <div class="btn-item"></div>
        <div class="btn-item"></div>
      </div>
    </div>
    <div class="nav-main">
        <div class="nav-logo">
          <LogoIcon icon-width="40" icon-height="40"></LogoIcon>
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
          <div class="nav-bottom-list">
          <div class="nav-list-item">
            <div class="nav-bottom-list-icon nav-list-item-icon-choose">
              <SunIcon></SunIcon>
            </div>
          </div>
          <div class="nav-list-item">
            <div class="nav-bottom-list-icon">
              <SettingIcon></SettingIcon>
            </div>
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
  .nav-top{
    margin-top: 10px;
    .btn{
      width: 100%;
      height: 12px;
      display: flex;
      justify-content: flex-start;
      gap: 5px;
      .btn-item{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        &:nth-child(1){
          background-color: #eb5a56;
        }
        &:nth-child(2){
          background-color: #f8bc33;
        }
        &:nth-child(3){
          background-color: #62cb44;
        }
      }
    }
  }
  .nav-main{
    width: 100%;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-family: $FONT_FAMILY;
    .nav-logo{
      box-sizing: border-box;
      padding: 20px 0;
      border-bottom: 3px solid #dbdbdb;
    }
    .nav-list{
      flex:1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
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
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      .nav-bottom-list{
        display: flex;
        flex-direction: column;
        align-items: center;
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

}
</style>