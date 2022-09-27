<script setup>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

defineProps({ images: Object });
</script>

<template>
  <swiper
    :modules="[Navigation, A11y]"
    :slides-per-view="1.25"
    center-insufficient-slides
    navigation
    :space-between="20"
    :breakpoints="{
      640: {
        slidesPerView: 2.25,
      },
      768: {
        slidesPerView: 2.75,
      },
      1024: {
        slidesPerView: 4.25,
      },
    }"
  >
    <swiper-slide v-for="blok in images" :key="blok._uid" class="mr-5">
      <StoryblokComponent :blok="blok" />
    </swiper-slide>
  </swiper>
</template>
