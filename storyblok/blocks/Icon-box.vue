<template>
  <div class="flex flex-row gap-x-10">
    <global-icon :icon="blok.icon" size="xl" />
    <div class="flex-1 space-y-2">
      <h3 v-if="blok.heading" class="h6">{{ blok.heading }}</h3>
      <p v-if="blok.text" class="text-sm">{{ blok.text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
