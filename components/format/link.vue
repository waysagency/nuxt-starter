<template>
  <nuxt-link :to="link" :target="target">
    <slot />
  </nuxt-link>
</template>

<script setup>
const props = defineProps({ link: Object || String });
const { email, linktype, cached_url } = props.link;
let link = ref("");
let target = ref("");

if (typeof props.link === "string") {
  link.value = props.link;
  target.value = "_blank";
} else {
  switch (linktype) {
    case "asset":
      link.value = cached_url;
      target.value = "_blank";
      break;

    case "email":
      link.value = `mailto:${email}`;
      target.value = "_self";
      break;

    case "story":
      link.value = cached_url.includes("home") ? "/" : `/${cached_url}`;
      target.value = "_self";
      break;

    case "url":
      link.value = !cached_url.includes("http") ? `http://${cached_url}` : cached_url;
      target.value = "_blank";
      break;
  }
}
</script>
