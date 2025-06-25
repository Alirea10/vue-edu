<script setup>
</script>

<template>
  <div class="container">
    <p class="title">新闻动态</p>
    <div class="news">
      <div class="news__left">
        <div class="news__left__item" v-for="i in 4" :key="i">
          <div class="news__left__item__title">
            <p>新闻标题 {{ i }}</p>
          </div>
          <div class="news__left__item__info">
            <span>近日，教育部发布《教育部现行有效规章目录》的公告，教育部整理了47项规章的原文
链接，点击规章名称即可查看。一起来看具体目录吧↓√√
</span>
          </div>
        </div>
      </div>

      <div class="news__right">
        <n-carousel autoplay show-arrow>
          <img
              src="/assets/images/img.jpg"
              alt="新闻图片">
          <img
              src="/assets/images/img.jpg"
              alt="新闻图片">
          <img
              src="/assets/images/img.jpg"
              alt="新闻图片">
          <img
              src="/assets/images/img.jpg"
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

    &__item {
      height: 25%;
      background-color: #f5f5f5;
      &:hover{
        background-color: #ffffff;
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