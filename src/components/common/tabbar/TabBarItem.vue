<template>
    <div class="tab-bar-item" @click="itemclick">
        <div v-if="!isActive">
            <slot  name="item-img"></slot>
        </div>
        <div v-else>
            <slot  name="item-img-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot  name="item-text">
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        // data(){
        //     return {}
        // },
        //this.$route 当前活跃的对象
        //indexof 判断路径  没找到等于-1
        computed:{
          isActive(){
              return this.$route.path.indexOf(this.path) !== -1
          },
          activeStyle(){
              return this.isActive ? {color:this.activeColor} : {}
          }
        },
        methods:{
            itemclick(){
                this.$router.push(this.path)

            }
        }
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