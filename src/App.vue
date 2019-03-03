<template>
  <div id="app">
    Shop Admin

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',

  mounted(){
    // 调用axios的get请求
    this.$axios.get("https://api.github.com/users").then(res => {
      console.log(res)
    })
  }

}
</script>

<style>
*{
  margin:0;
  padding:0;
}
</style>
