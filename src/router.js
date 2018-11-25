//导入路由
import VueRouter from 'vue-router';

//引入路由对应的组件
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import car from './components/tabbar/car.vue';
import search from './components/tabbar/search.vue';
import newlist from './components/news/newlist.vue';

//定义路由匹配
var router = new VueRouter({
    routes:[
        {path:"/",redirect:home},
        {path:"/home",component:home},
        {path:"/member",component:member},
        {path:"/car",component:car},
        {path:"/search",component:search},
        {path:"/home/newlist",component:newlist},
    ],
    //修改默认选中的类
    'linkActiveClass' : 'mui-active'
});

//暴露
export default router;