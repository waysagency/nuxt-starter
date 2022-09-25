<script setup>
const { story, blok } = defineProps({ story: Object, blok: Object });
const backgroundShape = computed(() =>
  blok.background_shape
    ? "lg:py-16 lg:before:absolute lg:before:inset-0 lg:before:inset-x-16 lg:before:-z-10 lg:before:mx-auto lg:before:max-w-screen-2xl lg:before:bg-primary-5"
    : false
);

const sectionOptions = reactive({
  heading: blok.heading,
  containerClass: backgroundShape,
  buttonLabel: blok.button_label,
  buttonLink: blok.button_link,
});
</script>

<style lang="scss" scoped>
.container {
  &::before {
    clip-path: polygon(0 0, 100% 22px, calc(100% - 37px) calc(100% - 22px), 37px 100%);
  }
}
</style>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <div class="grid">
      <format-rich-text
        :text="blok.text"
        class="col-span-4 lg:col-span-10 lg:col-start-2 lg:columns-2"
      />
    </div>
  </format-section>
</template>
