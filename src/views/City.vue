<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from '../components/City/Header'
    import CitySearch from "../components/City/Search";
    import CityList from "../components/City/List";
    import CityAlphabet from "../components/City/Alphabet";
    export default {
        name: "City",
        components:{
            CityAlphabet,
            CityList,
            CitySearch,
            CityHeader
        }
    }
</script>

<style scoped lang="stylus">

</style>