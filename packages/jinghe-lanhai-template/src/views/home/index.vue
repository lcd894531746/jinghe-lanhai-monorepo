<template>
  <div class="home">
    <div class="text-white absolute top-9 left-8 flex">
      <div>{{ nowTime }}</div>
      <div class="mx-1">{{ nowDate }}</div>
      <div>{{ nowWeek }}</div>
    </div>
    <div class="top-header"></div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";

// 获取当前的时间
let nowTime = ref();
const getTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};
// 获取当前是星期几
const getWeek = () => {
  let date = new Date();
  let week = date.getDay();
  let weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  return weeks[week];
};
let nowWeek = ref(getWeek());
// 获取当前年月日
const getDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};
let nowDate = ref();
nowDate.value = getDate();

onMounted(() => {
  console.log("home");
  setInterval(() => {
    nowTime.value = getTime();
  }, 1000);
});

</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url("public/static/img/home_bg.webp");
  background-size: 100% 100%;
  position: relative;
  .top-header {
    width: 100%;
    height: 118px;
    background-image: url("public/static/img/index_1.webp");
    background-size: 100% 100%;
  }
}
</style>
