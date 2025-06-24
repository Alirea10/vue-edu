<template>
  debug:
  {{ school1 }}
  {{ school2 }}
  {{ school3 }}
  <div class="filter">
    <!-- 1 -->
    <div class="filter__section">
      <div class="filter__title">学院：</div>
      <div class="filter__options">
        <span
            v-for="data in data1"
            :key="data.id"
            :class="{ 'filter__option--active': school1 === data.school1 }"
            class="filter__option"
            @click="selectSchool(data.school1)">
          {{ data.school1 }}
        </span>
      </div>
    </div>

    <!-- 2 -->
    <div class="filter__section">
      <div class="filter__title">分类：</div>
      <div class="filter__options">
        <span
            v-for="data in data2"
            :key="data.id"
            v-show="school1 === 'all' || school1 === data.id"
            :class="{ 'filter__option--active': school2 === data.school2 }"
            class="filter__option"
            @click="selectSchool2(data.school2)">
          {{ data.school2 }}
        </span>
      </div>
    </div>

    <!-- 3 -->
    <div class="filter__section">
      <div class="filter__title">子类：</div>
      <div class="filter__options">
        <span
            v-for="data in data3"
            :key="data.id"
            v-show="school2 === 'all' || school2 === data.id"
            :class="{ 'filter__option--active': school3 === data.school3 }"
            class="filter__option"
            @click="selectSchool3(data.school3)">
          {{ data.school3 }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref, type Ref} from 'vue'

const school1: Ref<string | 'all'> = ref('all')
const school2: Ref<string | 'all'> = ref('all')
const school3: Ref<string | 'all'> = ref('all')

const data1 = ref<{ id: string; school1: string }[]>([])
const data2 = ref<{ id: string; school2: string }[]>([])
const data3 = ref<{ id: string; school3: string }[]>([])

onMounted(async () => {
  try {
    const res1 = await fetch('/assets/data/data1.json')
    data1.value = await res1.json()

    const res2 = await fetch('/assets/data/data2.json')
    data2.value = await res2.json()

    const res3 = await fetch('/assets/data/data3.json')
    data3.value = await res3.json()
  } catch (error) {
    console.error("未能获取学校列表", error);
  }
})
// const data1: Ref<MainData[]> = ref([
//   {id: 1, school1: '教师教育学院'},
//   {id: 2, school1: '乡村振兴学院'},
//   {id: 3, school1: '职业技术学院'},
//   {id: 4, school1: '智能产业学院'},
// ])
//
// const data2: Ref<SubData[]> = ref([
//   // 教师教育学院的二级分类
//   {id: '教师教育学院', school2: '一年级数学'},
//   {id: '教师教育学院', school2: '二年级数学'},
//   {id: '教师教育学院', school2: '三年级数学'},
//   {id: '教师教育学院', school2: '四年级数学'},
//   {id: '教师教育学院', school2: '五年级数学'},
//   {id: '教师教育学院', school2: '六年级数学'},
//   // 乡村振兴学院的二级分类
//   {id: '乡村振兴学院', school2: '农业技术'},
//   {id: '乡村振兴学院', school2: '乡村管理'},
//   {id: '乡村振兴学院', school2: '生态农业'},
//   // 职业技术学院的二级分类
//   {id: '职业技术学院', school2: '电子工程'},
//   {id: '职业技术学院', school2: '机械制造'},
//   {id: '职业技术学院', school2: '软件开发'},
//   // 智能产业学院的二级分类
//   {id: '智能产业学院', school2: '人工智能'},
//   {id: '智能产业学院', school2: '大数据'},
// ])
//
// const data3: Ref<ThirdData[]> = ref([
//   // 一年级数学的三级分类
//   {id: '一年级数学', school3: '加法'},
//   {id: '一年级数学', school3: '减法'},
//   {id: '一年级数学', school3: '乘法'},
//   // 二年级数学的三级分类
//   {id: '二年级数学', school3: '分数'},
//   {id: '二年级数学', school3: '小数'},
//   {id: '二年级数学', school3: '比例'},
//   // 三年级数学的三级分类
//   {id: '三年级数学', school3: '几何'},
//   {id: '三年级数学', school3: '代数'},
//   {id: '三年级数学', school3: '统计'},
//   // 四年级数学的三级分类
//   {id: '四年级数学', school3: '空间'},
//   {id: '四年级数学', school3: '时间'},
//   {id: '四年级数学', school3: '测量'},
//   // 五年级数学的三级分类
//   {id: '五年级数学', school3: '概率'},
//   {id: '五年级数学', school3: '数列'},
//   {id: '五年级数学', school3: '方程'},
//   // 六年级数学的三级分类
//   {id: '六年级数学', school3: '函数'},
//   {id: '六年级数学', school3: '图形'},
//   {id: '六年级数学', school3: '应用题'},
//   // 农业技术
//   {id: '农业技术', school3: '种植技术'},
//   {id: '农业技术', school3: '农业机械'},
//   // 乡村管理
//   {id: '乡村管理', school3: '政策法规'},
//   {id: '乡村管理', school3: '项目管理'},
//   // 生态农业
//   {id: '生态农业', school3: '有机种植'},
//   {id: '生态农业', school3: '生态保护'},
//   // 电子工程
//   {id: '电子工程', school3: '电路设计'},
//   {id: '电子工程', school3: '控制系统'},
//   // 机械制造
//   {id: '机械制造', school3: '数控技术'},
//   {id: '机械制造', school3: '机械制图'},
//   // 软件开发
//   {id: '软件开发', school3: '前端开发'},
//   {id: '软件开发', school3: '后端开发'},
//   // 人工智能
//   {id: '人工智能', school3: '机器学习'},
//   {id: '人工智能', school3: '深度学习'},
//   // 大数据
//   {id: '大数据', school3: '数据分析'},
//   {id: '大数据', school3: '数据挖掘'},
// ])


function selectSchool(school: string) {
  school1.value = school
  school2.value = 'all'
  school3.value = 'all'
}

function selectSchool2(school: string) {
  school2.value = school
  school3.value = 'all'
}

function selectSchool3(school: string) {
  school3.value = school
}
</script>

<style lang="scss" scoped>
.filter {
  width: 80%;
  font-family: Arial, sans-serif;
  //padding: 15px;
  border: 15px solid #f5f5f5;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin: 10px auto 0 auto;

  &__section {
    display: flex;
    margin-bottom: 15px;
  }

  &__title {
    width: 60px;
    font-weight: bold;
    color: #333;
  }

  &__options {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__option {
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    &--active {
      background-color: #1890ff;
      color: white;
      border-color: #1890ff;
    }
  }
}
</style>