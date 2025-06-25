<script setup>
import { ref, onMounted } from 'vue';

const newsList = ref([]);

onMounted(async () => {
  const res = await fetch('/assets/data/api.json');
  const json = await res.json();
  newsList.value = json.data.newses || [];
});
</script>

<template>
  <div class="container">
    <p class="title">新闻动态</p>
    <div class="news">
      <div class="news__left">
        <div class="news__left__item" v-for="item in newsList.slice(0,4)" :key="item.id">
          <div class="news__left__item__title">
            <p>{{ item.title }}</p>
          </div>
          <div class="news__left__item__info">
            <span>{{ item.createTime }}</span>
          </div>
        </div>
      </div>

      <div class="news__right">
        <n-carousel autoplay show-arrow>
          <img
              v-for="item in newsList.slice(0,4)"
              :key="item.id"
              :src="item.coverImg.startsWith('http') ? item.coverImg : 'https://www.tukedu.com' + item.coverImg"
              alt="新闻图片">
        </n-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 80%;
  margin: 10px auto 300px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;

}

.news {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 400px; // 可根据需要调整高度


  &__left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 18px 20px 14px 20px;
      border-radius: 8px;
      background-color: #f5f5f5;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      cursor: pointer;
      transition: background 0.2s, box-shadow 0.2s;
      min-height: 70px;
      position: relative;
      overflow: hidden;
      &:hover{
        background-color: #fff;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      .news__left__item__title {
        font-size: 17px;
        font-weight: 600;
        color: #222;
        margin-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .news__left__item__info {
        font-size: 13px;
        color: #888;
      }
    }
  }

  &__right {
    width: 50%;
    height: 100%;
    display: flex;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

</style>