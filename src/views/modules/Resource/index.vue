<script setup lang="ts">
import MagnifyGlass from "@/components/icons/MagnifyGlass.vue";
import NotificationIcon from "@/components/icons/NotificationIcon.vue";
import ShowInfoCardWithList from '@/components/modules/InfoCard/ShowInfoCardWithList/index.vue'
import ResourceInfoCard from '@/components/modules/InfoCard/ResourceInfoCard/index.vue'
</script>

<template>
<div class="sourceContent">
  <div class="sourceContent-top">
    <div class="sourceContent-top-title">
      RESOURCES
    </div>
    <div class="sourceContent-top-search">
      <input type="text" placeholder="Search" >
      <MagnifyGlass class="magnify" icon-height="25" icon-width="25"></MagnifyGlass>
    </div>
    <div class="sourceContent-top-right">
      <div class="sourceContent-top-notification">
        <NotificationIcon class="notification" icon-width="40" icon-height="40"></NotificationIcon>
      </div>
      <div class="sourceContent-top-userInfo">
        <img src="@/assets/avatar03.jpg" alt="">
      </div>
    </div>


  </div>
  <div class="sourceContent-mainBody">
    <div class="sourceContent-mainBody-top">
      <div class="swapper">
        <el-carousel
            :interval="4000"
            type="card"
            arrow="hover"
            motion-blur="true"
        >
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="hotSource">
        <div class="topLook">
          <ShowInfoCardWithList></ShowInfoCardWithList>
        </div>
        <div class="topDownload">
          <ShowInfoCardWithList></ShowInfoCardWithList>
        </div>
      </div>
    </div>
    <div class="sourceContent-mainBody-bottom">
      <template v-for="item in 12">
        <div class="resourceInfoCardItem">
          <ResourceInfoCard></ResourceInfoCard>
        </div>
      </template>
    </div>
    <div class="changePage">
      <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          size="large"
      />
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.sourceContent{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 20px;
  padding-right: 50px;
  overflow: auto;
  .sourceContent-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .sourceContent-top-title{
      font-size: 50px;
      color: $HOME_NAV_FONT_COLOR
    }
    .sourceContent-top-search{
      position: relative;
      input{
        height: 40px;
        width: 800px;
        border: none;
        border-radius: 30px;
        box-sizing: border-box;
        padding: 20px;
        outline: none;
      }
      .magnify{
        position: absolute;
        top: 8px;
        right: 30px;
        cursor: pointer;
      }
    }
    .sourceContent-top-right{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      .sourceContent-top-notification{
        .notification{
          cursor: pointer;
        }
      }
      .sourceContent-top-userInfo{
        height: 50px;
        width: 50px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }

  }
  .sourceContent-mainBody{
    flex:1;
    box-sizing: border-box;
    padding: 50px 0px 50px 50px;
    .sourceContent-mainBody-top{
      display: flex;
      gap: 40px;
      .swapper{
        width: 60%;
        .el-carousel{
          height:500px;
          .el-carousel__item{
            border-radius: 30px;
            height: 500px;
            h3 {
              color: #475669;
              opacity: 0.75;
              line-height: 200px;

              margin: 0;
              text-align: center;
            }

            &:nth-child(2n) {
              background-color: #99a9bf;
            }

            &:nth-child(2n+1) {
              background-color: #d3dce6;
            }
          }
        }

      }
      .hotSource{
        flex:1;
        display: flex;
        flex-direction: row;
        gap: 20px;
        .topLook{
          width: 50%;
          height: 100%;
        }
        .topDownload{
          flex:1;

        }
      }
    }
    .sourceContent-mainBody-bottom{
      margin-top: 2vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .resourceInfoCardItem{
        flex: 0 0 22%;
        margin-top: 1vw;
      }
    }
    .changePage{
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>