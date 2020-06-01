<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
    import CityHeader from '../components/City/Header'
    import CitySearch from "../components/City/Search";
    export default {
        name: "City",
        components:{
            CitySearch,
            CityHeader
        }
    }
</script>

<style scoped lang="stylus">

</style>