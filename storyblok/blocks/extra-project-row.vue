<script setup>
defineProps({ blok: Object });
</script>

<template>
  <format-rich-text v-editable="blok" :text="blok.text" class="grid" />
</template>
