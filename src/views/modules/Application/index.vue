<script setup lang="ts">
import {computed, ref} from 'vue'
import NotificationIcon from "@/components/icons/NotificationIcon.vue";
import MagnifyGlass from "@/components/icons/MagnifyGlass.vue";
import ShowInfoCard from '@/components/modules/InfoCard/ShowInfoCard/index.vue'
import InfoListItem from "@/components/modules/InfoListItem/index.vue";
import SignButton from '@/components/modules/SignButton/index.vue'
import ShowInfoCardWithChart from '@/components/modules/InfoCard/ShowInfoCardWithChart/index.vue'
import MoreIcon from "@/components/icons/MoreIcon.vue";
import StretchPersonalCard from '@/components/modules/StretchPersonalCard/index.vue'
import ShowInfoCardTaskWithGroup from '@/components/modules/InfoCard/ShowInfoCardTaskWithGroup/index.vue'
import TaskWithGroup from '@/components/modules/TaskWithGroup/index.vue'
// 展示收益列表数据
const data = ref([
  {
    time: '10:30',
    number: 3000000,
  },
  {
    time: '12:30',
    number: 5000000,
  },
  {
    time: '14:30',
    number: 7000000,
  },
  {
    time: '16:30',
    number: 8000000,
  },
  {
    time: '18:30',
    number: 4000000,
  },
])
const option = computed(() => {
  return {
    xAxis: {
      type: 'category',
      data: data.value.map(item => item.time)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: data.value.map(item => item.number),
        type: 'line',
        smooth: true,

      }
    ]
  }
})
// 日历颜色
const selectedColor = ref('blue')
// 日历属性
const attrs = ref([
  {
    key: 'test',
    highlight: true,
    dates: {start: new Date(), end: new Date(), done: true},
  }
]);

// 获取月份
function getCurrentMonthInEnglish() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthIndex = new Date().getMonth(); // 获取当前月份的索引（0-11）
  return months[currentMonthIndex];
}
</script>

<template>
  <div class="application">
    <div class="content-left">
      <div class="content-left-left">
        <div class="left-top">
          <h1>Hello Harry</h1>
          <p>welcome to the management system</p>
        </div>
        <div class="left-content-left-personInfoList">
          <div class="personInfoList-top">
            <div class="title">Person</div>
            <div class="more">
              <MoreIcon icon-height="50" icon-width="50"></MoreIcon>
            </div>
          </div>
          <div class="personInfoList">
            <StretchPersonalCard></StretchPersonalCard>
            <StretchPersonalCard></StretchPersonalCard>
            <StretchPersonalCard></StretchPersonalCard>
          </div>
        </div>
        <div class="left-content-left-taskInfoList">
          <TaskWithGroup></TaskWithGroup>
        </div>

      </div>
      <div class="content-left-right">
        <div class="right-top">
          <div class="block"></div>
          <div class="icon-search icon-font">
            <MagnifyGlass></MagnifyGlass>
          </div>
          <div class="icon-notification icon-font">
            <NotificationIcon></NotificationIcon>
          </div>
        </div>
        <div class="choose-date">
          <div class="choose-date-item choosed">日</div>
          <div class="choose-date-item">周</div>
          <div class="choose-date-item">月</div>
          <div class="choose-date-item">年</div>
        </div>
        <div class="showInfo">
          <!--            <ShowInfoCard class="showInfo-item"></ShowInfoCard>-->
          <!--            <ShowInfoCard class="showInfo-item"></ShowInfoCard>-->
          <!--            <ShowInfoCard class="showInfo-item"></ShowInfoCard>-->
          <!--            <ShowInfoCard class="showInfo-item"></ShowInfoCard>-->
          <ShowInfoCardWithChart class="showInfo-item"></ShowInfoCardWithChart>
          <ShowInfoCardWithChart class="showInfo-item"></ShowInfoCardWithChart>
          <ShowInfoCardWithChart class="showInfo-item"></ShowInfoCardWithChart>
          <ShowInfoCardWithChart class="showInfo-item"></ShowInfoCardWithChart>
        </div>
        <div class="income">
          <p>收益表现</p>
          <e-charts class="chart" :option="option"></e-charts>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="title">Calendar</div>
      <div class="calendar-bar">
        <VCalendar
            class="myCalendar"
            title-position="left"
            borderless
            :color="selectedColor"
            :attributes="attrs"
            expanded
        />
      </div>
      <div class="time">
        {{ getCurrentMonthInEnglish() }}
        {{ new Date().getDate() }}
        {{ new Date().getFullYear() }}
      </div>
      <div class="info-list">
        <info-list-item></info-list-item>
        <info-list-item></info-list-item>
        <info-list-item></info-list-item>
      </div>
      <div class="button">
        <SignButton></SignButton>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.application {
  width: 100%;
  height: 100%;
  font-family: $FONT_FAMILY;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 10px 20px;

  .content-left {
    display: flex;
    flex-direction: row;
    width: 75%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    .content-left-left {
      width: 50%;
      height: 100%;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: space-around;
      .left-top {
        h1 {
          font-size: 2.5rem;
          color: $HOME_NAV_FONT_COLOR;
        }

        p {
          font-size: 22px;
          color: $HOME_NAV_FONT_COLOR;
        }
      }
      .left-content-left-personInfoList {
        .personInfoList-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 20px;

          .title {
            font-size: 28px;
            font-weight: bold;
            color: $HOME_NAV_FONT_COLOR;
          }

          .more {
            margin-right: 80px;
          }

        }

        .personInfoList {
          display: flex;
          flex-direction: row;
          gap: 50px;
        }
      }
      .left-content-left-taskInfoList {
        flex:1;

      }
    }

    .content-left-right {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;

      .right-top {
        display: flex;
        align-items: center;

        .block {
          flex: 1;
        }

        .icon-font {
          box-sizing: border-box;
          padding: 15px;
          border-radius: 10px;
          background-color: #fff;
          cursor: pointer;
          margin-left: 40px;
        }

        .icon-search {

        }

        .icon-notification {

        }
      }

      .choose-date {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px 10px;
        gap: 20px;

        .choosed {
          background-color: $HOME_FONT_COLOR_SHALLOW_WHITE;
          color: #fff !important;
        }

        .choose-date-item {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 27px;
          height: 40px;
          width: 40px;
          border-radius: 10px;
          cursor: pointer;
          color: $HOME_FONT_COLOR_DEEP_DARK;

          &:hover {
            background-color: $HOME_FONT_COLOR_SHALLOW_WHITE;
            color: #fff;
            font-weight: bold;
          }
        }
      }

      .showInfo {
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        justify-content: space-between;
        animation: showFromTopToBottom 1.75s forwards;

        .showInfo-item {
          flex: 0 0 48%;
          margin-bottom: 1vw;
        }
      }

      .income {
        height: 100%;
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
        border-radius: 30px;
        background-color: $HOME_NAV_BG;
        color: $HOME_NAV_FONT_COLOR;
        margin-bottom: 20px;
        .chart {
          width: 100%;
          height: 100%;
        }

        p {
          font-size: 25px;
          font-weight: 500;
        }
      }
    }
  }

  .content-right {
    flex: 1;
    padding: 1.5vw;
    box-sizing: border-box;
    background: $HOME_NAV_BG;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    animation: showFromRightToLeft 1.75s ease-in-out backwards;

    .title {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 0.7vw;
      color: $HOME_NAV_FONT_COLOR;
    }

    .calendar-bar {
      box-sizing: border-box;
      padding: 10px;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .1);
      border-radius: 15px;
      .myCalendar{

      }
    }

    .time {
      margin-top: 1vw;
      font-size: 23px;
      color: $HOME_NAV_FONT_COLOR;
    }

    .info-list {
      padding-top: 1vw;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }

    .button {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
}
</style>