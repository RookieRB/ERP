import {RouteRecordRaw} from "vue-router";

export const commonRoutes:Array<RouteRecordRaw> = [
    {
        component: () => import('@/views/user/modules/dashboard/analysis/index.vue'),
        name: '营收报表',
        path: '/dashboard/analysis'
    },
    {
        component: () => import('@/views/user/modules/dashboard/workbench/index.vue'),
        name: '工作台',
        path: '/dashboard/workbench'
    },
    {
        component: () => import('@/views/user/modules/application/menu/index.vue'),
        name: '菜单管理',
        path: '/application/menu'
    },
    {
        component: () => import('@/views/user/modules/application/dept/index.vue'),
        name: '部门管理',
        path: '/application/dept'
    },
    {
        component: () => import('@/views/user/modules/application/userManagement/index.vue'),
        name: '角色管理',
        path: '/application/user-management'
    },
    {
        component: () => import('@/views/user/modules/application/user/index.vue'),
        name: '用户管理',
        path: '/application/user'
    },
    {
        component: () => import('@/views/user/modules/resources/classResources/index.vue'),
        name: '课程资源',
        path: '/resources/class'
    }

]