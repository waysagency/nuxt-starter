<script setup>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const { story, blok } = defineProps({ story: Object, blok: Object });

const sectionOptionsHero = reactive({
  headingElement: "h1",
  heading: story.name,
  intro: blok.text,
});

const sectionOptionsTeam = reactive({
  heading: "Health research team",
  headingClass: "h4 text-center",
});

const storyblokApi = useStoryblokApi();
const {
  data: { stories: persons },
} = await storyblokApi.get("cdn/stories", {
  version: "draft",
  starts_with: `${story.full_slug}team`,
});
</script>

<template>
  <format-section :options="sectionOptionsHero" />

  <format-section v-if="blok.images.length > 0">
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
          slidesPerView: 3.25,
        },
        768: {
          slidesPerView: 4.25,
        },
      }"
    >
      <swiper-slide v-for="blok in blok.images" :key="blok._uid" class="mr-5">
        <StoryblokComponent :blok="blok" />
      </swiper-slide>
    </swiper>
  </format-section>

  <format-section :options="sectionOptionsTeam">
    <div class="grid">
      <div class="col-span-4 grid lg:col-span-8 lg:col-start-3 lg:grid-cols-8">
        <personal-card
          v-for="({ content }, index) in persons"
          :key="index"
          :person="content"
          class="col-span-2 md:col-span-1 lg:col-span-2"
        />
      </div>
    </div>
  </format-section>
</template>
