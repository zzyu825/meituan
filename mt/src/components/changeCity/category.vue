<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item of list" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-category-section"
      v-for="(val, key) of group"
      :key="key"
      :id="'city-' + key"
    >
      <dt>{{ key }}</dt>
      <dd>
        <span v-for="city of val" :key="city.id" @click="changecity">{{
          city.name
        }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/axios";
export default {
  data() {
    return {
      list: "ABCDEFGHJKLMNPQRSTWXYZ".split(""),
      group: {},
    };
  },
  created() {
    api.getCityList().then((res) => {
      res.forEach((item) => {
        const e = item.firstChar.toUpperCase();
        if (!this.group[e]) {
          this.$set(this.group, e, []);
        }
        this.group[e].push(item);
      });
    });
    console.log(this.group);
  },
  methods: {
    changecity() {
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";</style
>
