<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    default: 'assets/images/img.jpg'
  },
  title: {
    type: String,
    default: '很长很长很长很长很长很长的标题'
  },
})

</script>

<template>
  <div class="flex">
    <n-avatar
        size="large"
        :src='imageUrl'
        class="flex__image"
    ></n-avatar>
    <span class="flex__title">{{ title }}</span>
    <n-button>
      go
    </n-button>
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  justify-content: center;
  align-items: center; // 修改为center实现垂直居中
  margin: auto;
  height: 100%;
  width: 25%;
  background: #fff;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f6f6f6;
  }

  &__title {
    font-size: 20px;
    max-width: 60%;
  }
}
</style>