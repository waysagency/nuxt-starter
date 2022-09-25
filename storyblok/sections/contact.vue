<script setup>
const { blok } = defineProps({ blok: Object });

const sectionOptions = reactive({
  heading: blok.heading,
});

const storyblokApi = useStoryblokApi();
const {
  data: {
    story: {
      content: {
        twitter,
        facebook,
        instagram,
        linkedin,
        contact_email,
        contact_phone,
        contact_location,
      },
    },
  },
} = await storyblokApi.get("cdn/stories/settings", {
  version: "draft",
});

const location = computed(() => renderRichText(contact_location));
const contact = ref([
  {
    label: contact_email,
    icon: "fa-at",
  },
  {
    label: contact_phone,
    icon: "fa-phone",
  },
  {
    label: location.value,
    icon: "fa-location-dot",
  },
]);

const socials = ref([
  {
    label: twitter,
    icon: "fa-twitter",
  },
  {
    label: facebook,
    icon: "fa-facebook-f",
  },
  {
    label: instagram,
    icon: "fa-instagram",
  },
  {
    label: linkedin,
    icon: "fa-linkedin-in",
  },
]);

const formData = reactive({
  from_name: "",
  from_email: "",
  msg_subject: "",
  msg_body: "",
});

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function handleSubmit() {
  // Must post to a path not handled by the SSR.
  // Path must exist
  fetch("/contactform", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encode({
      "form-name": "contact-form",
      ...formData,
    }),
  })
    .then(() => alert("Success!"))
    .catch((err) => alert("Error: %s", err))
    .finally(() => {
      console.log("formData: %s", JSON.stringify(formData));
    });
}
</script>

<template>
  <format-section v-editable="blok" :options="sectionOptions">
    <div class="flex">
      <template v-for="(item, index) in contact" :key="index">
        <div
          class="col-span-12 flex flex-1 items-center justify-center gap-4 md:col-span-4"
          v-if="item.label"
        >
          <div
            class="flex h-9 w-9 items-center justify-center bg-primary text-white clip-path-polygon-2"
          >
            <font-awesome-icon :icon="`fa-solid ${item.icon}`" />
          </div>

          <div class="rte" v-if="item.icon === 'fa-location-dot'" v-html="location"></div>
          <span v-else>
            {{ item.label }}
          </span>
        </div>
      </template>
    </div>

    <div class="col-span-4 grid md:col-span-12">
      <h3 class="h5 col-span-4 lg:col-span-6 lg:col-start-4" v-if="blok.form_heading">
        {{ blok.form_heading }}
      </h3>

      <form
        name="contact-form"
        class="col-span-4 grid grid-cols-2 lg:col-span-6 lg:col-start-4"
        @submit.prevent="handleSubmit()"
      >
        <input
          v-model="formData.from_name"
          type="text"
          name="from_name"
          placeholder="Your Name"
          class="col-span-2 md:col-span-1"
          required
        />
        <input
          v-model="formData.from_email"
          type="email"
          name="from_email"
          placeholder="Your e-mail"
          class="col-span-2 md:col-span-1"
          required
        />
        <textarea
          v-model="formData.msg_body"
          name="msg_body"
          rows="12"
          placeholder="How can we help you? Describe your (dream) project"
          class="col-span-2"
          required
        ></textarea>
        <button type="submit" class="btn btn--primary col-span-2">Send</button>
      </form>
    </div>

    <div class="flex flex-col">
      <h3 class="h4 text-center" v-if="blok.social_heading">
        {{ blok.social_heading }}
      </h3>

      <div class="flex justify-center gap-x-12">
        <template v-for="(item, index) in socials" :key="index">
          <nuxt-link
            :to="item.label"
            target="_blank"
            v-if="item.label"
            class="text-primary states:text-accent"
          >
            <div>
              <font-awesome-icon :icon="`fa-brands ${item.icon}`" size="2xl" />
            </div>
          </nuxt-link>
        </template>
      </div>
    </div>
  </format-section>
</template>
