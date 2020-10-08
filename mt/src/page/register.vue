<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo">美团</a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            @input="changeClass"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="ruleForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary" 
            @click="submitForm('ruleForm')"
            class="btn"
          >
            同意以下协议并注册
          </el-button>
        </el-form-item>
      </el-form>
      <div class="term">
        <a href="">《美团点评用户服务协议》</a>
        <a href="">《美团点评隐私政策》</a>
      </div>
    </div>
    <footer class="footer--mini">
      <p class="copyright">
          ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
          <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
          <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import api from '@/axios';

export default {
  data() {
    const validateuserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位"));
      } else {
        callback();
      }
    }
    const validateCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    }
    return {
      strengthClass: '',
      ruleForm: {
        userName: '',
        password: '',
        rePassword: ''
      },
      rules: {
        userName: [{ validator: validateuserName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validateCheck, trigger: 'blur' }]
      }
    }
  },
  methods: {
    changeClass() {
      const regStr = /(\w)+/g;
      const regNum = /(\d)+/g;
      const reg = /_/g;
      const { password } = this.ruleForm;
      const strongth = password.match(regStr) && password.match(regNum) && password.match(reg);
      if (password.length > 10 || (password.length > 6 && strongth)) { 
        this.strengthClass = 'strong';
      } else if (password.length > 6) {
        this.strengthClass = 'normal';
      } else if (password.length > 1) {
        this.strengthClass = 'week';
      } else if (!password) {
        this.strengthClass = '';
      } 
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.register({
            params: this.ruleForm
          }).then(res => {
            // console.log(res);
            this.$router.push({
              name: 'login'
            });
          });
        } else {
          alert("error submit!");
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>
