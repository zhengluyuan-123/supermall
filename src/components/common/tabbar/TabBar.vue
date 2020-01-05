<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    // import TabBarItem from "./TabBarItem";
    export default {
        name: "TabBar",
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