<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item of nav"
        :key="item.id"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row>
      <item v-for="item of productList" :key="item.itemId" :data="item" />
    </el-row>
  </div>
</template>

<script>
import item from "./item";
import api from "@/axios";
export default {
  components: {
    item,
  },
  data() {
    return {
      nav: [
        {
          name: "智能排序",
          id: "s-default",
          active: true,
        },
        {
          name: "价格排序",
          id: "s-price",
          active: false,
        },
        {
          name: "人气最高",
          id: "s-score",
          active: false,
        },
        {
          name: "评价最高",
          id: "s-commit",
          active: false,
        },
      ],
      productList: [],
    };
  },
  created() {
    api.getProductList().then((res) => {
      this.productList = res;
    });
  },
};
</script>
