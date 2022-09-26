<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  containerClass: blok.reduce_container_spacing,
  heading: blok.heading,
  intro: blok.text,
});
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions" />
</template>
