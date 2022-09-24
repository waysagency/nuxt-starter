<script setup>
const { text } = defineProps({ text: Object });

const richText = computed(() => renderRichText(text));
</script>

<template>
  <div v-html="richText" class="rte"></div>
</template>
