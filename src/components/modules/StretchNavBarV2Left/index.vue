<script setup lang="ts">
import {ref} from 'vue'
import type {StretchNavBarDataInfo} from "@/components/modules/StretchNavBarV2Left/type.ts";
import {useRouter} from "vue-router";

defineProps({
  stretchBarDataInfo: {
    type: Object as () => StretchNavBarDataInfo
  }
})
const emit = defineEmits(['get-currentSonPageName'])

const router = useRouter();
let currentSonPage = ref(0)


// 前往对应的页面
const goToPageHandler = (item,index) => {
  router.push(item.path)
  currentSonPage.value = index;
  emit('get-currentSonPageName',item.name)
}
</script>

<template>
<div class="stretch-navBar">
    <div class="stretch-navBar-content">
      <div class="content-top">
        {{stretchBarDataInfo.name}}
      </div>
      <div class="content-top-list">
        <template v-for="(item,index) in stretchBarDataInfo.children" :key="index">
          <div class="content-list-item" :class="{'content-list-item-choose':currentSonPage === index}" @click="goToPageHandler(item,index)">
            <div class="item-icon">
              <Component :is="item.icon" icon-height="20" icon-width="20"></Component>
            </div>
            <div class="item-name">
              {{item.name}}
            </div>
          </div>
        </template>
      </div>
      <div class="br"></div>
      <div class="content-middle-list">

      </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.stretch-navBar{
  width: 100%;
  height: 100%;

  background-color: $NAV_BAR_V2_BG_COLOR;
  .stretch-navBar-content{
    height: 100%;
    box-sizing: border-box;
    padding: 30px 20px 0 20px;
    .content-top{
      font-size: 25px;
      font-weight: bold;
      white-space: nowrap;
    }
    .content-list-item-choose{
      background: #ebebeb;
    }
    .content-list-item{
      display: flex;
      white-space: nowrap;
      margin-top: 10px;
      width: 100%;
      box-sizing: border-box;
      padding: 8px;
      border-radius: 5px;
      cursor: pointer;
      gap:20px;
      color: #515151;
      &:hover{
        background: #ebebeb;
      }
      .item-icon{
        line-height: 15px;
      }
      .item-name{
        margin: auto 0;
        font-size: 16px;
      }
    }
    .content-top-list{
      margin: 20px 0;
    }
    .br{
      border: 1px solid #ebebeb;
    }
    .content-middle-list{
    }
  }
}
</style>