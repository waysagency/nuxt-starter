<script setup>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const { story, blok } = defineProps({ story: Object, blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
  intro: blok.text,
});
</script>

<style lang="scss" scoped>
.swiper-slide {
  @apply w-[420px];
}
</style>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <swiper :modules="[Navigation, A11y]" navigation slides-per-view="auto" :space-between="20">
      <swiper-slide
        v-for="(testimonial, index) in blok.testimonials"
        :key="testimonial._uid"
        class="mr-5"
      >
        <StoryblokComponent :blok="testimonial" />
      </swiper-slide>
    </swiper>
  </format-section>
</template>
