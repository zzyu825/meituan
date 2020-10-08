<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
        {{ title }}
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
        <span class="title">{{ title }}</span>
        <span v-for="item of list" :key="item.id">{{ item.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['title', 'list']
};
</script>

<style></style>
