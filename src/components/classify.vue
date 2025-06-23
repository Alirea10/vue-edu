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
            :class="{ 'filter__option--active': school1 === data.id }"
            class="filter__option"
            @click="selectSchool(data.id)">
          {{ data.school }}
        </span>
      </div>
    </div>

    <!-- 2 -->
    <div class="filter__section">
      <div class="filter__title">分类：</div>
      <div class="filter__options">
        <span
            v-for="data in data2"
            :key="data.subId"
            v-show="school1 === data.id"
            :class="{ 'filter__option--active': school2 === data.subId }"
            class="filter__option"
            @click="selectSchool2(data.subId)">
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
            v-show="school2 === data.id"
            :class="{ 'filter__option--active': school3 === data.id }"
            class="filter__option"
            @click="selectSchool3(data.id)">
          {{ data.school3 }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, type Ref} from 'vue'

interface MainData {
  id: number
  school: string
}

interface SubData {
  id: number  // 关联到一级分类的id
  subId: number  // 二级分类自己的唯一ID
  school2: string
}

interface ThirdData {
  id: number  // 关联到二级分类的subId
  school3: string
}

const school1: Ref<number | 'all'> = ref('all')
const school2: Ref<number | 'all'> = ref('all')
const school3: Ref<number | 'all'> = ref('all')

const data1: Ref<MainData[]> = ref([
  {id: 1, school: '教师教育学院'},
  {id: 2, school: '乡村振兴学院'},
  {id: 3, school: '职业技术学院'},
  {id: 4, school: '智能产业学院'},
])

const data2: Ref<SubData[]> = ref([
  // 教师教育学院的二级分类
  {id: 1, subId: 101, school2: '一年级数学'},
  {id: 1, subId: 102, school2: '二年级数学'},
  {id: 1, subId: 103, school2: '三年级数学'},
  {id: 1, subId: 104, school2: '四年级数学'},
  {id: 1, subId: 105, school2: '五年级数学'},
  {id: 1, subId: 106, school2: '六年级数学'},
  // 乡村振兴学院的二级分类
  {id: 2, subId: 201, school2: '农业技术'},
  {id: 2, subId: 202, school2: '乡村管理'},
  {id: 2, subId: 203, school2: '生态农业'},
  // 职业技术学院的二级分类
  {id: 3, subId: 301, school2: '电子工程'},
  {id: 3, subId: 302, school2: '机械制造'},
  {id: 3, subId: 303, school2: '软件开发'},
])

const data3: Ref<ThirdData[]> = ref([
  // 一年级数学的三级分类
  {id: 101, school3: '加法'},
  {id: 101, school3: '减法'},
  {id: 101, school3: '乘法'},
  // 二年级数学的三级分类
  {id: 102, school3: '分数'},
  {id: 102, school3: '小数'},
  {id: 102, school3: '比例'},
  // 三年级数学的三级分类
  {id: 103, school3: '几何'},
  {id: 103, school3: '代数'},
  {id: 103, school3: '统计'},
  // 其他二级分类的三级分类
  {id: 201, school3: '种植技术'},
  {id: 201, school3: '农业机械'},
  {id: 301, school3: '电路设计'},
  {id: 301, school3: '控制系统'},
])

function selectSchool(school: number) {
  school1.value = school
  school2.value = 'all'
  school3.value = 'all'
}

function selectSchool2(school: number) {
  school2.value = school
  school3.value = 'all'
}

function selectSchool3(school: number) {
  school3.value = school
}
</script>

<style lang="scss" scoped>
.filter {
  width: 80%;
  font-family: Arial, sans-serif;
  padding: 15px;
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