<script setup lang="ts">
import {TaskInfoData} from "@/components/modules/TaskWithGroup/type.ts";

defineProps({
  taskInfoData:{
    type: Object as () => TaskInfoData,
    default:() => ({
      taskName: '开发网页',
      taskDate: '2024-8-16',
      groupMember: [
          'https://www.keaitupian.cn/cjpic/frombd/0/253/2172411007/2786136231.jpg',
          'https://th.bing.com/th/id/OIP.5NSM0Kb1mSR3J6K31nHiIgAAAA?rs=1&pid=ImgDetMain',
          'https://th.bing.com/th/id/OIP.11przxGxcHIKgfNax3ju1AAAAA?rs=1&pid=ImgDetMain',
          'https://th.bing.com/th/id/OIP.11przxGxcHIKgfNax3ju1AAAAA?rs=1&pid=ImgDetMain'
      ],
      taskDescription: '该项目用于开发网页',
      taskStatus: '1',
    })
  }
})

</script>

<template>
<div class="task-content">
  <div class="task-name">
      {{taskInfoData.taskName}}
  </div>
  <div class="publish-time">
    {{ taskInfoData.taskDate }}
  </div>
  <div class="member">
    <template v-for="(item,index) in taskInfoData.groupMember" >

      <div class="img-wrapper" v-if="taskInfoData.groupMember.length <=2">
        <img :src="item" alt="">
      </div>
      <div class="img-wrapper" v-else v-if="index < 2">
        <img :src="item" alt="" >
      </div>
      <div v-if="index === 3" class="others">+{{taskInfoData.groupMember.length-2}}</div>
    </template>

  </div>
  <div class="description">
      该项目用于开发网页
  </div>
  <div class="status">
    开发中
  </div>
</div>
</template>

<style scoped lang="scss">
.task-content{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 20px;
  background-color: $HOME_NAV_BG;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 1s;
  gap: 20px;
  &:hover{
    transform: scale(1.05);
  }

  .task-name{
    white-space: nowrap;
  }
  .publish-time{
    white-space: nowrap;
  }
  .member{
    display: flex;
    flex-direction: row;
    width: 120px;
    margin-left: 10px;
    perspective: 500px;
    .others{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: bold;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background:#F0F8FF;
      transform: translateX(-15px) translateZ(60px);
    }
    .img-wrapper{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
      overflow: hidden;
      &:nth-child(1){
        transform: translateX(20px) translateZ(-30px);

      }
      &:nth-child(2){
        transform: translateX(5px) translateZ(0px);

      }
      &:nth-child(3){
        transform: translateX(-10px) translateZ(30px);

      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }

  }
  .description{
    white-space: nowrap;
  }
  .status{
    white-space: nowrap;
    margin-left: 10px;
  }
}
</style>