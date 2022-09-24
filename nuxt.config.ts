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
    // https://v1.image.nuxtjs.org/
    "@nuxt/image-edge",
  ],

  storyblok: {
    accessToken: "mKwjuAbZCYZrCyrrQoutzgtt",
    useApiClient: true,
  },

  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },

  image: {
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },
});
