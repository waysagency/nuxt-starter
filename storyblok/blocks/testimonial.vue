<template>
  <div class="flex flex-col bg-primary-5 p-4 md:p-6">
    <div class="flex">
      <div class="flex-1 space-y-2">
        <h3 class="h5" v-if="blok.name">
          {{ blok.name }}
        </h3>

        <p class="text-lg md:text-xl" v-if="blok.function">
          {{ blok.function }}
        </p>
      </div>

      <div class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white">
        <format-image
          class="h-full w-full"
          :image="blok.avatar"
          width="64"
          height="64"
          v-if="blok.avatar && blok.avatar.filename"
        />
        <font-awesome-icon v-else icon="fa-solid fa-user text-primary-5" size="lg" />
      </div>
    </div>

    <p class="text-lg md:text-xl" v-if="blok.text">
      {{ blok.text }}
    </p>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
