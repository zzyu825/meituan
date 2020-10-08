<template>
  <div>
    <span class="name">按省份选择：</span>
    <Select
      :val="province"
      title="省份"
      :list="provinceList"
      :show="showProvinceActive"
      @change-active="changeProvinceActive"
      @change="changeProvince"
    />
    <Select
      :val="city"
      title="城市"
      :list="cityList"
      :show="showCityActive"
      @change-active="changeCityActive"
      :disabled="cityDisabled"
      @change="changeCity"
      className="city"
    />
    <span class="search">直接搜索：</span>
    <el-select
      v-model="keywords"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import Select from "./select";
import api from '@/axios'
export default {
  data() {
    return {
      province: "省份",
      city: "城市",
      provinceList: [],
      cityList: [],
      showProvinceActive: false,
      showCityActive: false,
      cityDisabled: true,
      keywords: "",
      searchList: [],
      loading: false,
    };
  },
  created () {
    api.getProvinceList().then(res => {
      this.provinceList = res.map(it => {
        it.name = it.provinceName;
        return it;
      });
    })
  },
  components: {
    Select,
  },
  methods: {
    changeProvinceActive(flag) {
      this.showProvinceActive = flag;
      if (flag) {
        this.showCityActive = false;
      }
    },
    changeCityActive(flag) {
      this.province !== "省份" ? (this.showCityActive = flag) : "";
      if (flag && this.province !== "省份") {
        this.showProvinceActive = false;
      }
    },
    changeProvince({provinceName, cityInfoList}) {
      this.province = provinceName;
      this.showProvinceActive = false;
      this.cityDisabled = false;
      console.log(cityInfoList);
      this.cityList = cityInfoList;
    },
    changeCity(data) {
      this.city = data;
      this.$router.push({ name: "index" });
    },
    remoteMethod(query) {
      // 请求后端接口
      if (query !== "") {
        this.loading = true;
        const list = ["青岛", "淄博", "济南", "烟台"];
        setTimeout(() => {
          this.loading = false;
          this.searchList = list.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase());  
          });
        }, 200);
      } else {
        this.list = [];
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
