<template>
    <div id="tab-bar">
        <tabbaritem>
            <img src="tabbar/home.png" alt="" slot="item-img">
            <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem>
            <img src="tabbar/classification.png" alt="" slot="item-img">
            <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem>
            <img src="tabbar/shopcart.png" alt="" slot="item-img">
            <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem>
            <img src="tabbar/profile.png" alt="" slot="item-img">
            <div slot="item-text">我的</div>
        </tabbaritem>
    </div>
</template>

<script>
    import tabbaritem from "./Tabbaritem";
    export default {
        name: "Tabbar",
        components: {
            tabbaritem,
        }
    }
</script>
<style scoped>
    #tab-bar {
        display:flex; /*水平分布*/
        background-color: #f6f6f6;
        position: fixed;  /*位置固定*/
        left: 0;
        right:0;
        bottom: 0;
        box-shadow: 0 -2px 0.1px rgba(100,100,100,0.1); /*阴影设置  x y 模糊程度 颜色*/
    }
</style>