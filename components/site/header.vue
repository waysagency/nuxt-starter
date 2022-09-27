<template>
  <header class="sticky inset-x-0 top-0 z-30">
    <div class="h-[55px] bg-white py-3.5 shadow-md shadow-primary/10 lg:p-0">
      <div class="container my-0 flex items-center justify-between space-y-0">
        <site-logo />

        <div class="hamburger lg:hidden">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            class="cursor-pointer transition-colors states:text-accent"
            @click="toggleMobileMenu"
          />
        </div>

        <nav class="nav--desktop hidden lg:block">
          <ul class="flex list-none items-center p-0">
            <li v-for="(item, index) in mainMenu" :key="index">
              <format-link
                :link="item.link"
                class="inline-block py-[19.5px] px-4 text-base uppercase leading-none text-primary-alpha-40 no-underline states:text-accent"
              >
                {{ item.label }}
              </format-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="nav-backdrop fixed inset-0 z-40 bg-black/50 transition"
      :class="mobileMenuActive ? 'visible opacity-100' : 'invisible opacity-0'"
      @click="toggleMobileMenu"
    ></div>

    <div
      class="nav--mobile fixed inset-y-0 left-0 z-50 w-80 bg-primary transition-transform lg:hidden"
      :class="mobileMenuActive ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex items-center justify-between p-4 text-white">
        <div class="site-logo">DataLAB</div>
        <div class="cursor-pointer transition-colors states:text-accent" @click="toggleMobileMenu">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
      </div>
      <nav class="">
        <ul class="flex list-none flex-col p-0">
          <li v-for="(item, index) in mainMenu" :key="index">
            <format-link
              :link="item.link"
              class="block p-4 leading-none text-primary-alpha-40 no-underline states:text-accent"
            >
              {{ item.label }}
            </format-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const storyblokApi = useStoryblokApi();
const {
  data: {
    story: {
      content: { main_menu },
    },
  },
} = await storyblokApi.get("cdn/stories/settings", {
  version: "draft",
});

// Main menu
const mainMenu = ref(null);
mainMenu.value = main_menu;

const mobileMenuActive = ref(false);

const toggleMobileMenu = () => {
  mobileMenuActive.value = !mobileMenuActive.value;
};
</script>
