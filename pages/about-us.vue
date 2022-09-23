<script setup>
const story = await useStoryblok("about-us", { version: "draft" });
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <nuxt-link to="/" class="btn btn--primary">Home</nuxt-link>
  </div>
</template>
