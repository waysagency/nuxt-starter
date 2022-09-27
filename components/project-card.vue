<template>
  <nuxt-link
    class="project-card group relative aspect-square overflow-hidden p-4 text-white no-underline"
    :to="`/${project.full_slug}`"
  >
    <format-image
      :image="project.content.background_image"
      class="project-card__image absolute inset-0 transition-transform duration-1000 after:absolute after:inset-0 after:bg-primary after:bg-opacity-80 group-states:scale-110"
    />

    <div class="project-card__content relative z-10 flex h-full w-full flex-col">
      <h3 class="project-card__heading h5 mt-auto text-center">{{ project.name }}</h3>
      <badges :tag-list="project.tag_list" class="project-card__badges mt-auto" />
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({ project: Object });
</script>
