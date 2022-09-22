// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  modules: [
    // https://github.com/storyblok/storyblok-nuxt
    "@storyblok/nuxt",
    // https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",
  ],

  storyblok: {
    accessToken: "mKwjuAbZCYZrCyrrQoutzgtt",
  },

  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },
});
