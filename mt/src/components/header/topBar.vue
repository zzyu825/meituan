<template>
  <el-row>
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <Nav />
    </el-col>
  </el-row>
</template>

<script>
import geo from "./geo";
import Nav from "./nav";
export default {
  components: {
    geo,
    Nav
  }
};
</script>

<style lang="scss">
@import '@/assets/css/public/header/topbar.scss'
</style>
