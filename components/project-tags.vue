<template>
  <div class="tags flex flex-wrap gap-4">
    <button class="btn btn--primary-5 tag" @click="showAllEvent">{{ allLabel }}</button>
    <button
      v-for="(tag, index) in tags"
      :key="index"
      class="btn btn--primary-5 tag"
      @click="(event) => filterEvent(event, tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup>
const { tags, filterEvent, showAllEvent } = defineProps({
  tags: Object,
  allLabel: String,
  filterEvent: Function,
  showAllEvent: Function,
});
</script>
