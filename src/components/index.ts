import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
    install(app:any){
        // 引入element-ui所有icon组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}