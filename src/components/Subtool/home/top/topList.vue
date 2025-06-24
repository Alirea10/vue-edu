<script setup lang="ts">
import { defineProps, computed } from "vue";

// 定义排行榜项目的接口
interface RankItem {
  image: string;
  title: string;
  description: string;
  price: number | string;
}

const props = defineProps({
  title: {
    type: String,
    default: "排行榜"
  },
  t1: {
    type: Object as () => RankItem,
    default: () => ({
      image: "/assets/images/img.jpg",
      title: "默认主题1",
      description: "默认简介1",
      price: "0"
    })
  },
  t2: {
    type: Object as () => RankItem,
    default: () => ({
      image: "/assets/images/img.jpg",
      title: "默认主题2",
      description: "默认简介2",
      price: "0"
    })
  },
  t3: {
    type: Object as () => RankItem,
    default: () => ({
      image: "/assets/images/img.jpg",
      title: "默认主题3",
      description: "默认简介3",
      price: "0"
    })
  },
  t4: {
    type: Object as () => RankItem,
    default: () => ({
      image: "/assets/images/img.jpg",
      title: "默认主题4",
      description: "默认简介4",
      price: "0"
    })
  },
  t5: {
    type: Object as () => RankItem,
    default: () => ({
      image: "/assets/images/img.jpg",
      title: "默认主题5",
      description: "默认简介5",
      price: "0"
    })
  }
});

// 将各个排名项组合成数组以便使用v-for
const rankItems = computed(() => {
  return [props.t1, props.t2, props.t3, props.t4, props.t5].filter(item => item);
});
</script>

<template>
  <div class="topList">
    <div class="topList__top">
<!--      <img src="/assets/images/icon.png" alt="hot图标">-->
      <span class="topList__title">{{ title }}</span>
    </div>
    <div class="topList__items">
      <div
        v-for="(item, index) in rankItems"
        :key="index"
        class="rank-item"
      >
        <div class="rank-number" :class="`rank-${index + 1}`">{{ index + 1 }}</div>
        <div class="rank-image">
          <img :src="item.image" :alt="`排名${index + 1}`">
        </div>
        <div class="rank-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <div class="rank-price">¥{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topList {
  width: 30%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border: 15px;
  border-radius: 6px;

  &__top {
    background-image: url('/assets/images/img.jpg'); /* 使用url()函数引入背景图片 */
    background-size: cover; /* 使图片覆盖整个元素区域 */
    background-position: top; /* 图片居顶显示 */
    background-repeat: no-repeat; /* 图片不重复 */
    height: 80px; /* 设置高度 */
    border-radius: 6px 6px 0 0; /* 上方圆角 */
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    margin-left: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eaeaea;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .rank-item {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.09);
    }

    .rank-number {
      flex: 0 0 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      background-color: #ff6b6b;
      border-radius: 50%;
      margin-right: 10px;

      &.rank-1 {
        background-color: #ffd700; // 金色
      }

      &.rank-2 {
        background-color: #c0c0c0; // 银色
      }

      &.rank-3 {
        background-color: #cd7f32; // 铜色
      }
    }

    .rank-image {
      flex: 0 0 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 4px;
      margin-right: 12px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .rank-content {
      flex: 1;

      h3 {
        margin: 0 0 5px;
        font-size: 16px;
        line-height: 1.2;
      }

      p {
        margin: 0 0 8px;
        font-size: 12px;
        color: #666;
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .rank-price {
        font-weight: bold;
        color: #ff6b6b;
      }
    }
  }
}
</style>