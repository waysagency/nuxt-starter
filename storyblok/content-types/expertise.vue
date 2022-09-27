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
  containerClass: "container--margin-bottom-small",
  headingElement: "h1",
  heading: story.name,
  intro: blok.text,
});

const sectionOptionsImages = reactive({
  containerClass: "container--margin-small",
});

const sectionOptionsTeam = reactive({
  containerClass: "container--margin-small",
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

  <format-section :options="sectionOptionsImages" v-if="blok.images.length > 0">
    <image-swiper :images="blok.images" />
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

  <StoryblokComponent v-for="project in blok.projects" :key="project._uid" :blok="project" />
</template>
