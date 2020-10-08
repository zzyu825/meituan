<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd 
        v-for="(item, index) of nav.list" 
        :key="index" :class="{ active: kind === item.tab }"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) of data[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src="item.image"
            class="image"
          />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="curerent-price numfont">{{ item.price }}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    nav: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      kind: 'all',
    }
  },
  methods: {
    over(e) {
      if (e.target.tagName !== "DD") {
        return false;
      }
      this.kind = e.target.getAttribute('data-type');
      // 通过kind获取到选项对应的数据
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
