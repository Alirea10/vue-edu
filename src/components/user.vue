<script setup lang="ts">
import { ref } from 'vue'
const avatar = "/assets/images/img.jpg"
</script>

<template>
  <div class="main">
    <!--  头部信息栏  -->
    <div class="header">
      <div class="header_left">
        <div class="avatar" >
          <img :src=avatar alt="头像">
        </div>
        <div class="name">
          <span>用户名</span>
          <p>2021-12-12加入途课网</p>
        </div>
      </div>
      <div class="header_right">
        <div class="credit">
          <span>13</span>
          <p>已获学分</p>
        </div>
        <div class="project">
          <span>13</span>
          <p>参与课程</p>
        </div>
        <div class="time">
          <span>3.8</span>
          <p>学习时长（h）</p>
        </div>
        <div class="comment">
          <span>2/1</span>
          <p>评论/回复</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header{
  width: 100%;
  height: 170px;
  background-color:blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .header_left{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20%;
  height: 100%;
}
.header .header_left .avatar img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
  object-fit: cover;
}
.header .header_left .name{
  width: 200px;
  padding-left: 20px;
  color: white;
}
.header .header_left .name span{
  font-size: 30px;
}
.header .header_right{
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  color: white;
  padding-right: 20%;
  height: 100%;
  width: 100%;
}
.header .header_right div{
  width: 100px;
  text-align: center;
}
.header .header_right div span{
  font-size: 30px;
}

</style>