<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="item of imgList" :key="item.img">
        <img :src="item.img" :alt="item.alt">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: '#',
          img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
          alt: '住酒店'
        },
        {
          url: '#',
          img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
          alt: '吃美食'
        },
        {
          url: '#',
          img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
          alt: '点外卖'
        },
        {
          url: '#',
          img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
          alt: '看电影'
        },
        {
          url: '#',
          img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
          alt: '美团排队'
        }
      ]
    }
  }
};
</script>

<style></style>
