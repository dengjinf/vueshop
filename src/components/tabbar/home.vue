<template>
    <div class="home-container">
        <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in lunbotu" :key="item.img">
            <img :src="item.img"></img>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
		            <img src="../../images/menu1.png"></img>
		            <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../images/menu2.png"></img>
		            <div class="mui-media-body">图片分享</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../images/menu3.png"></img>
		            <div class="mui-media-body">商品购买</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../images/menu4.png"></img>
		            <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../images/menu5.png"></img>
		            <div class="mui-media-body">视频专区</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../images/menu6.png"></img>
		            <div class="mui-media-body">联系我们</div>
                </a>
            </li>
		</ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lunbotu:[]
            }
        },
        created(){
            this.getLunbo();
        },
        methods:{
            getLunbo(){
                this.$http.get('http://127.0.1.1:3000/api/getLunbo').then(function(res){
                    if(res.body.status == 0){
                        this.lunbotu = res.body.message;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-container{
        .mint-swipe{
            height: 200px;
            img{
                width:100%;
            }
        } 

        .mui-grid-9{
            background-color:#fff;

            .mui-table-view-cell{
                border:none;

                .mui-media-body{
                    font-size:13px;
                }
                img{
                    width:50%;
                }
            }
        }   
    }
</style>px