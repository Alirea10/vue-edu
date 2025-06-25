<template>
  debug:
  {{ school1 }}
  {{ school2 }}
  <div class="filter">
    <!-- 1 -->
    <div class="filter__section">
      <div class="filter__title">学院：</div>
      <div class="filter__options">
        <span
            v-for="college in colleges"
            :key="college.id"
            :class="{ 'filter__option--active': school1 === college.name }"
            class="filter__option"
            @click="selectSchool(college.name)"
        >
          {{ college.name }}
        </span>
      </div>
    </div>

    <!-- 2 -->
    <div class="filter__section">
      <div class="filter__title">分类：</div>
      <div class="filter__options">
        <span
            v-for="skill in currentSkills"
            :key="skill.skillId"
            :class="{ 'filter__option--active': school2 === skill.skillName }"
            class="filter__option"
            @click="selectSchool2(skill.skillName)">
          {{ skill.skillName }}
        </span>
      </div>
    </div>
  </div>
  <div class="cardList">
    <card v-for="course in currentCourses" :key="course.courseId"
          :tag="school1"
          :description="course.courseName"
          :imageUrl="course.coverImg"
          :price="course.price || 0"
          showBorder
    />
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, ref, type Ref} from 'vue'
import Card from "@/components/Subtool/course/card.vue";

const colleges = ref<any[]>([])
const school1: Ref<string | 'all'> = ref('all')
const school2: Ref<string | 'all'> = ref('all')

// 选中学院后，获取该学院下的skills
const currentSkills = computed(() => {
  if (school1.value === 'all') return []
  const college = colleges.value.find(c => c.name === school1.value)
  return college ? college.skills : []
})

// 选中学院后，获取该学院下的courses
const currentCourses = computed(() => {
  if (school1.value === 'all') return []
  const college = colleges.value.find(c => c.name === school1.value)
  if (!college || !college.courses) return []
  // 为每个课程的coverImg加上前缀
  return college.courses.map(course => ({
    ...course,
    coverImg: course.coverImg ? `https://www.tukedu.com${course.coverImg}` : ''
  }))
})

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

function selectSchool(school: string) {
  school1.value = school
  school2.value = 'all'
}

function selectSchool2(skill: string) {
  school2.value = skill
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

.cardList {
  display: flex;
  justify-content: space-between;
  width: calc(80% + 30px);
  font-family: Arial, sans-serif;
  border: 15px ;
  border-radius: 5px;
  margin: 10px auto 0 auto;
}
</style>