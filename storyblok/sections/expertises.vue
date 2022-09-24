<script setup>
const { story, blok } = defineProps({ story: Object, blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
  intro: blok.text,
});

const storyblokApi = useStoryblokApi();
const {
  data: { stories },
} = await storyblokApi.get("cdn/stories/", {
  version: "draft",
  starts_with: "expertises",
  excluding_slugs: "expertises/",
  is_startpage: true,
});

console.log(stories);
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <div class="flex">
      <nuxt-link
        v-for="(story, index) in stories"
        :key="index"
        :class="`expertise expertise--${index}`"
        class="flex-1"
        :to="`/${story.full_slug}`"
      >
        <h3>
          {{ story.content.short_title }}
        </h3>
      </nuxt-link>
    </div>
  </format-section>
</template>
