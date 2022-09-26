<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  containerClass: blok.reduce_container_spacing,
  heading: blok.heading,
  headingClass: [blok.heading_size, blok.heading_alignment],
  buttonLabel: blok.button_label,
  buttonLink: blok.button_link,
  buttonType: blok.button_type,
  footerClass: blok.button_alignment,
});
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions" />
</template>
