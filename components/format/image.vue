<template>
  <nuxt-picture
    :imgAttrs="{ title: title, alt: alt }"
    :width="width"
    :height="height"
    :src="image.filename"
    :modifiers="{ smart: true }"
    :sizes="sizes"
    v-if="image && image.filename"
    provider="storyblok"
  />
</template>

<script setup>
const { image, width, height } = defineProps({
  width: [Number, String],
  height: [Number, String],
  image: Object,
  sizes: String,
});

const title = computed(() => {
  return image.title ? image.title : image.alt ? image.alt : undefined;
});

const alt = computed(() => {
  return image.alt ? image.alt : image.title ? image.title : undefined;
});
</script>
