<script setup>
const { options } = defineProps({ options: Object });
const slots = useSlots();

// const sectionComponent = computed(() => {
//   return blok?.component ? `component--${blok.component}` : false;
// });

// const articleContent = ref("");
// if (blok?.intro) {
//   if (typeof blok?.intro === "object") {
//     articleContent.value = renderRichText(blok?.intro);
//   } else {
//     articleContent.value = blok?.intro;
//   }
// }

// const columnWidth = computed(() => {
//   switch (blok?.column_width) {
//     case "2":
//       return "lg:col-start-6 lg:col-span-2";
//     case "4":
//       return "lg:col-start-5 lg:col-span-4";
//     case "6":
//       return "lg:col-start-4 lg:col-span-6";
//     case "8":
//       return "lg:col-start-3 lg:col-span-8";
//     case "10":
//       return "lg:col-start-2 lg:col-span-10";
//   }
// });

// const backgroundShape = computed(() => {
//   if (blok?.enable_background_shape) {
//     return "lg:py-16 lg:before:absolute lg:before:inset-0 lg:before:inset-x-16 lg:before:-z-10 lg:before:mx-auto lg:before:max-w-screen-2xl lg:before:bg-primary-5";
//   }
// });
</script>

<template>
  <section>
    <div class="container" :class="options.containerClass">
      <div class="container__heading" v-if="options.heading">
        <h2 v-if="options.heading">{{ options.heading }}</h2>
      </div>

      <div class="container__intro" v-if="options.intro">
        <format-rich-text :text="options.intro" />
      </div>

      <div class="container__main" :class="options.containerMainClass" v-if="slots.default">
        <slot />
      </div>

      <!-- <div class="container__footer"></div> -->
    </div>
  </section>
  <!-- <section :class="sectionComponent">
    <div class="container" :class="[blok?.containerClass, backgroundShape]">
      <h2
        class="container__heading"
        :class="[blok?.heading_class, blok?.button_alignment]"
        v-if="blok?.heading"
      >
        {{ blok?.heading }}
      </h2>

      <div
        class="container__summary rte"
        v-html="articleContent"
        v-if="articleContent && articleContent != '<p></p>'"
      ></div>

      <div
        class="container__main"
        :class="columnWidth"
        v-if="blok?.content?.length > 0 || slots.default"
      >
        <StoryblokComponent v-for="content in blok?.content" :key="content._uid" :blok="content" />
        <slot />
      </div>

      <footer
        class="container__footer"
        :class="blok?.button_alignment"
        v-if="blok?.button_link && blok?.button_label"
      >
        <format-link
          :link="blok?.button_link"
          :class="blok?.button_type"
          class="items-center gap-4"
        >
          {{ blok?.button_label }}

          <font-awesome-icon icon="fa-solid fa-chevron-right" v-if="blok?.button_chevron" />
        </format-link>
      </footer>
    </div>
  </section> -->
</template>

<style lang="scss" scoped>
.container {
  &::before {
    clip-path: polygon(0 0, 100% 22px, calc(100% - 37px) calc(100% - 22px), 37px 100%);
  }
}
</style>
