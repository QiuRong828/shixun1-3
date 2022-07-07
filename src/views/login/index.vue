<template>
  <div class="login-container">
    <div class="login-form">
      <div class="login-title">火星</div>
      <el-form
        ref="LoginForm"
        :rules="loginFormRules"
        :model="loginForm"
        label-position="right"
      >
        <el-form-item prop="userName">
          <el-input
            v-model.trim="loginForm.userName"
            prefix-icon="user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model.trim="loginForm.userPwd" prefix-icon="view" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const LoginForm = ref('')
const loginFormRules = {
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

const handleLoginSubmit = () => {
  LoginForm.value.validate(async (valid) => {
    if (!valid) return
    await store.dispatch('user/login', loginForm)
    router.push('/')
  })
}
</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f9fcff;
}
.login-form {
  width: 500px;
  padding: 50px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
}
.login-title {
  font-size: 50px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 30px;
}
.el-button {
  width: 100%;
}
</style>
