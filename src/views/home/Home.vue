<template>
    <div id="home" >
        <NavBar class="home-nav" >
            <div slot="left"></div>
            <div slot="center">购物</div>
            <div slot="right"></div>
        </NavBar>
        <HomeSwiper :banners="banners"/>
        <HomeRecommend :recommends="recommends"/>
        <WeekFeature/>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
</template>

<script>

    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComponents/HomeSwiper";
    import HomeRecommend from "./childComponents/HomeRecommend";
    import WeekFeature from "./childComponents/WeekFeature";

    import {getHomemultidata} from "network/home";
    export default {
        name: "home",
        data(){
            return {banners:{},recommends:{}}
        },
        components:{
            NavBar,
            HomeSwiper,
            HomeRecommend,
            WeekFeature
        },
        created() {
            //1.请求多个数据
            getHomemultidata().then(res => {
                console.log('getHomemultidata',res);
                this.banners=res.data.banner;
                this.recommends=res.data.recommend
            })
        },
    }
</script>

<style scoped>
    #home{
        padding-top: 44px;
    }
    .home-nav {
        background-color: #ff8197;
        color:#565456;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9999;
        }
</style>