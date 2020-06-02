<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/2005/23/23c1b2b13230b966a3.water.jpg_600x330_5cccec1e.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">上海野生动物园(AAAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe678;</span>
                    202
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryclose"></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from "../common/Gallary";
    export default {
        name: "DetailBanner",
        data(){
            return {
                showGallary:false,
                imgs:["http://img1.qunarzz.com/sight/p0/2005/c4/c47eda0a56b427f9a3.water.jpg_350x240_658cd5c5.jpg","http://img1.qunarzz.com/sight/p0/2005/c4/c47eda0a56b427f9a3.water.jpg_350x240_658cd5c5.jpg"]
            }
        },
        components: {CommonGallary},
        methods:{
            handleBannerClick(){
                this.showGallary=true
            },
            handleGallaryclose(){
                this.showGallary=false
            }
        }
    }
</script>

<style scoped lang="stylus">
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                line-height .32rem
                height .32rem
                margin-top .14rem
                padding 0 .4rem
                border-radius .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                .banner-icon
                    font-size .24rem
</style>