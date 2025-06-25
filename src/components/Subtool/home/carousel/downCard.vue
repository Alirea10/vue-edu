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
    <span class="flex__title" :title="title">{{ title }}</span>
    <n-button class="flex__btn">
      go
    </n-button>
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 12px;
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 0 18px;
  gap: 14px;
  min-width: 0;

  &:hover {
    background: #f6f6f6;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }

  &__image {
    flex-shrink: 0;
  }

  &__title {
    font-size: 18px;
    font-weight: 500;
    color: #222;
    max-width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 10px 0 0;
  }

  &__btn {
    margin-left: auto;
    flex-shrink: 0;
    font-size: 15px;
    padding: 0 16px;
    border-radius: 6px;
  }
}
</style>