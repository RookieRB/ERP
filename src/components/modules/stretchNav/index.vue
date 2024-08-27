<script setup lang="ts">

</script>

<template>
  <div class="wrap">
    <div class="nav">
      <div class="btn">
        <div class="btn-item"></div>
        <div class="btn-item"></div>
        <div class="btn-item"></div>
      </div>
      <div class="icon">
         <div class="icon-img">
           <img src="@/assets/avatar.jpg" alt="">
         </div>
         <div class="icon-con">
           <p>Good Day</p>
           <h2> Vitaliy D.</h2>
         </div>
       </div>
      <div class="line"></div>
      <div class="title">
        <p>Menu</p>
      </div>
        <div class="menu">
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">用户界面</div>
            <div class="ricon"><span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">Discount</div>
            <div class="ricon"><span class="iconfont icon-shexiang"></span></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">Discount</div>
            <div class="ricon"><span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">Discount</div>
            <div class="ricon"><span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span></div>
          </div>
        </div>
        <div class="line"></div>
        <div class="title">
          <p>Sever 6</p>
        </div>
        <div class="serve">
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">Discount</div>
            <div class="ricon"><span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">Discount</div>
            <div class="ricon"><span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">Discount</div>
            <div class="ricon"><span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span>
            </div>
            <div class="con">Discount</div>
            <div class="ricon"><span class="iconfont icon-shexiang"><el-icon><Filter /></el-icon></span></div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
*{
  box-sizing: border-box;
  color: $HOME_NAV_FONT_COLOR;
  margin: 0;
  padding: 0;
}
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav{
    width: 110px;
    //width: 280px;
    height: 100%;
    background:  $HOME_NAV_BG;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.5s;
    &:hover{
      width: 280px;
      .line{
        width: 230px;
      }
      .item{
        .con{
          width: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 1;
        }
        .ricon{
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 1;
        }
      }
      .menu{

      }
      .serve{
        width: 230px;
      }

    }
    .btn{
      width: 60px;
      height: 10px;
      display: flex;
      justify-content: space-around;
      margin-left: 25px;
      margin-top: 25px;
      .btn-item{
        width: 10px;
        height: 10px;
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
    .icon{
      width: 250px;
      height: 60px;
      margin-left: 25px;
      margin-top: 20px;
      display: flex;
      .icon-img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border:4px solid rgba(255,255,255,.3);
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

      }
      .icon-con{
        margin-left: 25px;
        p{
          margin-top: 5px;
        }
        h2{
          font-weight: 400;
        }
      }

    }
    .line{
      width: 60px;
      height: 1px;
      background: rgba(245,253,255,.5);
      margin: 20px 25px;
      transition: 0.5s;
    }
    .title{
      width: 60px;
      margin-left:25px;
      margin-bottom:20px;
      p{
        font-size: 14px;
      }
    }
    .menu{
      width: 230px;
      margin-left: 25px;

    }
    .item{
      display: flex;
      position: relative;
      transition: 0.5s;
      border-radius: 6px;
      cursor: pointer;
      &:hover{
        background: rgba(255,255,255,.1);
        .light{
          opacity: 1;
        }
      }
      .light{
        width: 6px;
        height: 50px;
        background: #eb5a56;
        position: absolute;
        left: -25px;
        transition: .5s;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        opacity: 0;
      }
      .licon{
        width: 60px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont{
          font-size: 26px;

        }
      }
      .con{
        width: 0;
        height: 50px;
        display: flex;

        justify-content: center;
        align-items: center;
        transition: 0.2s;
        overflow: hidden;
        position: relative;
        left: -20px;
        opacity: 0;
      }
      .ricon{
        width: 0;
        height: 50px;
        transition: 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .iconfont{
          font-size: 20px;
          color:#62cb44;
        }
      }
    }
    .serve{
      width: 60px;
      background: rgba(0,0,0,.3);
      margin-left: 25px;
      border-radius: 10px;
      overflow: hidden;
      transition: 0.5s;

    }
  }
}
</style>