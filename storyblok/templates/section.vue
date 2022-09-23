<template>
  <div v-editable="blok">
    <h1>{{ blok.heading }}</h1>
    <div v-html="articleContent"></div>
    <nuxt-link :to="`/${blok.button_link?.cached_url}`" :class="`btn ${blok.button_type}`">
      {{ blok.button_label }}
    </nuxt-link>

    <StoryblokComponent v-for="blok in blok.content" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
const { blok } = defineProps({ blok: Object });
const articleContent = computed(() => renderRichText(blok.intro));
</script>
