<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  containerClass: blok.reduce_container_spacing,
});
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <div class="flex flex-row justify-center">
      <StoryblokComponent v-for="blok in blok.images" :key="blok._uid" :blok="blok" />
    </div>
  </format-section>
</template>
