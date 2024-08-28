<script setup lang="ts">
import ShowInfoCardTaskWithGroup from "@/components/modules/InfoCard/ShowInfoCardTaskWithGroup/index.vue";
</script>

<template>
  <div class="taskInfoList">
    <div class="title">Group</div>
    <div class="taskInfoList">
      <div class="introduce">
        <span class="taskName">项目名字</span>
        <span class="date">日期</span>
        <span class="member">开发人员</span>
        <span class="description">项目介绍</span>
        <span class="status">当前状态</span>
      </div>
      <div class="showInfoCardTaskWithGroup">
        <ShowInfoCardTaskWithGroup></ShowInfoCardTaskWithGroup>
        <ShowInfoCardTaskWithGroup></ShowInfoCardTaskWithGroup>
        <ShowInfoCardTaskWithGroup></ShowInfoCardTaskWithGroup>
        <ShowInfoCardTaskWithGroup></ShowInfoCardTaskWithGroup>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.taskInfoList{
  width: 100%;
  margin-top: 20px;
  margin-right: 30px;
  .title{
    font-size: 28px;
    font-weight: bold;
    color: $HOME_NAV_FONT_COLOR;

  }
  .taskInfoList{
    display: flex;
    flex-direction: column;
    width: 90%;
    min-width: 600px;

    color: $HOME_NAV_FONT_COLOR;
    .introduce{
      display: flex;
      font-size: 20px;
      gap: 65px;
      margin-bottom: 10px;
      .taskName{
        white-space: nowrap;
      }
      .date{
        white-space: nowrap;
        margin-left: -20px;
      }
      .member{

        white-space: nowrap;

      }
      .description{
        white-space: nowrap;
      }
      .status{
        white-space: nowrap;
      }
    }
    .showInfoCardTaskWithGroup{
      width: 100%;
      height: 100%;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}
</style>