<template>
    <div >
        <TabBar>
            <TabBarItem path="/home" activeColor="blue">
                <img src="../../assets/img/tabbar/home.png" alt="" slot="item-img">
                <img src="../../assets/img/tabbar/home.png" alt="" slot="item-img-active">
                <div slot="item-text">首页</div>
            </TabBarItem>
            <TabBarItem path="/category" activeColor="blue">
                <img src="../../assets/img/tabbar/classification.png" alt="" slot="item-img">
                <img src="../../assets/img/tabbar/classification.png" alt="" slot="item-img-active">
                <div slot="item-text">分类</div>
            </TabBarItem>
            <TabBarItem path="/shopcart" activeColor="blue">
                <img src="../../assets/img/tabbar/shopcart.png" alt="" slot="item-img">
                <img src="../../assets/img/tabbar/shopcart.png" alt="" slot="item-img-active">
                <div slot="item-text">购物车</div>
            </TabBarItem>
            <TabBarItem path="/profile" activeColor="blue">
                <img src="../../assets/img/tabbar/profile.png" alt="" slot="item-img">
                <img src="../../assets/img/tabbar/profile.png" alt="" slot="item-img-active">
                <div slot="item-text">我的</div>
            </TabBarItem>
        </TabBar>
    </div>
</template>

<script>
    import TabBar from "../common/tabbar/TabBar";
    import TabBarItem from "../common/tabbar/TabBarItem";
    export default {
        name: "Maintabbar",
        components:{
            TabBarItem,
            TabBar
        },
    }
</script>

<style scoped>

</style>