  <script setup lang="ts">
import {InfoListItemData} from "@/components/modules/InfoListItem/type.ts";
defineProps({
  infoListItemData:{
    type: Object as () => InfoListItemData,
    default:{
      img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.qCys2C8LjF8c3_UHbGOooAAAAA?rs=1&pid=ImgDetMain',
      title: 'Interview',
      description: 'penny Porter',
      time: '9 AM'
    }
  }
})
</script>

<template>
  <div class="info-list-item">
    <div class="img">
      <img :src="infoListItemData.img" alt="">
    </div>
    <div class="content">
      <div class="content-left">
        <div class="title">
          {{infoListItemData.title}}
        </div>
        <div class="description">
          {{infoListItemData.description}}
        </div>
      </div>
      <div class="time">
        {{infoListItemData.time}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-list-item{
  width: 98%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 2px 2px rgba(0,0,0,.2);
  margin-bottom: 1vw;
  .img{
    width: 50px;
    height: 50px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .content{
    display: flex;
    flex: 1;
    margin-left: 20px;
    .content-left{

      .title{

        font-size: 21px;
        margin-bottom: 5px;
      }
      .description{
        font-size: 14px;

      }
    }
    .time{
      flex:1;
      display: flex;
      justify-content: end;
      align-items: center;
      font-size: 22px;
      font-weight: bold;
      min-width: 100px;
    }
  }
}
</style>