<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" border-bottom v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data(){
            return {
                recommendList:[{
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg',
                    title:'上海迪士尼乐园',
                    desc:'全球最大的迪士尼城堡'
                },{
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/2005/23/23c1b2b13230b966a3.water.jpg_200x200_f3a19805.jpg',
                    title:'上海野生动物园',
                    desc:'会跳芭蕾的小海狮们~'
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
                    title:'东方明珠',
                    desc:'259米透明悬空观光廊了解一下~'
                }]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/styles/mixins.styl"
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem

    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
</style>