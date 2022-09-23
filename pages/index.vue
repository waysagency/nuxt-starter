<script setup>
const story = await useStoryblok("home", { version: "draft" });
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <nuxt-link to="/about-us" class="btn btn--primary">About us</nuxt-link>
  </div>
</template>
