<script setup>
const { story, blok } = defineProps({ story: Object, blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
  intro: blok.text,
  buttonLabel: blok.button_label,
  buttonLink: blok.button_link,
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
</script>

<style lang="scss" scoped>
.expertise {
  &:nth-of-type(odd) {
    clip-path: polygon(0 5%, 100% 0, 95% 100%, 5% 95%);
  }
  &:nth-of-type(even) {
    clip-path: polygon(5% 0%, 95% 5%, 100% 95%, 0% 100%);
  }
}
</style>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <div class="flex flex-col sm:flex-row">
      <nuxt-link
        v-for="(story, index) in stories"
        :key="index"
        class="expertise color-scheme color-scheme--primary flex aspect-video flex-1 items-center justify-center bg-primary p-4 text-center no-underline sm:aspect-square"
        :to="`/${story.full_slug}`"
      >
        <h3>
          {{ story.content.short_title }}
        </h3>
      </nuxt-link>
    </div>
  </format-section>
</template>
