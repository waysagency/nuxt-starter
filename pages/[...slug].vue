<script setup>
let { slug } = useRoute().params;
const path = slug ? slug.join("/") : "home";
const story = await useStoryblok(path, { version: "draft" });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
