<template>
  <div v-editable="blok" class="p-6">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" :story="story" />
  </div>
</template>

<script setup>
const { story, blok } = defineProps({ story: Object, blok: Object });
</script>
