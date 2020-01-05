<template>
    <div class="tab-bar-item">
        <slot name="item-img"></slot>
        <slot name="item-text"></slot>
    </div>
</template>
<script>

    export default {
        name: "tabbaritem"
    }
</script>

<style scoped>

    .tab-bar-item {
        flex:1;  /*等分*/
        text-align: center;
        height:49px;
        font-size: 14px;

    }
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle; /*去除图片下面的3个像素*/

    }
</style>