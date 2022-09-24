<template>
  <nuxt-link
    class="project-card relative aspect-square p-4 text-white no-underline"
    :to="`/${project.full_slug}`"
  >
    <format-image
      :image="project.content.hero_background_image"
      class="project-card__image absolute inset-0 after:absolute after:inset-0 after:bg-primary after:bg-opacity-80"
    />

    <div class="project-card__content relative z-10 flex h-full w-full flex-col">
      <h3 class="project-card__heading h5 mt-auto text-center">{{ project.name }}</h3>
      <badges :tag-list="project.tag_list" class="project-card__badges mt-auto" />
    </div>
  </nuxt-link>
</template>

<script setup>
const { project } = defineProps({ project: Object });
</script>
