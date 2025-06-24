<script setup>

const props = defineProps({
  title: {
    type: String,
    default: "标题"
  },
  items:{
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="contentCard">
    <p class="title">{{title}}</p>
    <span v-for="(item, idx) in items" :key="idx" v-show="item !== ''">{{ item }}</span>
  </div>
</template>

<style scoped lang="scss">
.contentCard{
  width: 100%;
  flex:1;
  padding: 10px;
  color: #f6f6f6;
  background-color: #333333;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #222222;
  }
  span {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 4px;
    cursor: pointer;
  }
}
.title{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>