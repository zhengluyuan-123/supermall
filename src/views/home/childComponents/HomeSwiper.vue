<template>
    <Swiper>
        <Swiper-item v-for="(item,index) in banners.list" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </Swiper-item>
    </Swiper>
</template>

<script>
    import {Swiper,SwiperItem} from "components/common/swiper";
    export default {
        name: "HomeSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banners:{
                type:Object,
                default(){return {}}
            }
        }
    }
</script>

<style scoped>

</style>