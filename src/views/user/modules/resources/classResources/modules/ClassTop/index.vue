<script setup lang="ts">
import {ref} from 'vue';
import ClassSearchIcon from "@/components/icons/ClassSearchIcon.vue";
// 创建一个总的ref
const classTopRef = ref(null);
// 创建一个搜索框ref
const switchRef = ref(null);
// 定义一个变量记录当前表头是打开还是关闭状态
let isOpen = ref(false);

// 点击搜索框后的逻辑处理
const searchBarClickHandler = () => {
  isOpen.value = true;
  switchRef.value.style.width="60%";
  switchRef.value.style.height="180px";
}


</script>

<template>
  <div class="class-top" ref="classTopRef">
    <div class="switch" @click="searchBarClickHandler" ref="switchRef">
      <div class="search-bar search-btn-close " v-show="!isOpen">
     
     <button class="button">
     <span class="writer fontStyle rborder">
          作品
     </span>
   </button>
   <button class="button" v-show="!isOpen">
     <span class="time fontStyle flex1 rborder">
       时间
     </span>
   </button>
   <button class="button">
     <span class="collection fontStyle flex1" v-show="!isOpen">
       作者
     </span>
     <span class="search-btn">
       <ClassSearchIcon icon-height="14px" icon-width="14px"/>
     </span>
   </button>
   
  
 </div>
 <div class="search-bar search-btn-open "  v-show="isOpen">
   <button class="button">
     <span class="fontStyle inputStyle ">
          <span class="topStyle">
            作品名字
          </span>
       <input type="text" placeholder="请输入作品的名字" class="bottomStyle">
     </span>
   </button>
   <div class="br"></div>
   <button class="button">
     <span class="inputStyle ">
       <span class="topStyle">
         开始
       </span>
       <span class="bottomStyle">
         添加日期
       </span>
     </span>
   </button>
   <div class="br"></div>
   <button class="button">
      <span class="inputStyle ">
       <span class="topStyle">
         结束
       </span>
       <span class="bottomStyle">
         添加日期
       </span>
     </span>
   </button>
   <div class="br"></div>
   <button class="button">
     <span class="inputStyle">
       <span class="topStyle">
         作者名字
       </span>
       <input type="text" placeholder="请输入作者的名字" class="bottomStyle">
     </span>
     <span class="search-btn">
       <ClassSearchIcon icon-height="14px" icon-width="14px"/>
     </span>
   </button>
 </div>
    </div>
  
  </div>
</template>

<style scoped lang="scss">
.class-top {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  .switch{
    height: 75px;
    width: 100%;
    margin: 20px 0;
    display: flex;
    transition: all 1s ease;
    .search-btn-open{
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, .2);
   
    .button{
      height: 66px;
      &:hover{
        background: rgb(235, 235, 235);
        border-radius: 30px;
        .inputStyle{
          input{
            background: rgb(235, 235, 235);
          }
        }
      }
      .search-btn{
        padding: 14px;
      }
      .fontStyle{
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .search-btn-close{
    width: 30%;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, .12);
    .button{
      height: 48px;
      .search-btn{
        padding: 6px;
      }
    }
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 30px;
    margin: auto 0;
    overflow: hidden;
    transition: all 0.4s ease;
    .br{
      height: 33px;
      width: 2px;
      background: #ebebeb;
    }
    .button {
      display: flex;
      align-items: center;
      border: none;
      background: #fff;
      width:  45%;
      cursor: pointer;
      font-weight: 300;
      .fontStyle{
        font-size: 17px;
      }
      .inputStyle{
        width: 78%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 5px;
        input{
          border: none;
          outline: none;
          &::-webkit-input-placeholder{
            color: rgb(171, 171, 171);
          }
        }
        .topStyle{
          font-size: 15px;
          line-height: 15px;
        }
        .bottomStyle{
          font-size: 14px;
          line-height: 14px;
          white-space: nowrap;
          color: rgb(171, 171, 171);
        }
      }
      .rborder{
        border-right: 2px solid #ebebeb;
      }
      .writer {
        width: 100%;
      }
      .flex1{
        flex:1;
      }
      .time {

      }
      .search-btn {
        background: rgb(255, 56, 92);
        border-radius: 25px;
        transform: translateX(-15%);

      }
    }




  }
  }
  

}
</style>