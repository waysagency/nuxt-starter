<script setup>
defineProps({ blok: Object });
</script>

<template>
  <format-section v-editable="blok">
    <div class="grid grid-cols-4 gap-y-12 md:grid-cols-12">
      <StoryblokComponent
        v-for="blok in blok.boxes"
        :key="blok._uid"
        :blok="blok"
        class="col-span-4 md:col-span-5 even:md:col-start-8 lg:col-span-4 lg:col-start-2 even:lg:col-start-8"
      />
    </div>
  </format-section>
</template>
