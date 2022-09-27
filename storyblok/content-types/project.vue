<script setup>
const { story, blok } = defineProps({ story: Object, blok: Object });

const sectionOptionsHero = reactive({
  containerClass: "w-full my-0 h-[500px]",
  containerMainClass: "space-y-0 flex items-center",
});

const sectionOptionsAbout = reactive({
  heading: "About the project",
  intro: blok.about_text,
});

const sectionOptionsResearch = reactive({
  heading: "Experimental research",
  intro: blok.research_text,
});

const sectionOptionsTestimonials = reactive({
  heading: blok.testimonials_heading,
  headingClass: "h3 text-center",
});

// const storyblokApi = useStoryblokApi();
// const {
//   data: { stories: persons },
// } = await storyblokApi.get("cdn/stories", {
//   version: "draft",
//   starts_with: `${blok.about_research_team.cached_url}team`,
// });
</script>

<template>
  <format-section
    v-editable="blok"
    class="color-scheme color-scheme--primary"
    :options="sectionOptionsHero"
  >
    <div class="hero__image">
      <format-image
        :image="blok.background_image"
        class="hero__background-image absolute inset-0"
      />
      <div
        class="hero__image-overlay after:absolute after:inset-0 after:bg-primary after:bg-opacity-70"
      ></div>
    </div>

    <div
      class="hero__content container--background container absolute top-1/2 left-1/2 z-10 my-0 -translate-x-1/2 -translate-y-1/2 text-center text-white"
    >
      <h1 class="hero__title col-span-4 lg:col-span-12">{{ blok.title || story.name }}</h1>
      <p class="hero__subtitle col-span-4 lg:col-span-8 lg:col-start-3" v-if="blok.intro">
        {{ blok.intro }}
      </p>

      <badges
        :tag-list="story.tag_list"
        class="col-span-4 justify-center lg:col-span-10 lg:col-start-2"
      />
    </div>
  </format-section>

  <format-section :options="sectionOptionsAbout">
    <image-swiper :images="blok.about_images" />
    <format-rich-text :text="blok.about_text_2" class="grid" />
  </format-section>

  <format-section :options="sectionOptionsResearch" v-if="blok.research_images.length > 0">
    <image-swiper :images="blok.research_images" />
  </format-section>

  <template v-if="blok.extra_rows.length > 0">
    <format-section
      v-for="(row, index) in blok.extra_rows"
      :key="index"
      :options="{ heading: row.heading }"
    >
      <StoryblokComponent :blok="row" />
    </format-section>
  </template>

  <format-section v-editable="blok" :options="sectionOptionsTestimonials">
    <section-testimonials :blok="blok" />
  </format-section>
</template>
