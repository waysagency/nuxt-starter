<script setup>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

defineProps({ blok: Object });

const storyblokApi = useStoryblokApi();
const {
  data: { stories },
} = await storyblokApi.get("cdn/stories/", {
  version: "draft",
  starts_with: "educational-programs",
  is_startpage: 1,
});
</script>

<style lang="scss" scoped>
.swiper-slide {
  @apply w-52;
}
</style>

<template>
  <div v-editable="blok" class="grid">
    <div class="lg:col-span-10 lg:col-start-2">
      <h3 class="h4 text-center">{{ blok.heading }}</h3>
    </div>

    <div class="lg:col-span-10 lg:col-start-2">
      <swiper
        :modules="[Navigation, A11y]"
        slides-per-view="auto"
        :center-insufficient-slides="true"
        :space-between="20"
        navigation
      >
        <swiper-slide v-for="(story, index) in stories" :key="index">
          <nuxt-link
            :to="`/${story.full_slug}`"
            class="color-scheme color-scheme--primary group relative flex aspect-video w-52 items-center justify-center overflow-hidden p-4 text-center no-underline md:aspect-square"
          >
            <div class="color-scheme color-scheme--primary absolute inset-0 z-10 opacity-50"></div>
            <format-image
              :image="story.content.image"
              width="208"
              class="personal__image absolute inset-0 aspect-square transition-transform duration-500 group-hover:scale-110"
            />
            <span class="h6 z-20">
              {{ story.name }}
            </span>
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
