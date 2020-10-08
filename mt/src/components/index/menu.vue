<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd v-for="item of menuList" :key="item.name" @mouseenter="enter(item)" @mouseleave="leave">
        <i :class="item.type"></i>
        <span>{{ item.name }}</span>
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="item of curDetail.items">
        <h4 :key="item.title">{{ item.title }}</h4>
        <span v-for="v of item.items" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/axios';
export default {
  data() {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created () {
    api.getMenuList().then(res => {
      this.menuList = res;
    })
  },
  methods: {
    enter(data) {
      clearTimeout(this.timer);
      this.curDetail = data;
    },
    leave() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
};
</script>

<style></style>
