<template>
  <div id="app">
    Shop Admin

    <el-button type="primary" circle>主要按钮</el-button>

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

</style>
