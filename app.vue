<script setup>
const story = await useAsyncStoryblok("/home", { version: "draft" });
console.log(story.value);
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
