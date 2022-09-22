<script setup>
let { slug } = useRoute().params;
if (slug) {
  slug = slug.join("/");
}

let story = false;
try {
  story = await useAsyncStoryblok(slug ? slug : "home", { version: "draft" });
} catch (error) {
  story = false;
  console.log(error);
}
</script>

<template>
  <div>
    {{ slug }}
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
