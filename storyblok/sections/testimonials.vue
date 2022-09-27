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
.swiper {
  &-slide {
    @apply w-[420px];
  }
}
</style>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <section-testimonials :blok="blok" />
  </format-section>
</template>
