<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  containerClass: blok.reduce_container_spacing,
});
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <div class="flex flex-wrap justify-center">
      <StoryblokComponent
        v-for="blok in blok.images"
        :key="blok._uid"
        :blok="blok"
        class="flex-1 basis-full sm:basis-[48%] lg:basis-[23%]"
      />
    </div>
  </format-section>
</template>
