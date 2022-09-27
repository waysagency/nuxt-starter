<template>
  <div>
    <site-header />
    <main>
      <slot />
    </main>
    <site-footer />
  </div>
</template>

<!-- <script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
</script> -->
