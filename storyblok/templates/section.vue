<template>
  <div>
    <h1>{{ blok.heading }}</h1>
    <div v-html="articleContent"></div>
    <button :class="`btn ${blok.button_type}`">{{ blok.button_label }}</button>
    <pre>
      {{ blok }}
    </pre>
  </div>
</template>

<script setup>
const { blok } = defineProps({ blok: Object });

const articleContent = computed(() => renderRichText(blok.intro));
</script>
