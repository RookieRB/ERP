import {InfoCardData,ChartData,TransactionData} from "@/views/user/modules/dashboard/analysis/type.js";
import DollarIcon from "@/components/icons/DollarIcon.vue";
import OrderIcon from "@/components/icons/OrderIcon.vue";
import VisitorIcon from "../components/icons/VisitorIcon.vue";
import HangZhouIcon from "../components/icons/HangZhouIcon.vue";
import TaiZhouIcon from "../components/icons/TaiZhouIcon.vue";
import NingBoIcon from "../components/icons/NingBoIcon.vue";
import WenZhouIcon from "../components/icons/WenZhouIcon.vue";


export const analysisMockDataArray:Array<InfoCardData> = [
    {
        title: '总收入',
        number: '$7145.56',
        isAdd: false,
        percentNumber: '0,10%',
        icon: DollarIcon,
        time: 'Since last week',
        bottomColor: '#88babb'
    },
    {
        title: 'AVG,ORDER VALUE',
        number: '$46.89',
        isAdd: true,
        percentNumber: '2,01%',
        icon: OrderIcon,
        time: 'Since last week',
        bottomColor: '#81bda6'
    },
    {
        title: 'TOTAL VISITOR',
        number: '298,456',
        isAdd: true,
        percentNumber: '2,01%',
        icon: VisitorIcon,
        time: 'Since last week',
        bottomColor: '#bcb383'
    },
    {
        title: 'TOTAL EXPENDITURE',
        number: '898,456',
        isAdd: true,
        percentNumber: '2,01%',
        icon: DollarIcon,
        time: 'Since last week',
        bottomColor: '#c1897b'
    },
]

export const analysisMockChartDataArray:Array<ChartData>=[
    {
        icon: HangZhouIcon,
        areaName: '杭州',
        incomeNumber: 99.9,
        percent: '40%'
    },
    {
        icon: TaiZhouIcon,
        areaName: '台州',
        incomeNumber: 22.6,
        percent: '10%'
    },
    {
        icon: NingBoIcon,
        areaName: '宁波',
        incomeNumber: 78.8,
        percent: '30%'
    },
    {
        icon: WenZhouIcon,
        areaName: '温州',
        incomeNumber: 44.3,
        percent: '20%'
    }

]

export const analysisMockTransactionDataArray:Array<TransactionData> = [
    {
        img: 'src/assets/avatar01.jpg',
        name: 'Dai01',
        date: '12 Mar,11:28 AM',
        status: 0,
        type: 'Subscription',
        amount: 35.00
    },
    {
        img: 'src/assets/avatar02.jpg',
        name: 'Dai02',
        date: '12 Mar,11:28 AM',
        status: 1,
        type: 'Subscription',
        amount: 120.00
    },
    {
        img: 'src/assets/avatar03.jpg',
        name: 'Dai03',
        date: '12 Mar,11:30 AM',
        status: 2,
        type: 'Subscription',
        amount: 890.00
    },
    {
        img: 'src/assets/avatar04.jpg',
        name: 'Dai04',
        date: '12 Mar,12:28 AM',
        status: 1,
        type: 'Subscription',
        amount: 74.00
    },
    {
        img: 'src/assets/avatar.jpg',
        name: 'Dai05',
        date: '12 Mar,14:18 AM',
        status: 0,
        type: 'Subscription',
        amount: 49.00
    },
]