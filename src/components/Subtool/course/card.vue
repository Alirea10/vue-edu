<script setup>
import { ref,defineProps } from 'vue';

// 定义组件的 props
const props = defineProps({
  // 卡片tag
  tag: {
    type: String,
    default: '卡片标题'
  },
  // 卡片描述内容
  description: {
    type: String,
    default: '这是卡片的描述内容'
  },
  // 卡片图片URL
  imageUrl: {
    type: String,
    default: ''
  },
  // 卡片价格
  price: {
    type: String,
    default: '514',
  },
  local: {
    type: String,
    default: '东国'
  },
  learning: {
    type: String,
    default: '114'
  },
  // 是否显示卡片边框
  showBorder: {
    type: Boolean,
    default: true
  }
});

// 可以在这里添加响应式变量或函数
const isHovered = ref(false);

// 鼠标悬停处理函数
const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <div
    class="card"
    :class="[
      `card`,
      { 'card--border': showBorder },
      { 'card--hovered': isHovered }
    ]"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <!-- 添加了卡片标题元素，使用绝对定位到左上角 -->
    <h3 class="card__tag">{{ tag }}</h3>

    <div class="card__image" v-if="imageUrl">
      <img :src="imageUrl" alt="卡片图片">
    </div>
    <div class="card__content">
      <p class="card__description">{{ description }}</p>
      <span class="card__local">{{local}}</span>
      <span class="card__learning">{{learning}}人在学</span>
      <p class="card__price">￥{{price}}</p>
      <div class="card__actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 20%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 20px;
  position: relative; /* 添加相对定位，作为绝对定位标题的参考 */

  &--border {
    border: 1px solid #eaeaea;
  }

  &--hovered {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  /* 添加新的标题样式，用于叠加在左上角 */
  &__tag {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
    margin: 0;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  &__price{
    color: red;
  }
  &__local{
    color: #888;
    font-size: 14px;
  }
  &__learning{
    color: #888;
    font-size: 14px;
    margin-left: 10px;
  }
  &__image {
    width: 100%;
    height: 180px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 16px;
  }

  &__description {
    margin: 0 0 10px 0;
    font-size: 16px;
    color: #666;
    line-height: 1.5;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 12px;
    border-top: 1px solid #f0f0f0;
  }
}
</style>