<script setup>
import downCard from "@/components/Subtool/home/carousel/downCard.vue";
import LeftCard from "@/components/Subtool/home/carousel/leftCard.vue";
import {onMounted} from "vue";

onMounted(async () => {
  // 发送请求获取API数据
  fetch('https://www.tukedu.com/api/indexs')
      .then(res => res.json())
      .then(json => {
        colleges.value = json.data.colleges || [];
      })
      .catch(err => {
        console.error('API请求失败', err);
      });
})
</script>

<template>
  <div class="carousel">
    <div class="carousel__top">
      <div class="carousel__left">
        <LeftCard title="教师教育学院" :items="['推荐课程','研修社区','资源推荐']"></LeftCard>
        <LeftCard title="乡村振兴学院" :items="['推荐课程','荔枝种植','花卉园艺']"></LeftCard>
        <LeftCard title="智能产业学院" :items="['推荐课程','java','C++','Python']"></LeftCard>
        <LeftCard title="职业技能学院" :items="['推荐课程','电子商务','农业技术']"></LeftCard>
      </div>
      <div class="carousel__right">
        <n-carousel autoplay show-arrow>
          <n-carousel-item>
            <img src="/assets/images/img.jpg" alt="Image 1"/>
          </n-carousel-item>
          <n-carousel-item>
            <img src="/assets/images/img.jpg" alt="Image 2"/>
          </n-carousel-item>
          <n-carousel-item>
            <img src="/assets/images/img.jpg" alt="Image 3"/>
          </n-carousel-item>
        </n-carousel>
      </div>
    </div>
    <div class="carousel__down">
      <downCard></downCard>
      <downCard></downCard>
      <downCard></downCard>
      <downCard></downCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  width: 80%;
  height: 60vh;
  margin: auto;

  &__top {
    display: flex;
    justify-content: space-between;
    height: 85%;
  }

  &__left {
    width: 20%;
    display: flex;
    flex-direction: column;
  }

  &__right {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__down {
    width: 100%;
    height: 15%;
    background-color: #1890ff;
    display: flex;
    flex-direction: row;
  }
}
</style>