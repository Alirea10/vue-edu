<script setup lang="ts">
const avatar = "/assets/images/img.jpg"
</script>

<template>
  <div class="header">
    <h1>途课网学习报告</h1>
    <button class="download-btn">下载</button>
  </div>

  <table>
    <tr>
      <th>姓名</th><td>荒木某</td>
      <th>性别</th><td>女</td>
      <th>更新时间</th><td>2021年10月21日</td>
    </tr>
    <tr>
      <th>手机号</th><td>18875462566</td>
      <th>出生日期</th><td>2001年10月12日</td>
      <th>照片</th><td colspan="3"><img :src="avatar" alt="用户照片" height="100"></td>
    </tr>
    <tr>
      <th>户籍</th><td>广西南宁</td>
      <th>身份证号</th><td colspan="3">1234567891123456789</td>
    </tr>
    <tr>
      <th>毕业院校</th><td>广西师范大学</td>
      <th>学历</th><td>本科</td>
      <th>专业</th><td>数学与应用数学</td>
    </tr>
    <tr>
      <th>期望岗位</th><td>数学老师</td>
      <th>在修课程</th><td>13</td>
      <th>已修课程</th><td>15</td>
    </tr>
    <tr>
      <th>已获学分</th><td>13</td>
      <th>学习时长</th><td colspan="3">15小时</td>
    </tr>
  </table>

  <div class="section-title">课程学习情况</div>

  <table>
    <thead>
    <tr>
      <th>课程名称</th>
      <th>开始时间</th>
      <th>结束时间</th>
      <th>结课情况</th>
    </tr>
    </thead>
    <tbody>
    <tr><td>幼儿园保育员案例教学</td><td>2015年6月12日</td><td>2015年12月12日</td><td>已完成</td></tr>
    <tr><td>幼儿情绪缘发展特点及情绪问题应对策略</td><td>2015年6月12日</td><td>2015年12月12日</td><td>未完成</td></tr>
    <tr><td>C/C++与设计模式基础(第三季)</td><td>2015年6月12日</td><td>2015年12月12日</td><td>未完成</td></tr>
    <tr><td>淘宝电商基础入门(四)产品的定价和发布</td><td>2015年6月12日</td><td>2015年12月12日</td><td>已完成</td></tr>
    <tr><td>优化一日活动，提升保教质量</td><td>2015年6月12日</td><td>2015年12月12日</td><td>已完成</td></tr>
    <!-- 此处省略其他课程行，实际使用时需补全 -->
    </tbody>
  </table>
</template>

<style scoped lang="scss">
body {
  font-family: "Microsoft YaHei", sans-serif;
}
table {
  width: 100%; border-collapse: collapse; margin-bottom: 20px;
}
th, td {
  border: 1px solid #ddd; padding: 8px; text-align: left;
}
th {
  background-color: #f2f2f2; font-weight: normal;
}
.header {
  display: flex;
  justify-content: space-between;
  background-color: #1e88e5;
  color: white;
  padding: 15px;
}
.section-title {
  background-color: #e3f2fd; padding: 10px; margin: 20px 0 10px;
}
.download-btn {
  background-color: #ff9800;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  padding: 8px 8px;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
</style>