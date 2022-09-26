<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="aspect-[4/3] w-1/4">
    <format-image v-editable="blok" :image="blok.image" />
  </div>
</template>
