<script setup>
defineProps({ story: Object, blok: Object });

const sectionOptions = reactive({
  containerClass: "w-full my-0 h-[500px]",
  containerMainClass: "space-y-0 flex items-center",
});
</script>

<template>
  <format-section
    v-editable="blok"
    class="color-scheme color-scheme--primary"
    :options="sectionOptions"
  >
    <!-- hero__image absolute inset-0 block after:absolute after:inset-0 after:bg-primary after:bg-opacity-80 md:left-auto md:w-10/12 lg:w-8/12 2xl:w-5/12 2xl:after:content-none -->
    <div
      class="hero__image absolute inset-y-0 right-0 w-full after:absolute after:inset-0 after:bg-primary after:bg-opacity-80 lg:w-[37.5%] lg:after:content-none"
    >
      <format-image :image="blok.background_image" />
    </div>

    <div class="hero__content relative z-10 space-y-10 lg:max-w-[60%]">
      <h1 v-if="blok.title || story.name">
        {{ blok.title || story.name }}
      </h1>

      <p v-if="blok.text">
        {{ blok.text }}
      </p>

      <format-link
        :link="blok.button_link"
        class="btn"
        :class="blok.button_type"
        v-if="blok.button_label && blok.button_link"
      >
        {{ blok.button_label }}
      </format-link>
    </div>
  </format-section>
</template>

<!-- <template>
  <div>
    <section
      v-editable="blok"
      :id="`section--${blok._uid}`"
      :class="`component--${blok.component}`"
      class="color-scheme color-scheme--primary"
    >
      <div class="container--block container--background container">
        <div class="container__main space-y-0">
          <div
            class="hero__content relative z-10 space-y-6 text-center md:w-10/12 md:space-y-12 md:text-left lg:w-7/12"
          >
            <h1 class="hero__heading" v-if="blok.heading || story.name">
              {{ blok.heading || story.name }}
            </h1>

            <p class="hero__text text-lg md:text-xl" v-if="blok.text">
              {{ blok.text }}
            </p>

            <format-link
              class="hero__button items-center gap-4"
              :link="blok.button_link"
              :class="blok.button_type"
              v-if="blok.button_label"
            >
              {{ blok.button_label }}
            </format-link>
          </div>

          <format-image
            :image="blok.image"
            class="hero__image absolute inset-0 block after:absolute after:inset-0 after:bg-primary after:bg-opacity-80 md:left-auto md:w-10/12 lg:w-8/12 2xl:w-5/12 2xl:after:content-none"
          />
        </div>
      </div>
    </section>
  </div>
</template> -->

<style scoped lang="scss">
.hero__image {
  @screen lg {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
  }
}
</style>
