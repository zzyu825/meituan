<template>
  <div class="choose-wrap" @click.stop="showList" v-document-click="documentClick">
    <div class="choose" :class="{'disabled': disabled}">
      <span>{{ val }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="['mt-content', {'active': show}]">
        <h2>{{ title }}</h2>
        <div :class="['wrapper', className]">
          <div v-for="(item, index) of provinceList" :key="index" class="col">
            <span v-for="obj of item" :key="obj.name" :class="['mt-item', {'active': val === obj.name}]" @click.stop="changeVal(obj)">{{ obj.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    val: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      // required: true
    },
    className: {
      type: String
    }
  },
  methods: {
    showList() {
      // this.show = true;
      this.$emit('change-active', true);
    },
    documentClick() {
      this.$emit('change-active', false);
    },
    changeVal(val) {
      this.$emit('change', val);
    }
  },
  computed: {
    provinceList() {
      let col = Math.ceil(this.list.length / 12);
      let result = [];
      for (let i = 0; i < col; i++) {
        // 0-12 12-24 24-34
        let data = this.list.slice(i * 12, i * 12 + 12);
        // [[], [], []]
        result.push(data);
      }
      return result;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
