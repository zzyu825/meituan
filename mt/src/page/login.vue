<template>
  <div class="page-login">
    <div class="login-header">
      <a href="http://www.meituan.com" class="logo"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 class="tips" v-if="error">
          <i class="el-icon-remove"></i>
          {{ error }}
        </h4>
        <p class="title">
          <span>
            账号登录
            <a href="#">
              手机动态码登录
              <i class="el-icon-mobile"></i>
            </a>
          </span>
        </p>
        <el-input
          placeholder="手机号"
          prefix-icon="profile"
          v-model="phone"
          :class="{error: error && !phone}"
        ></el-input>
        <el-input
          placeholder="密码"
          prefix-icon="password"
          v-model="password"
          :class="{error: error && !password}"
        ></el-input>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth cf">
                <span class="oauth__link oauth__link--qq third-login-btn" data-href="/account/connect/tencent" target="_blank" id="J-third-tencent"></span>
                <span class="oauth__link oauth__link--weibo third-login-btn" data-href="/account/connect/sina" target="_blank" id="J-third-sina"></span>
            </div>
            <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="">关于美团</a></li>
        <li><a href="">加入我们</a></li>
        <li><a href="">商家入驻</a></li>
        <li><a href="">帮助中心</a></li>
        <li><a href="">美团手机版</a></li>
      </ul>
      <p>
        ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
import api from '@/axios';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      phone: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapMutations(['setUserName']),
    submit() {
      if (!this.phone) {
        this.error = "请输入手机号";
        return false;
      }
      if (!this.password) {
        this.error = "请输入密码";
        return false;
      }
      const { password } = this;
      api.login({
        params: {
          userName: this.phone,
          password
        }
      }).then(res => {
        if (res.status === "success") {
          this.$router.push({
            name: 'index'
          });
          this.setUserName(res.data);
        } else {
          this.error = res.msg;
        }
      
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
