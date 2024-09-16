import { createApp } from 'vue'
// 引入echarts
import "echarts";
import ECharts from 'vue-echarts'
//引入element-plus 国际化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 引入v-calendar
import 'v-calendar/style.css';
import VCalendar from 'v-calendar';

import App from './App.vue'
// 引入pinia
import pinia from "./store";
// 引入路由
import router from './router';
// 初始化css
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
//引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components/index.ts'
// 引入animate组件库
import 'animate.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(globalComponent)
app.use(VCalendar, {})
app.use(ElementPlus,{
    locale: zhCn,
})
app.component('ECharts',ECharts)

app.mount('#app')
