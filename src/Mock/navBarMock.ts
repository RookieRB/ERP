import HomeIcon from "@/components/icons/HomeIcon.vue";
import IncomeIcon from "@/components/icons/IncomeIcon.vue";
import WorkStationIcon from "@/components/icons/WorkStationIcon.vue";
import ApplicationIcon from "@/components/icons/ApplicationIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import DeptIcon from "@/components/icons/DeptIcon.vue";
import UserManagementIcon from "@/components/icons/UserManagementIcon.vue";
import UsersIcon from "@/components/icons/UsersIcon.vue";
import LogIcon from "@/components/icons/LogIcon.vue";
import ShoppingIcon from "@/components/icons/ShoppingIcon.vue";
import BuyIcon from "@/components/icons/BuyIcon.vue";
import CompanyManagementIcon from "@/components/icons/CompanyManagementIcon.vue";
import BookResourcesIcon from "@/components/icons/BookResourcesIcon.vue";
import VideoIcon from "../components/icons/VideoIcon.vue";
import MeidaIcon from "../components/icons/MeidaIcon.vue";

export const navBarMock = [
    {
        icon: HomeIcon,
        name: '首页',
        children: [
            {
                icon: IncomeIcon,
                name: '营收报表',
                path: '/dashboard/analysis'
            },
            {
                icon: WorkStationIcon,
                name: '工作台',
                path: '/dashboard/workbench'
            }
        ]
    },
    {
        icon: ApplicationIcon,
        name: '项目管理',
        children: [
            {
                icon: MenuIcon,
                name: '菜单管理',
                path: '/application/menu'
            },
            {
                icon: DeptIcon,
                name: '部门管理',
                path: '/application/dept'
            },
            {
                icon: UserManagementIcon,
                name: '角色管理',
                path: '/application/user-management'
            },
            {
                icon: UsersIcon,
                name: '用户管理',
                path: '/application/user'
            }
        ]
    },
    {
        icon: LogIcon,
        name: '日志模块',
        children: [

        ]
    },
    {
        icon: ShoppingIcon,
        name: '商品模块',
    },
    {
        icon: BuyIcon,
        name: '采购模块'
    },
    {
        icon: CompanyManagementIcon,
        name: '公司管理模块'
    },
    {
        icon: BookResourcesIcon,
        name: '课程资源模块',
        children:[
            {
                icon: MeidaIcon,
                name: '课程资源',
                path: '/resources/class'
            }
        ]
    }
]