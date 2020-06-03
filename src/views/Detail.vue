<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from "../components/Detail/Banner";
    import DetailHeader from "../components/Detail/Header";
    import DetailList from "../components/Detail/List";
    export default {
        name: "Detail",
        components: {DetailList, DetailHeader, DetailBanner},
        data(){
            return {
                list:[{
                    title: '成人票',
                    children:[{
                        title:'成人三馆联票',
                        children:[{
                            title:'成人三馆联票 - 某一连锁店销售'
                        }]
                    },{
                        title:'成人五馆联票'
                    }]
                },{
                    title:'学生票'
                },{
                    title:'儿童票'
                },{
                    title:'特惠票'
                }]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .content
        height 50rem
</style>