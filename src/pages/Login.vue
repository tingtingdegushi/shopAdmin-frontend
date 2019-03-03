<template>
<div class="login-form">
<el-form :model="ruleForm2" status-icon   label-width="100px">
  <el-form-item label="账户" prop="user">
    <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="Pass">
    <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>    
</div>
</template>


<script>
  export default {
    data() {
      
      
     
      return {
        ruleForm2: {
          username: '',
          password: '',
          
        },
       
      };
    },
    methods: {
      submitForm(formName) {
        //提交获取数据
        console.log(this.ruleForm2);
        console.log(formName);

        //提交到接口
        // this.$axios({})
      },
      resetForm(formName) {
        this.ruleForm2={
            username:"",
            password:""
        }
      }
    }
  }
</script>
<style>
    .login-form{
        width:500px;
        position: absolute;
        top:50%;
        left:50%;
        margin: -120px 0 0 -250px;
    }
</style>
