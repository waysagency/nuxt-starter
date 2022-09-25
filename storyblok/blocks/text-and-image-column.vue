<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok" class="text-and-image-column grid items-center lg:grid-cols-10">
    <div
      class="text-and-image-column__image col-span-4 aspect-[4/3] aspect-[4/3] sm:col-span-3"
      :class="{ 'lg:order-1': blok.switch_columns }"
    >
      <format-image :image="blok.image" />
    </div>

    <div class="text-and-image-column__text col-span-4 flex h-full flex-col lg:col-span-6">
      <h3 class="h4">{{ blok.heading }}</h3>

      <format-rich-text :text="blok.text" />

      <format-link
        :link="blok.button_link"
        class="btn btn--link mt-auto self-end"
        v-if="blok.button_link?.cached_url"
      >
        {{ blok.button_label }}
      </format-link>
    </div>
  </div>
</template>
