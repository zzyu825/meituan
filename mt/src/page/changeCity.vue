<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot :list="hotList">热门城市：</hot>
    </el-row>
    <el-row>
      <hot :list="rencentList">最近访问：</hot>
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import province from "@/components/changeCity/province";
import hot from "@/components/changeCity/hot";
import category from "@/components/changeCity/category";
import api from '@/axios';

export default {
  components: {
    province,
    hot,
    category
  },
  data() {
    return {
      hotList: [],
      rencentList: []
    }
  },
  created () {
    api.getHotCityList().then(res => {
      this.hotList = res.map(it => it.name);
    });
    api.getRencentList().then(res => {
      this.rencentList = res.map(it => it.name);
    });
  }
};
</script>

<style></style>
