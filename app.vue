<script setup>
const story = await useAsyncStoryblok("/home", { version: "draft" });
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
