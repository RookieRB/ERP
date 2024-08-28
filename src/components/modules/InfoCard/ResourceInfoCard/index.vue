<script setup lang="ts">
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import FireIcon from "@/components/icons/FireIcon.vue";
import FolderWithColorIcon from "@/components/icons/FolderWithColorIcon.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";
</script>

<template>
  <div class="content">
    <div class="content-top">
      <img src="@/assets/bg.jpg" alt="">
    </div>
    <div class="content-bottom">
      <div class="publish-time">
        <CalendarIcon icon-height="19" icon-width="19"></CalendarIcon>
        <span>发布于 2024-08-29 13:50:05</span>
      </div>
      <div class="resource-name">
        学习资料
      </div>
      <div class="description">
        用于学习所需相关资源11111111111111111111111111111
      </div>
      <div class="others">
        <div class="publisher layout">
          <FolderWithColorIcon icon-height="19" icon-width="19"></FolderWithColorIcon>
          <span>小猫爱吃鱼</span>
        </div>
        <div class="fire layout">
          <FireIcon icon-height="19" icon-width="19"></FireIcon>
          <span>4000 热度</span>
        </div>
        <div class="download layout">
          <DownloadIcon icon-height="19" icon-width="19"></DownloadIcon>
          <span>5000 次下载</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  background: $HOME_BG;
  display: flex;

  flex-direction: column;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    box-shadow: $BOX_SHADOW;

    .content-top {
      img {
        transform: scale(1.5);
      }
    }

    .content-bottom {
      .description {

      }

    }
  }

  .content-top {
    flex: 3;
    overflow: hidden;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      object-fit: cover;
      transform: scale(1);
      transition: transform 1s;
    }
  }

  .content-bottom {
    flex: 1;
    box-sizing: border-box;
    padding: 15px;
    .publish-time{
      display: flex;
      align-items: center;
      span{
        margin-left: 5px;
      }
    }
    .resource-name {
      font-size: 24px;
      font-weight: bold;
      padding: 5px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .description {
      max-width: 300px;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .others{
      display: flex;
      gap: 10px;
      span{
        font-size: 14px;
        line-height: 22px;
        vertical-align: baseline;
      }
      .layout{
        display: flex;
        gap: 2px;
      }
      .publisher {


      }
      .fire{

      }
      .download{

      }
    }
  }


}
</style>