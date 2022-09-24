<template>
  <div class="personal flex flex-col gap-4">
    <format-image
      :image="person.image"
      sizes="md:50vw lg:342px xl:448px xxl:515px"
      class="personal__image aspect-square"
    />

    <div class="personal__meta">
      <h3 class="personal__name text-lg">{{ person.name }}</h3>
      <p class="personal__title text-lg">{{ person.title }}</p>
    </div>

    <div class="personal__socials flex gap-4">
      <nuxt-link
        :to="person.linkedin"
        v-if="person.linkedin"
        class="text-primary states:text-accent"
      >
        <font-awesome-icon icon="fa-brands fa-linkedin" />
      </nuxt-link>
      <nuxt-link
        :to="`mailto:${person.email}`"
        v-if="person.email"
        class="text-primary states:text-accent"
      >
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { person } = defineProps({ person: Object });
</script>
