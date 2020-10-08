<template>
  <div class="page-product">
    <el-row>
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19"> 
        <category />
        <list />
      </el-col>
      <el-col :span="5">

      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from '@/components/product/crumbs';
import category from '@/components/product/category';
import list from '@/components/product/list';

export default {
  components: {
    crumbs,
    category,
    list
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
