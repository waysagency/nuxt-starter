<script setup>
const { story, blok } = defineProps({ story: Object, blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
});
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <div class="grid space-y-10">
      <StoryblokComponent
        v-for="blok in blok.blocks"
        :key="blok._uid"
        :blok="blok"
        class="col-span-4 lg:col-span-10 lg:col-start-2"
      />
    </div>
  </format-section>
</template>
