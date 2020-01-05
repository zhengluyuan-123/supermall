<template>
  <div id="app">
      <div>
          <MainTabBar></MainTabBar>
      </div>
      <router-view/>
<!--      <Maintabbar></Maintabbar>-->
  </div>
</template>
<script>
  import MainTabBar from "./components/content/MainTabBar";
  export default {
    name:'App',
    components:{
      MainTabBar,
    }
  }
</script>

<style>

</style>
