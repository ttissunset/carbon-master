import Vue from 'vue'
import App from './App.vue'
// 引入VueRoter
import VueRouter from 'vue-router'
// 引入路由
import router from '@/router'
// 引入swiper样式
import 'swiper/swiper-bundle.css'
// 引入icon-font
import './assets/iconfont/iconfont.css'

import axios from "@/api/axios.js";
import {getRequest, postRequest} from '@/api/axios.js'

Vue.prototype.$axios = axios
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest

import {Table, TableColumn, Button, Pagination, Select, Option, Input, DatePicker, Notification } from 'element-ui'

// 引入拖拽插件
// import VueDragscroll from'vue-dragscroll'
//关闭vue生产提示
Vue.config.productionTip = false

Vue.config.ignoredElements = [/^ion-/]

Vue.prototype.$clickThrottle = function (cb, interval = 300) {
    let canClick = true;

    return function () {
        if (!canClick) {
            return;
        }
        canClick = false;
        cb.apply(this, arguments);
        setTimeout(() => {
            canClick = true;
        }, interval);
    };
};

// 使用插件
Vue.use(VueRouter)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(DatePicker)
// Vue.use(Notification)
new Vue({
    el: `#app`,
    render: h => h(App),
    //注册路由
    router,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})
