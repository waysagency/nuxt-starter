<script setup>
const { options } = defineProps({ options: Object });
const slots = useSlots();
</script>

<template>
  <section>
    <div class="container" :class="options.containerClass">
      <div class="container__heading" v-if="options.heading">
        <h2 v-if="options.heading" :class="options.headingClass">{{ options.heading }}</h2>
      </div>

      <div class="container__intro" v-if="options.intro">
        <format-rich-text :text="options.intro" :class="options.introClass" class="grid" />
      </div>

      <div class="container__main" :class="options.containerMainClass" v-if="slots.default">
        <slot />
      </div>

      <div
        class="container__footer"
        :class="options.footerClass"
        v-if="options.buttonLink && options.buttonLabel"
      >
        <format-link
          :link="options.buttonLink"
          class="btn"
          :class="options.buttonType ? options.buttonType : 'btn--link'"
        >
          {{ options.buttonLabel }}
        </format-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  &::before {
    clip-path: polygon(0 0, 100% 22px, calc(100% - 37px) calc(100% - 22px), 37px 100%);
  }
}
</style>
