<script setup>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const { blok } = defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.swiper {
  &-slide {
    @apply w-[420px];
  }
}
</style>

<template>
  <swiper
    :modules="[Navigation, A11y]"
    navigation
    center-insufficient-slides
    slides-per-view="auto"
    :space-between="20"
  >
    <swiper-slide
      v-for="(testimonial, index) in blok.testimonials"
      :key="testimonial._uid"
      class="mr-5"
    >
      <StoryblokComponent :blok="testimonial" />
    </swiper-slide>
  </swiper>
</template>
