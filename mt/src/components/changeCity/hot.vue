<template>
  <div class="m-hcity">
    <dl>
      <dt>
        <slot></slot>
      </dt>
      <dd v-for="item of list" :key="item">{{ item }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
	props: ["list"]
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/hot.scss"
</style>
