<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends.list" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" >
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommends:{
                type:Object,
                default() {
                    return {};
                }
            }
        },

    }
</script>

<style scoped>
    .recommend{
        display:flex;
        flex:1;  /*等分*/
        text-align: center;
        font-size: 12px;
        /*padding: 12px 20px 30px;*/
        border-bottom: 10px silver;
    }
    .recommend img{
        height: 80px;
        width: 100%;
    }

</style>