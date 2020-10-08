<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="7" class="left">
        <router-link to="/">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
        </router-link>
      </el-col>
      <el-col :span="11" class="center">
        <div class="wrapper">
          <el-input placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input" v-model="keywords"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) of hotPlaceList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) of searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/axios';

export default {
  data() {
    return {
      // isHotPlace: false,
      // isSearchList: false,
      isFocus: false,
      keywords: '',
      hotPlaceList: [],
      searchList: []
    }
  },
  created () {
    api.getHotSearchList().then(res => {
      this.hotPlaceList = res.splice(0, 5);
    })
    
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.keywords
    },
    isSearchList() {
      return this.isFocus && this.keywords
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input() {
      api.getSearchList().then(res => {
        this.searchList = res.list.filter(item => {
          return item.includes(this.keywords);
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/css/public/header/search.scss';
</style>
