<script setup lang="ts">

import EditorIcon from "@/components/icons/EditorIcon.vue";
import YouShangArrowIcon from "@/components/icons/YouShangArrowIcon.vue";
import UsersIcon from "@/components/icons/UsersIcon.vue";
import User2Icon from "@/components/icons/User2Icon.vue";
import EditorLineIcon from "@/components/icons/EditorLineIcon.vue";
import AddNoColorIcon from "@/components/icons/AddNoColorIcon.vue";
import MessageNoColorIcon from "@/components/icons/MessageNoColorIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import LoginIcon from "@/components/icons/LoginIcon.vue";
import PhoneNoColorIcon from "@/components/icons/PhoneNoColorIcon.vue";
import SocialIcon from "@/components/icons/SocialIcon.vue";
import WechatIcon from "@/components/icons/WechatIcon.vue";
import QQIcon from "@/components/icons/QQIcon.vue";
import FaceBookIcon from "@/components/icons/FaceBookIcon.vue";
import WeiboIcon from "@/components/icons/WeiboIcon.vue";
</script>

<template>
  <div class="content">
    <div class="content-top">
      <div class="content-title">
        Detailed information
      </div>
      <div class="content-right">
        <div class="editor circle">
          <EditorIcon icon-width="20" icon-height="20"></EditorIcon>
        </div>
        <div class="arrow circle">
          <YouShangArrowIcon icon-width="20" icon-height="20"></YouShangArrowIcon>
        </div>
      </div>
    </div>
    <div class="content-body">
      <div class="item">
        <div class="item-left-img">
          <User2Icon icon-height="24" icon-width="24"></User2Icon>
        </div>
        <div class="item-right">
          <div class="item-title">
            First Name
          </div>
          <div class="item-write">
            Eva
          </div>
        </div>
        <div class="item-icon circle">
          <EditorLineIcon icon-width="25" icon-height="25"></EditorLineIcon>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <User2Icon icon-height="24" icon-width="24"></User2Icon>
        </div>
        <div class="item-right">
          <div class="item-title">
            Last Name
          </div>
          <div class="item-write">
            Robinson
          </div>
        </div>
        <div class="item-icon circle">
          <EditorLineIcon icon-width="25" icon-height="25"></EditorLineIcon>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <MessageNoColorIcon icon-height="24" icon-width="24"></MessageNoColorIcon>
        </div>
        <div class="item-right">
          <div class="item-title">
            Email
          </div>
          <div class="item-write">
            Eva@alabamamachinery.com
          </div>
        </div>
        <div class="item-icon circle">
          <AddNoColorIcon icon-width="25" icon-height="25"></AddNoColorIcon>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <PhoneNoColorIcon icon-height="24" icon-width="24"></PhoneNoColorIcon>
        </div>
        <div class="item-right">
          <div class="item-title">
            Phone Number
          </div>
          <div class="item-write">
            +911 129 222 313
          </div>
        </div>
        <div class="item-icon circle">
          <AddNoColorIcon icon-width="25" icon-height="25"></AddNoColorIcon>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <SocialIcon icon-height="24" icon-width="24"></SocialIcon>
        </div>
        <div class="item-right">
          <div class="item-title">
            Sources
          </div>
          <div class="item-write icon">
            <WechatIcon  icon-height="30" icon-width="30"></WechatIcon>
            <QQIcon icon-height="30" icon-width="30"></QQIcon>
            <FaceBookIcon icon-height="30" icon-width="30"></FaceBookIcon>
            <WeiboIcon icon-height="30" icon-width="30"></WeiboIcon>
          </div>
        </div>
        <div class="item-icon circle">
          <AddNoColorIcon icon-width="25" icon-height="25"></AddNoColorIcon>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <LoginIcon icon-height="24" icon-width="24"></LoginIcon>
        </div>
        <div class="item-right">
          <div class="item-title">
            Last Login
          </div>
          <div class="item-write">
            16/9/2024 at 11:00 am
          </div>
        </div>
        <div class="item-icon circle">
          <YouShangArrowIcon icon-width="25" icon-height="25"></YouShangArrowIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  @extend %card-style;

  .circle {
    padding: 10px 12px;
    border-radius: 40px;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .1);
  }

  .content-top {
    display: flex;
    width: 100%;
    align-items: center;

    .content-title {
      flex: 1;
      font-size: 22px;
      font-weight: bold;
    }

    .content-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .content-body {
    .item {
      display: flex;
      align-items: center;
      margin-top: 20px;

      .item-left-img {
        padding: 10px 20px;
      }

      .item-right {
        flex: 1;

        .item-title {
          font-size: 12px;
          margin-left: 2px;
          color: #a8a8a8;
        }

        .icon {
          display: flex;
          gap: 10px;
        }

        .item-write {
          margin-top: 5px;
          font-size: 22px;
          font-weight: bold;
        }
      }

      .item-icon {
        background: #ebf3fe;
        cursor: pointer;
      }
    }
  }
}
</style>