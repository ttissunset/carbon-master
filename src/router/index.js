// 配置路由的地方
import VueRouter from 'vue-router';

// 解决vue-router在3.0版本以上重复点报错问题
//开始添加代码
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:()=>import("@/pages/Home"),
        },
        {
            name:'Navigationhome',
            path:'/navigationhome',
            component:()=>import("@/pages/NavigationHome"),
        },
        {
            path:'/login',
            component:()=>import("@/pages/Login"),
        },
        {   
            name:'Purchase',
            path:'/purchase',
            component:()=>import("@/pages/Purchase"),
        },
        {
            name:'Case',
            path:'/case',
            component:()=>import("@/pages/Case"),
        },
        {
            name:'Service',
            path:'/service',
            component:()=>import("@/pages/Service"),

        },
        {
            path:'/dashboard/home',
            component:()=>import("@/pages/Dashboard/Home"),
        },
        {
            path:'/dashboard/news',
            component:()=>import("@/pages/Dashboard/News"),
        },
        {
            path:'/dashboard/permissions',
            component:()=>import("@/pages/Dashboard/Permissions"),
        },
        {
            path:'/dashboard/gallery',
            component:()=>import("@/pages/Dashboard/Gallery"),

        },
        {
            name:'Accounting',
            path:'/dashboard/gallery/service/accounting',
            component:()=>import('@/pages/Dashboard/Gallery/Service/accounting')
        },
        {
            name:'Neutralization',
            path:'/dashboard/gallery/service/neutralization',
            component:()=>import('@/pages/Dashboard/Gallery/Service/neutralization')
        },
        {
            path:'/dashboard/orders',
            component:()=>import("@/pages/Dashboard/Orders"),
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})


