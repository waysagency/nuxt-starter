<template>
  <nuxt-link v-if="link" :to="link" :target="target">
    <slot />
  </nuxt-link>
</template>

<script setup>
const props = defineProps({ link: Object || String });
let link = ref("");
let target = ref("_blank");

if (typeof props.link === "string") {
  link.value = props.link;
  target.value = "_blank";
} else {
  switch (props.link.linktype) {
    case "asset":
      link.value = cached_url;
      break;

    case "email":
      link.value = `mailto:${props.link.email}`;
      target.value = "_self";
      break;

    case "story":
      link.value = props.link.cached_url.includes("home") ? "/" : `/${props.link.cached_url}`;
      target.value = "_self";
      break;

    case "url":
      link.value = !props.link.cached_url.includes("http")
        ? `http://${props.link.cached_url}`
        : props.link.cached_url;
      break;
  }
}
</script>
