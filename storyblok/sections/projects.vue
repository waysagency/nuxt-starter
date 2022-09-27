<script setup>
const { blok } = defineProps({ blok: Object });
const with_tag = ref("");
if (blok.tags_to_show) {
  with_tag.value = blok.tags_to_show?.replace(", ", ",");
}

const storyblokApi = useStoryblokApi();
const {
  data: { tags },
} = await storyblokApi.get(`cdn/tags/`, {
  version: "draft",
  starts_with: "projects",
});

const tagsArr = computed(() => {
  if (blok.tags_to_show) {
    return blok.tags_to_show.split(",").map((tag) => tag.trim());
  } else {
    return tags.map(({ name }) => name);
  }
});

// Get projects
const {
  data: { stories },
} = await storyblokApi.get(`cdn/stories/`, {
  version: "draft",
  starts_with: "projects",
  with_tag: with_tag.value,
});
const projects = ref(stories);

const handleActiveTagState = (event) => {
  const { currentTarget } = event;
  const tagEls = document.querySelectorAll(".tag");
  tagEls.forEach((element) => {
    element.classList.replace("btn--primary", "btn--primary-5");
    element.classList.remove("tag--active");
  });

  currentTarget.classList.replace("btn--primary-5", "btn--primary");
  currentTarget.classList.add("tag--active");
};

const getFilteredProjects = async (event, tag) => {
  handleActiveTagState(event);

  const {
    data: { stories },
  } = await storyblokApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "projects",
    with_tag: tag,
  });
  projects.value = stories;
};

const showAllProjects = async () => {
  handleActiveTagState(event);
  projects.value = stories;
};

const sectionOptions = reactive({
  heading: blok.heading,
});
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

<template>
  <format-section :options="sectionOptions" v-editable="blok">
    <div v-if="stories.length > 0" class="grid space-y-12">
      <project-tags
        v-if="tagsArr.length > 1"
        :tags="tagsArr"
        :all-label="blok.show_all_label"
        :filter-event="getFilteredProjects"
        :show-all-event="showAllProjects"
        class="col-span-4 lg:col-span-10 lg:col-start-2"
      />

      <TransitionGroup
        name="list"
        tag="div"
        class="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:col-span-12"
      >
        <project-card v-for="(project, index) in projects" :key="index" :project="project" />
      </TransitionGroup>
    </div>
    <div v-else>
      <h3 class="text-center">
        {{ blok.no_projects_found_label }}
      </h3>
    </div>
  </format-section>
</template>
