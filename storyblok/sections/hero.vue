<script setup>
const { story, blok } = defineProps({ story: Object, blok: Object });
</script>
<template>
  <div>{{ story.name }}</div>
</template>
