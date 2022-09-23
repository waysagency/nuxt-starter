<template>
  <swiper
    slides-per-view="1"
    :space-between="20"
    :breakpoints="{
      640: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    }"
  >
    <swiper-slide v-for="index in 8" :key="index"> Slide {{ index }} </swiper-slide>
  </swiper>
</template>

<script setup>
// import Swiper core and required modules
// import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
</script>
