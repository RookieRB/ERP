<script setup lang="ts">
import {ref} from 'vue'
import AddIcon from "@/components/icons/AddIcon.vue";
import ThemeChangerIcon from "@/components/icons/ThemeChangerIcon.vue";
import ThunderIcon from "@/components/icons/ThunderIcon.vue";
import SettingIcon from "@/components/icons/SettingIcon.vue";

defineProps({
  navBarArray: {
    type: Array,
  }
})
// 信号发射
const emit = defineEmits(['page-change'])
// 定义一个当前页序号,用于选择样式更改
let currentPage = ref(0)
// 发送点击后更改的页面序号
const sendPageIndexHandler = (index) => {
  currentPage.value = index;
  emit("page-change", index)
}

</script>

<template>
  <div class="nav-bar">
    <div class="nav-bar-logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="nav-bar-list">
      <template v-for="(item,index) in navBarArray" :key="index">

        <div class="nav-bar-list-item" :class="{'nav-bar-list-item-choose': index === currentPage}"
             @click="sendPageIndexHandler(index)">
          <component :is="item.icon" icon-height="25" icon-width="25"></component>
        </div>
      </template>
    </div>
    <div class="add-button">
      <AddIcon icon-height="40" icon-width="40"></AddIcon>
    </div>
    <div class="nav-bar-bottomList">
      <div class="nav-bar-bottomList-item">
        <ThemeChangerIcon icon-height="25" icon-width="25"></ThemeChangerIcon>
      </div>
      <div class="nav-bar-bottomList-item">
        <ThunderIcon icon-height="25" icon-width="25"></ThunderIcon>
      </div>
      <div class="nav-bar-bottomList-item">
        <SettingIcon icon-height="25" icon-width="25"></SettingIcon>
      </div>
    </div>
    <div class="user-info">
      <img src="@/assets/avatar01.jpg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $NAV_BAR_V2_BG_COLOR;

  .nav-bar-logo {
    height: 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .nav-bar-list {
    margin-top: 10px;
    flex: 1;

    .nav-bar-list-item {
      margin-top: 5px;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 7px;
      cursor: pointer;

      &:hover {
        background: #ebebeb;
      }
    }

    .nav-bar-list-item-choose {
      background: #ebebeb;
    }

    .br {
      border: 1px solid #ebebeb;
      margin-top: 5px;
    }
  }

  .add-button {

  }

  .nav-bar-bottomList {
    display: flex;
    flex-direction: column;
    justify-content: end;


    .nav-bar-bottomList-item {
      margin-top: 15px;
    }

  }

  .user-info {
    margin-top: 15px;
    margin-bottom: 20px;
    width: 35px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>