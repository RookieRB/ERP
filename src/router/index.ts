import {createRouter, createWebHashHistory} from "vue-router";
import {Routes} from './routes.ts'
const router = createRouter({
    history: createWebHashHistory(),
    routes: Routes,
    scrollBehavior: () => ({
        left:0,
        top:0
    }),
})

export default router