//导入Vue模块
import Vue from 'vue';

//导入vue-resource 
import vueResource from 'vue-resource';
//挂载到vue上
Vue.use(vueResource);

//引入mimtui header
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);

//导入轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入app组件
import app from './app.vue';

//导入mui css样式文件
import './lib/mui/css/mui.css';
//导入mui扩展字体
import './lib/mui/css/icons-extra.css';

//导入路由
import VueRouter from 'vue-router';
//挂载到Vue上
Vue.use(VueRouter);
//引入路由模块，获取路由对象
import router from './router.js';


new Vue({
    el:"#app",
    data:function(){
        return {

        }
    },
    render:function(createElement){
        return createElement(app);
    },
    router:router
});