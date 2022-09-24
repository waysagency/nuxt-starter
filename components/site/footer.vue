<template>
  <footer class="color-scheme color-scheme--primary">
    <div
      class="container--block container--background container gap-y-8 space-y-0 py-6"
    >
      <!-- Logo -->
      <div class="col-span-4 lg:col-span-12">
        <nuxt-link to="/" class="inline-block">
          <hhs-logo />
        </nuxt-link>
      </div>

      <!-- Brand info -->
      <div class="col-span-4 lg:col-span-4">
        <p class="h5 mb-4">The Hague AI & Data Science</p>
        <p class="">
          We are the Heart of AI & Data Science in the Hague! Tortor, malesuada
          laoreet hendrerit sed.
        </p>
      </div>

      <!-- Main menu -->
      <div
        class="col-span-4 sm:col-span-2 lg:col-span-2 lg:col-start-7 lg:row-span-2"
      >
        <nav>
          <ul class="list-none space-y-2 p-0">
            <li v-for="(item, index) in mainMenu" :key="index">
              <format-link
                :link="item.link"
                class="inline-block text-white no-underline states:text-accent"
              >
                {{ item.label }}
              </format-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Footer menu -->
      <div
        class="col-span-4 sm:col-span-2 lg:col-span-2 lg:col-start-11 lg:row-span-2"
      >
        <nav>
          <ul class="list-none space-y-2 p-0">
            <li v-for="(item, index) in footerMenu" :key="index">
              <format-link
                :link="item.link"
                class="inline-block text-white no-underline states:text-accent"
              >
                {{ item.label }}
              </format-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Contact info -->
      <div class="col-span-4">
        <ul
          class="flex list-none flex-col gap-y-2.5 p-0"
          v-if="contact_email || contact_phone"
        >
          <template v-for="(item, index) in contact" :key="index">
            <li class="group" :class="item.link" v-if="item.link">
              <nuxt-link
                :to="item.link"
                class="flex items-center gap-2 text-white no-underline states:text-accent"
              >
                <div
                  class="flex h-9 w-9 items-center justify-center bg-primary-5 text-primary group-odd:clip-path-polygon-2 group-even:clip-path-polygon-1 group-states:bg-accent"
                >
                  <font-awesome-icon :icon="`fa-solid ${item.icon}`" />
                </div>
                {{ item.label }}
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>

      <!-- Copyright and socials -->
      <div
        class="col-span-4 flex flex-col-reverse justify-between space-y-8 space-y-reverse sm:flex-row sm:items-center sm:space-y-0 lg:col-span-12"
      >
        <span> ©️ Copyright The Hague AI & Data Lab </span>

        <ul
          class="flex list-none gap-x-2.5 p-0"
          v-if="twitter || facebook || linkedin || instagram"
        >
          <template v-for="(social, index) in socials" :key="index">
            <li class="group" v-if="social.link">
              <nuxt-link
                :to="social.link"
                target="_blank"
                class="flex h-9 w-9 items-center justify-center bg-primary-5 text-primary group-odd:clip-path-polygon-2 group-even:clip-path-polygon-1 states:bg-accent"
              >
                <font-awesome-icon
                  :icon="`fa-brands ${social.icon}`"
                  size="lg"
                />
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const storyblokApi = useStoryblokApi();
const {
  data: {
    story: {
      content: {
        main_menu,
        footer_menu,
        twitter,
        facebook,
        linkedin,
        instagram,
        contact_email,
        contact_phone,
      },
    },
  },
} = await storyblokApi.get("cdn/stories/settings", {
  version: "draft",
});

// Main menu
const mainMenu = ref(null);
mainMenu.value = main_menu;

// Footer menu
const footerMenu = ref(null);
footerMenu.value = footer_menu;

// Socials
const socials = ref([
  {
    link: twitter,
    icon: "fa-twitter",
  },
  {
    link: facebook,
    icon: "fa-facebook-f",
  },
  {
    link: linkedin,
    icon: "fa-linkedin-in",
  },
  {
    link: instagram,
    icon: "fa-instagram",
  },
]);

// Contact
const contact = ref([
  {
    label: contact_email,
    link: `mailto:${contact_email}`,
    icon: "fa-at",
  },
  {
    label: contact_phone,
    link: `tel:${contact_phone}`,
    icon: "fa-phone",
  },
]);
</script>
