<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok" class="aspect-[4/3]">
    <format-image v-editable="blok" :image="blok.image" />
  </div>
</template>
