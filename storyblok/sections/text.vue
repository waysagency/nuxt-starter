<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
  intro: blok.text,
});
</script>

<template>
  <format-section :options="sectionOptions" />
</template>
