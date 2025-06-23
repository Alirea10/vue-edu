
<template>
  <div class="filter">
    <!-- 学院筛选 -->
    <div class="filter__section">
      <div class="filter__title">学院：</div>
      <div class="filter__options">
        <span
            v-for="college in colleges"
            :key="college.value"
            :class="{ 'filter__option--active': activeCollege === college.value }"
            class="filter__option"
            @click="selectCollege(college.value)"
        >
          {{ college.label }}
        </span>
      </div>
    </div>

    <!-- 分类筛选 -->
    <div class="filter__section" v-if="activeCollege">
      <div class="filter__title">分类：</div>
      <div class="filter__options">
        <span
            v-for="category in filteredCategories"
            :key="category.value"
            :class="{ 'filter__option--active': activeCategory === category.value }"
            class="filter__option"
            @click="selectCategory(category.value)"
        >
          {{ category.label }}
        </span>
      </div>
    </div>

    <!-- 子类筛选 -->
    <div class="filter__section" v-if="activeCategory">
      <div class="filter__title">子类：</div>
      <div class="filter__options">
        <span
            v-for="subcategory in filteredSubcategories"
            :key="subcategory.value"
            :class="{ 'filter__option--active': activeSubcategory === subcategory.value }"
            class="filter__option"
            @click="selectSubcategory(subcategory.value)"
        >
          {{ subcategory.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 脚本部分保持不变
import { ref, computed } from 'vue';

// 响应式数据
const activeCollege = ref('全部');
const activeCategory = ref('全部');
const activeSubcategory = ref('全部');

// 数据源
const colleges = [
  { value: '全部', label: '全部' },
  { value: '教师教育学院', label: '教师教育学院' },
  { value: '乡村振兴学院', label: '乡村振兴学院' },
  { value: '职业技术学院', label: '职业技术学院' },
  { value: '智能产业学院', label: '智能产业学院' }
];

const categories = [
  { value: '全部', label: '全部', college: '教师教育学院' },
  { value: '数学中考复习', label: '数学中考复习', college: '教师教育学院' },
  { value: '七年级数学', label: '七年级数学', college: '教师教育学院' },
  { value: '八年级数学', label: '八年级数学', college: '教师教育学院' },
  { value: '九年级数学', label: '九年级数学', college: '教师教育学院' },
  { value: '幼儿园健康领域', label: '幼儿园健康领域', college: '教师教育学院' },
  { value: '幼儿园社会领域', label: '幼儿园社会领域', college: '教师教育学院' },
  { value: '幼儿园综合领域', label: '幼儿园综合领域', college: '教师教育学院' },
  { value: '幼儿园艺术领域', label: '幼儿园艺术领域', college: '教师教育学院' },
  { value: '幼儿园科学领域', label: '幼儿园科学领域', college: '教师教育学院' },
  { value: '幼儿园语言领域', label: '幼儿园语言领域', college: '教师教育学院' },
  { value: '科学保教', label: '科学保教', college: '教师教育学院' },
  // 其他学院的分类...
];

const subcategories = [
  { value: '全部', label: '全部', category: '数学中考复习' },
  { value: '七年级数学', label: '全部', category: '七年级数学' },
  { value: '八年级数学', label: '全部', category: '八年级数学' },
  { value: '九年级数学', label: '全部', category: '九年级数学' },
  { value: '幼儿园健康领域', label: '全部', category: '幼儿园健康领域' },
  { value: '幼儿园社会领域', label: '全部', category: '幼儿园社会领域' },
  { value: '幼儿园综合领域', label: '全部', category: '幼儿园综合领域' },
  // 其他子类...
];

// 计算属性
// 修改后的计算属性
const filteredCategories = computed(() => {
  if (activeCollege.value === '全部') {
    // 当选择"全部"学院时，返回所有不重复的分类
    const allCategories = [];
    const uniqueValues = new Set();

    // 先添加"全部"选项
    // allCategories.push({ value: '全部', label: '全部' });

    // 添加所有不重复的分类
    categories.forEach(category => {
      if (!uniqueValues.has(category.value)) {
        uniqueValues.add(category.value);
        allCategories.push(category);
      }
    });

    return allCategories;
  }

  // 选择特定学院时的逻辑不变
  return [
    // { value: '全部', label: '全部' },
    ...categories.filter(item =>
        item.college === activeCollege.value
    )
  ];
});

const filteredSubcategories = computed(() => {
  if (activeCategory.value === '全部') {
    // 当选择"全部"分类时，根据当前选择的学院显示相关子类
    const relevantSubcategories = [];
    const relevantCategories = new Set();

    // 如果学院不是"全部"，获取该学院的所有分类
    if (activeCollege.value !== '全部') {
      categories.filter(cat => cat.college === activeCollege.value)
          .forEach(cat => relevantCategories.add(cat.value));
    } else {
      // 如果学院是"全部"，获取所有分类
      categories.forEach(cat => relevantCategories.add(cat.value));
    }

    // 添加"全部"选项
    // relevantSubcategories.push({ value: '全部', label: '全部' });

    // 添加与相关分类关联的子类
    subcategories.forEach(subcat => {
      if (relevantCategories.has(subcat.category)) {
        relevantSubcategories.push(subcat);
      }
    });

    return relevantSubcategories;
  }

  // 选择特定分类时的逻辑不变
  return [
    ...subcategories.filter(item => item.category === activeCategory.value)
  ];
});

// 方法
const selectCollege = (college) => {
  activeCollege.value = college;
  activeCategory.value = '全部';
  activeSubcategory.value = '全部';
};

const selectCategory = (category) => {
  activeCategory.value = category;
  activeSubcategory.value = '全部';
};

const selectSubcategory = (subcategory) => {
  activeSubcategory.value = subcategory;
};
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