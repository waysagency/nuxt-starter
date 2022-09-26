<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
  headingClass: [blok.heading_size, blok.heading_alignment],
  buttonLabel: blok.button_label,
  buttonLink: blok.button_link,
});
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions" />
</template>
