<script setup lang="ts">
import {ref,reactive} from 'vue';
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";


import {usernamePattern,pwdPattern,emailPattern} from '@/utils/verified.ts';
import useUserStore from "@/store/modules/user.ts";
import {UserLoginData, UserRegisterData} from "@/api/user/type.ts";

// 控制登录显示消失
let isShowLoginPanel = ref(true);
// 控制注册面板组件
let isShowRegisterPanel = ref(false);
// 登录对象
let loginUser:UserLoginData = reactive({
  username: '',
  password: ''
});
// 注册对象
let registerUser:UserRegisterData = reactive({
  username: '',
  password: '',
  email:'',
  verifiedCode: ''
});
// 获取路由组件
const $router = useRouter();
// 获取userStore
const userStore = useUserStore();

// 左边动画监听
const onPeopleAnimationed = (event:AnimationEvent) => {
  const target = event.target as HTMLElement
  target.classList.remove('p-animtion')
  target.classList.add('p-other-animtion')
}
const onSphereAnimationEnd = (event:AnimationEvent) => {
  const target = event.target as HTMLElement
  target.classList.remove('s-animtion')
  target.classList.add('s-other-animtion')
}

// 前往注册页面
const toRegisterPanel = () => {
  isShowLoginPanel.value = false;
  isShowRegisterPanel.value = true;
}

// 前往登录页面
const toLoginPanel = () => {
    isShowRegisterPanel.value = false;
    isShowLoginPanel.value = true;
}

// 登录按钮逻辑
const siginInButton = () =>{
  if(!loginUser.username || !loginUser.password){
    ElMessage({
      type: "error",
      message: '必须输入账号与密码才能登录哦',

    })
    return;
  }
  if(!usernamePattern.test(loginUser.username) || !pwdPattern.test(loginUser.password)){
    // 用户名验证或者密码格式验证不正确
    ElMessage({
      type: "error",
      message: '请输入正确格式的用户名或者密码',
    })
    return;
  }
  // 进行登录验证
  // 注意！因后端写的时userName字段，所以传过去userName
  userStore.userLogin({
    userName:loginUser.username,
    password:loginUser.password}
  ).then(
      (res:any) => {
        if(res === 'ok'){
          // 登录成功,执行后续步骤
          //  页面跳转
          $router.push('/home')
          //todo
          //
        }else{
          ElMessage({
            type: "error",
            message: res.msg,
          })
        }
      }
  )
}
// 注册按钮逻辑
const registerUserButton = () => {
  if (!registerUser.username || !registerUser.password || !registerUser.email || !registerUser.verifiedCode) {
    ElMessage({
      type: "warning",
      message: '必须要全部填写才能进行注册哦'
    })
    return;
  }
  // 判断用户名是否合法
  if (!usernamePattern.test(registerUser.username)) {
    ElMessage({
      type: "error",
      message: '用户名格式不正确'
    })
    return;
  }
  // 判断密码是否合法
  if (!pwdPattern.test(registerUser.password)) {
    ElMessage({
      type: "error",
      message: '密码输入格式不正确'
    })
    return
  }
  // 判断邮箱是否合法
  if (!emailPattern.test(registerUser.email)) {
    ElMessage({
      type: "error",
      message: '邮箱输入格式不正确'
    })
    return;
  }
  //进行注册
  //注意！因后端写的时userName字段，所以传过去userName
  userStore.userRegister({
    userName: registerUser.username,
    password: registerUser.password,
    email: registerUser.email,
    verifiedCode: registerUser.verifiedCode
  }).then(
      (res:any) => {
        if(res === 'success'){
          // 注册成功
          // 提示注册成功
          ElMessage({
            type: "success",
            message: '注册成功，去登陆吧!'
          })
          // 前往登录页面
          toLoginPanel()
        }else{
          // 注册失败
          // 提示相应的错误信息
          ElMessage({
            type: "warning",
            message: res
          })
        }
      }
  )
}


</script>

<template>
  <div class="main">
    <div class="content">
      <div class="left">
        <img src="@/assets/img2.png" class="people p-animtion" alt="people" @animationend="onPeopleAnimationed">
        <img src="@/assets/img1.png" class="sphere s-animtion" alt="sphere" @animationend="onSphereAnimationEnd">
      </div>
      <div class="right">
          <div class="top">
          <div class="top-item">
            <span class="top-text no-select" @click="toLoginPanel">Home</span>
          </div>
          <div class="top-item">
            <span class="top-text no-select" @click="toRegisterPanel">Register</span>
          </div>
          <div class="top-item">
            <span class="top-text no-select">Contact Us</span>
          </div>
          <div class="top-item">
            <span class="top-text no-select">Help</span>
          </div>
        </div>
        <div class="form-wrappepr">
          <div class="form-login"  v-if="isShowLoginPanel">
            <h1 class="no-select">Enter Our System</h1>
            <form>
              <input type="text" class="inputs user no-select" placeholder="Enter username" v-model="loginUser.username" required>
              <input type="password" class="inputs pwd no-select" placeholder="Password" v-model="loginUser.password" autocomplete="off" required>
              <span class="tips no-select">Recovery Password</span>
              <button @click="siginInButton">Sigin In</button>
              <div class="other-login">
                <div class="divider">
                  <span class="line"></span>
                  <span class="divider-text no-select">or continue with</span>
                  <span class="line"></span>
                </div>
                <div class="other-login-wrapper">
                  <div class="other-login-item">
                    <img src="@/assets/QQ.png" alt="QQ">
                  </div>
                  <div class="other-login-item">
                    <img src="@/assets/WeChat.png" alt="WeChat">
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="form-register"  v-if="isShowRegisterPanel">
            <form action="">
              <h1 class="no-select">Please register your account</h1>
              <input type="text"  class="inputs user no-select" placeholder="Enter Your UserName" v-model="registerUser.username" required>
              <input type="password" class="inputs pwd no-select" placeholder="Password" v-model="registerUser.password">
              <input type="text" class="inputs user no-select" placeholder="Enter Your Email" v-model="registerUser.email">
              <div class="email-verified">
                <input type="text" class="inputs user no-select" placeholder="Enter Verification Code" v-model="registerUser.verifiedCode">
                <button class="email-verified-button">Send</button>
              </div>
              <button @click="registerUserButton">Register Now</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.main{
  width: 100%;
  height: 100vh;
  background: $BGC_THEME;
  .no-select{
    user-select: none;
  }
  .content {
    width: 70%;
    height: 75%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-radius: 30px;
    background: rgba(255,255,255,.4);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    // overflow: hidden;
    .left {
      flex: 1;
      position: relative;
      .sphere {
        position: absolute;
        left: 30%;
        width: 90%;
        z-index: 1;
        animation: sphereAnimation 2s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
        pointer-events: none;

      }
      .people {
        position: absolute;
        left: -50%;
        top: 20%;
        width: 70%;
        // height: 100px;
        z-index: 2;
        pointer-events: none;

      }
      .p-animtion {
        animation: peopleAnimation 2s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
      }
      .p-other-animtion {
        animation-name: pOtherAnimation; // 动画名称
        animation-direction: alternate; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
        animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
        animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放
        animation-duration: 3s; // 动画完成时间
      }
      .s-animtion {
        animation: sphereAnimation 2s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
      }
      .s-other-animtion {
        animation-name: sOtherAnimation; // 动画名称
        animation-direction: alternate; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
        animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
        animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放
        animation-duration: 3s; // 动画完成时间
      }
    }
    .right {
      flex: 1;
      position: relative;
      z-index: 12;
      .top {
        width: 80%;
        margin-left: 38px;
        color: rgb(51, 52, 124);
        font-size: 20px;
        font-weight: 600;
        font-family: "Century Gothic", Times, serif;
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translate(-50%, 0);
        .top-item {
          float: left;
          width: 150px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          margin-right: 10px;
          transition: 0.5s;
          &:hover {
            border: 0;
            background-color: #fff;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: -20px 10px 32px 1px rgba(182, 183, 185, 0.37);
          }
        }
      }
      .form-wrappepr {
        width: 60%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: right;
        .form-register{
          .email-verified{
            width: 100%;
            display: flex;
            .email-verified-button{
              margin: auto;
              flex: 0 0 34%;
              margin-left: 10px;
            }
          }

        }
        h1 {
          float: left;
          font-family: "Century Gothic", Times, serif;
          margin: 30px 0;
          // color: rgb(68,96,241);
        }
        .inputs {
          display: block;
          width: 100%;
          height: 70px;
          margin: 30px 0;
          border-radius: 10px;
          border: 0;
          background-color: rgb(210 223 237);
          color: rgb(80, 82, 84);
          font-family: "Century Gothic", Times, serif;
          outline: none;
          padding: 20px;
          box-sizing: border-box;
          font-size: 20px;
        }
        .tips {
          display: block;
          margin-top: -15px;
          color: rgb(160, 170, 182);
          cursor: pointer;
          &:hover{
            color: #00BFFF;
          }
        }
        button {
          width: 100%;
          height: 50px;
          padding: 17px 40px;
          border-radius: 50px;
          margin-top: 30px;
          cursor: pointer;
          border: 0;
          background-color: white;
          box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-size: 15px;
          transition: all 0.5s ease;
          &:hover{
            letter-spacing: 3px;
            background-color: hsl(174deg 100% 48%);
            color: hsl(0, 0%, 100%);
            box-shadow: rgb(41 255 234) 0px 7px 29px 0px;
          }
          &:active{
            letter-spacing: 3px;
            background-color: hsl(174deg 100% 48%);
            color: hsl(0, 0%, 100%);
            box-shadow: rgb(41 255 234) 0px 0px 0px 0px;
            transform: translateY(10px);
            transition: 100ms;
          }
        }
        .other-login {
          .divider {
            width: 100%;
            margin: 20px 0;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .line {
              display: inline-block;
              max-width: 35%;
              width: 35%;
              flex: 1;
              height: 1px;
              background-color: rgb(162, 172, 185);
            }
            .divider-text {
              vertical-align: middle;
              margin: 0px 20px;
              // line-height: 0px;
              display: inline-block;
              width: 150px;
              color: rgb(162, 172, 185);
              white-space: normal;
            }
          }
          .other-login-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .other-login-item {
              width: 70px;
              // border: 1px solid rgb(162, 172, 185);
              padding: 10px;
              text-align: center;
              border-radius: 10px;
              cursor: pointer;
              font-weight: 600;
              color: rgb(51, 49, 116);
              margin: 0 10px;
              transition: 0.4s;
              img {
                width: 40px;
                height: 40px;
                vertical-align: middle;
              }
              span {
                vertical-align: middle;
              }

              &:hover {
                width: 80px;
                height: 50%;
                background-color: #fff;
                border: 0;
                box-shadow: -20px 10px 32px 1px rgba(182, 183, 185, 0.37);
              }
            }
          }
        }
      }
    }
  }
}

@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 60vmax 60vmax;
    background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax -20vmax, -40vmax -20vmax, 40vmax 60vmax;
  }
  50% {
    background-size: 80vmax 80vmax, 110vmax 110vmax, 80vmax 80vmax, 60vmax 60vmax, 80vmax 80vmax;
    background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax, 20vmax 10vmax, 30vmax 70vmax;
  }
  75% {
    background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 70vmax 70vmax;
    background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax, -10vmax 10vmax, 40vmax 60vmax;
  }
}
@keyframes sphereAnimation {
  0% {
    width: 10%;
  }
  100% {
    width: 90%;
    transform: translate(-30%, 5%);
  }
}
@keyframes peopleAnimation {
  0% {
    width: 40%;
  }
  100% {
    width: 70%;
    transform: translate(90%, -10%);
  }
}

@keyframes pOtherAnimation {
  0% {
    transform: translate(90%, -10%);
  }
  100% {
    transform: translate(90%, -15%);
  }
}
@keyframes sOtherAnimation {
  0% {
    transform: translate(-30%, 5%);
  }
  100% {
    transform: translate(-30%, 10%);
  }
}
</style>