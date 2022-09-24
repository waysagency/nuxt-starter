<template>
  <ul class="badges flex list-none p-0">
    <li class="badge" v-for="(tag, index) in tagList" :key="index">
      {{ tag }}
    </li>
  </ul>
</template>

<script setup>
defineProps({ tagList: Object });
</script>
