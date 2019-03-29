<template>
  <div class="login-wrap">

    <el-form class="login-form" label-position="top" label-width="80px" :model="formData">
      <div class="login-logo">
        <img  src="../assets/image/logo.png" alt="">
      </div>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin" class="login-button" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .login-form .login-button {
  width: 100%;
}
.login-wrap .login-logo{
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;

}
.login-wrap img{
  width: 130px;
  height: 130px;
  margin-left: 10px;
}
</style>


