<template>
    <div class='new-container'>
        <!-- 新闻列表展示区域 -->
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
				<router-link :to="'/home/newdetail'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h2>{{item.title}}</h2>
						<p class='mui-ellipsis'>
                            <span>发布时间：{{ item.add_time }}</span>
                            <span class="click">点击 {{ item.click }} 次</span>
                         </p>
					</div>
				</router-link>
			</li>
		</ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                news:[]
            }
        },
        created(){
            this.getnewslist();
        },
        methods:{
            getnewslist(){
                this.$http.get('http://127.0.0.1:3000/api/getnewslist').then(function(res){
                    if(res.body.status == 0){
                        this.news = res.body.message;
                    }
                });
            }
        }
    }
</script>

<style lang='scss' scoped>
    .new-container{
        .mui-table-view h2{
            font-size:13px;
        }
        .mui-ellipsis{
            color:blue;
            font-size:12px;
        }
    }
</style>