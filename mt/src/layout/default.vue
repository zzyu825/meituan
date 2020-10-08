<template>
  <el-container class="layout-default">
    <el-header height="" style="padding: 0;">
      <my-header />
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

    <el-footer height="">
      <myFooter />
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from "../components/header";
import myFooter from "../components/footer";

export default {
  components: {
    myHeader,
    myFooter
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
