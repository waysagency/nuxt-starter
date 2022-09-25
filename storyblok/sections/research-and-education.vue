<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
  intro: blok.text,
  buttonLabel: blok.button_label,
  buttonLink: blok.button_link,
});
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <StoryblokComponent v-for="blok in blok.rows" :key="blok._uid" :blok="blok" />
  </format-section>
</template>
