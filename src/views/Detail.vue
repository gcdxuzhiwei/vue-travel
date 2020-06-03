<template>
    <div>
        <detail-banner :sightName="this.sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from "../components/Detail/Banner";
    import DetailHeader from "../components/Detail/Header";
    import DetailList from "../components/Detail/List";
    import axios from 'axios'
    export default {
        name: "Detail",
        components: {DetailList, DetailHeader, DetailBanner},
        data(){
            return {
                sightName:'',
                bannerImg:'',
                gallaryImgs:[],
                list:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('/api/detail.json',{
                    params:{
                        id:this.$route.params.id
                    }
                }).then(this.handleGetDataSucc)
            },
            handleGetDataSucc(res){
                res=res.data
                if(res.ret&&res.data){
                    const data=res.data
                    this.sightName=data.sightName
                    this.bannerImg=data.bannerImg
                    this.gallaryImgs=data.gallaryImgs
                    this.list=data.categoryList
                }
            }
        },
        mounted() {
            this.getDetailInfo()
        }
    }
</script>

<style scoped lang="stylus">
    .content
        height 50rem
</style>