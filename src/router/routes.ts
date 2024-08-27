import {RouteRecordRaw} from "vue-router";

export const Routes:Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '登录界面',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/home',
        name: '首页',
        component: () => import('@/views/home/index.vue'),
        children:[
            {
                path: '/home/user',
                name: '用户模块',
                component: () => import('@/views/modules/User/index.vue')
            },
            {
                path: '/home/application',
                name: '应用模块',
                component: () => import('@/views/modules/Application/index.vue')
            },
            {
                path: '/home/source',
                name: '资源下载',
                component: () => import('@/views/modules/Source/index.vue')
            }
        ]
    },
    {
        path:'/',
        redirect:'/login',
    }

]

