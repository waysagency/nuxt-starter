<template>
  <div class="flex flex-col items-end space-y-4">
    <div
      class="rte"
      :class="[enableTwoTextColumns, horizontalList]"
      v-html="articleContent"
    ></div>

    <format-link
      :link="blok.button_link"
      :class="blok.button_type"
      class="items-center gap-4"
      v-if="buttonExist"
    >
      {{ blok.button_label }}

      <font-awesome-icon
        icon="fa-solid fa-chevron-right"
        v-if="blok.button_chevron"
      />
    </format-link>
  </div>
</template>

<script setup>
const { blok } = defineProps({ blok: Object });

const articleContent = computed(() => renderRichText(blok.text));
const enableTwoTextColumns = computed(() =>
  blok.enable_two_text_columns ? "md:columns-2" : undefined
);
const horizontalList = computed(() =>
  blok.horizontal_list ? "rte--horizontal-list" : undefined
);

const buttonExist = computed(() =>
  blok.button_label && blok.button_link && blok.button_link.cached_url
    ? true
    : false
);
</script>
