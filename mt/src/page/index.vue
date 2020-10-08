<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <Menu />
      </el-col>
      <el-col :span="19">
        <Content />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Container :nav="minsu" :data="lifeList" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Container :nav="iStyle" :data="lifeList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from "@/components/index/menu";
import Content from "@/components/index/content";
import Container from "@/components/index/container";
import api from '@/axios'

export default {
  components: {
    Menu,
    Content,
    Container,
  },
  created() {
    api.getLifeList().then((res) => {
      this.lifeList = res;
    });
  },
  data() {
    return {
      lifeList: {},
      minsu: {
        class: "youhui",
        title: "推荐民宿",
        list: [
          {
            tab: "all",
            text: "全部",
          },
          {
            tab: "food",
            text: "天津",
          },
          {
            tab: "spa",
            text: "济南",
          },
          {
            tab: "dalian",
            text: "大连",
          },
          {
            tab: "taiyuan",
            text: "太原",
          },
        ],
      },
      iStyle: {
        class: "istyle",
        title: "有格调",
        list: [
          {
            tab: "all",
            text: "全部",
          },
          {
            tab: "food",
            text: "约会聚餐",
          },
          {
            tab: "spa",
            text: "丽人SPA",
          },
          {
            tab: "movie",
            text: "电影演出",
          },
          {
            tab: "travel",
            text: "品质出游",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
