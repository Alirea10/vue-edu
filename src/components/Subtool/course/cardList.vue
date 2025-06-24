<script setup>

import Card from "@/components/Subtool/course/card.vue";
</script>

<template>
  <div class="cardList" >
    <card v-for="n in 5" :key="n" tag="铃兰" description="铃兰小姐是我们的光" imageUrl="/assets/images/img.jpg"
          price="144" showBorder></card>
  </div>
</template>

<style scoped lang="scss">


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