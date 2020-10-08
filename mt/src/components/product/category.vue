<template>
  <div class="m-product-category">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item of category" :key="item.title">
        <Select :title="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item of area" :key="item.title">
        <Select :title="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import Select from "./select";
import api from '@/axios';
export default {
  components: {
    Select,
  },
  data() {
    return {
      category: [],
      area: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            }, {
              name: "昌平",
              id: 12222
            }
          ]
        }
      ]
    }
  },
  created () {
    api.getCategoryList().then(res => {
      this.category = res;
    });
  }
};
</script>

<style></style>
