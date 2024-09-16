<script setup lang="ts">
import {ref} from 'vue'

// 引入Mock资源
import {navBarMock} from '@/Mock/navBarMock.ts'
import NavBarV2 from '@/components/modules/NavBarV2/index.vue'
import StretchNavBarV2Left from '@/components/modules/StretchNavBarV2Left/index.vue'
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";
import RightArrowIcon from "@/components/icons/RightArrowIcon.vue";
import PageContentIcon from "@/components/icons/PageContentIcon.vue";
import LanguageIcon from "@/components/icons/LanguageIcon.vue";
import {getCurrentTimeFormat} from '@/utils/common.ts'


// 当前所在页
let currentPage = ref(0)
// 控制侧边栏伸缩开关
let ifClose = ref(false);
// 用于保存子页面的名字
let currentSonPageName = ref(navBarMock[0].children[0].name)

// 获取content-right-stretchBar的ref
const contentRightStretchBarRef = ref();

// 关闭
const closeButtonClickHandler = () => {
  ifClose.value = !ifClose.value;
  contentRightStretchBarRef.value.style.width = "0";
}
// 打开
const openCloseButtonClickHandler = () => {
  ifClose.value = !ifClose.value;
  contentRightStretchBarRef.value.style.width = "15%";

}

// 页面修改函数回调
const currentPageChangeHandler = (index) => {
  currentPage.value = index;
}
// 获取用户选取子页面的名字回调
const currentSonPageNameHandler = (pageName) => {
  currentSonPageName.value = pageName

}


</script>

<template>
  <div class="user-content">
    <div class="content-left">
      <NavBarV2 :navBarArray="navBarMock" @page-change="currentPageChangeHandler"></NavBarV2>
    </div>
    <div class="content-right">
      <div class="content-right-stretchBar" ref="contentRightStretchBarRef">
        <div class="close-button" @click="closeButtonClickHandler" v-if="!ifClose">
          <LeftArrowIcon icon-width="20" icon-height="20" class="arrow"></LeftArrowIcon>
        </div>
        <div class="open-button" v-else @click="openCloseButtonClickHandler">
          <RightArrowIcon icon-width="20" icon-height="20" class="arrow"></RightArrowIcon>
        </div>
        <StretchNavBarV2Left :stretchBarDataInfo="navBarMock[currentPage]"
                             @get-currentSonPageName="currentSonPageNameHandler"
                             class="content-right-stretchBar-main"></StretchNavBarV2Left>
      </div>
      <div class="switch-page">
        <div class="switch-page-top">
          <div class="top-content">
            <div class="top-content-top">
              <div class="currentPage-name">
                {{ currentSonPageName }}
              </div>
            </div>
            <div class="top-content-bottom">
              <div class="icon">
                <page-content-icon icon-width="20" icon-height="20"></page-content-icon>
                <span>Page</span>
              </div>
              <div class="dot">
              </div>
              <div class="language">
                <LanguageIcon icon-width="20" icon-height="20"></LanguageIcon>
                <span> 中文 </span>
              </div>
              <div class="dot">
              </div>
              <div class="open-time">
                {{ getCurrentTimeFormat() }}
              </div>
            </div>
          </div>
        </div>
        <div class="router">
          <router-view></router-view>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-content {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  user-select: none;
  .content-left {
    width: 3%;
    min-width: 60px;
    height: 100%;
    border-right: 2px solid #ededed;
  }

  .content-right {
    flex: 1;
    display: flex;
    flex-direction: row;

    .content-right-stretchBar {
      position: relative;
      transition: width .5s;
      width: 15%;

      .close-button {
        position: absolute;
        right: -10px;
        top: 3%;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, .2);
        cursor: pointer;

        .arrow {
          margin-top: 2px;
        }
      }

      .open-button {
        position: absolute;
        left: -10px;
        top: 3%;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, .2);
        cursor: pointer;

        .arrow {
          margin-top: 2px;
        }
      }

      .content-right-stretchBar-main {
        overflow: hidden;
      }
    }

    .switch-page {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      .switch-page-top {

        height: 80px;
        width: 100%;
        background: #fff;
        box-shadow: 0 2px 18px 9px #ebebeb;

        .top-content {
          padding: 15px 40px;

          .top-content-top {
            margin-bottom: 10px;

            .currentPage-name {

            }
          }

          .top-content-bottom {
            display: flex;
            align-items: center;
            gap: 10px;

            .icon {
              display: flex;
              gap: 10px;

              span {
                color: $HOME_FONT_COLOR_SHALLOW_WHITE;
              }
            }

            .dot {
              width: 3px;
              height: 3px;
              margin: auto 0;
              border-radius: 50%;
              background: $HOME_FONT_COLOR_SHALLOW_WHITE;
            }

            .language {
              display: flex;
              gap: 10px;
              color: $HOME_FONT_COLOR_SHALLOW_WHITE;
            }

            .open-time {
              color: $HOME_FONT_COLOR_SHALLOW_WHITE;
            }
          }
        }
      }
      .router{
        flex:1;

      }
    }
  }
}
</style>