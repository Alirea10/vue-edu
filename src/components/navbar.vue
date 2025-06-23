<script setup>
import { ref } from 'vue'
import avatarImg from '@/assets/images/img.jpg'
const username = ref('铃兰')
const avatar = ref(avatarImg)
</script>

<template>
  <nav class="navbar">
    <div class="navbar__left">
      <div class="navbar__logo">
        <!-- logo图标占位 -->
      </div>
      <button class="navbar__btn">首页</button>
      <button class="navbar__btn">课程中心</button>
      <button class="navbar__btn">我的班级</button>
    </div>
    <div class="navbar__right">
      <input class="navbar__search" type="text" placeholder="搜索..." />
      <img class="navbar__avatar" :src=avatar alt="头像" />
      <span class="navbar__username">{{ username }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 0 32px;

  &__left {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__logo {
    width: 40px;
    height: 40px;
    background: #eee;
    border-radius: 8px;
    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn {
    background: none;
    border: none;
    font-size: 16px;
    color: #333;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    &:hover {
      background: #f6f6f6;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__search {
    padding: 6px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    width: 180px;
    transition: border 0.2s;
    &:focus {
      border: 1px solid #409eff;
    }
  }

  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ccc;
    object-fit: cover;
  }

  &__username {
    margin-left: 8px;
    font-size: 16px;
    color: #333;
  }
}
</style>