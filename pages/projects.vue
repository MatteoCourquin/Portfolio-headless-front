<template>
  <div class="container-projects">
    <div class="wrapper-projects">
      <div class="wrapper-filter">
        <button class="button" @click="filterProjects('all')">Reset</button>
        <button class="button" v-for="(type, index) in types" :key="index" @click="filterProjects(type)">{{ type
        }}</button>
      </div>
      <div v-if="filteredProjects.length === 0">
        <h3>Aucun projet réalisé en <span class="active-techno">{{ activeFilter }}</span> pour le moment !</h3>
      </div>
      <div class="card-project" v-for="(project, index) in filteredProjects" :key="index">
        <div class="description-project">
          <div class="wrapper-title-techno">
            <h2>{{ project.title }}</h2>
            <div v-if="project.technologies" class="wrapper-techno-project">
              <img v-for="technologie in project.technologies" :key="technologie.id" :src="technologie.logo.url" alt="">
            </div>
          </div>
          <div class="description" v-html="$mdRenderer.render(project.description)"></div>
          <div class="link-container">
            <a target="_blank" :href="project.project_url">Voir le projet </a>
            <div class="line"></div>
          </div>
        </div>
        <div class="mockup-container">
          <nuxt-link :to="`/project/${project.slug}`">
            <img src="/images/mac-container.png" alt="" class="mac-container">
            <img :src="project.image_url.formats.large.url" :alt="project.image_url.alternativeText" class="website">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { find } = useStrapi()
const { data: projects } = await useAsyncData('projects', () => find('projects', { populate: 'deep' }))
const { data: technologies } = await useAsyncData('technologies', () => find('technologies', { populate: 'deep' }))
const types = ref([])
const activeFilter = ref('all')

const filterProjects = (type) => {
  activeFilter.value = type
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value.data
  return projects.value.data.filter(project => project.technologies.map(technolige => {
    return technolige.name.toLowerCase().split(',').join('')
  }).includes(activeFilter.value.toLowerCase().split(',').join('')))
})

onMounted(() => {
  projects.value.data[1].technologies.map(technologie => {
    return technologie.name.toLowerCase().split(',').join('')
  })
  types.value = new Set(technologies.value.data.map(technologie => {
    return technologie.name
  }))
})

</script>

<style scoped lang='scss'>
@import '~/assets/scss/main.scss';

.wrapper-projects {
  display: grid;
  gap: clamp(80px, 10vw, 150px);
  padding-bottom: 40vh;
  padding-top: 200px;
}

.active-techno {
  font-family: $font-roboto-bold;
  color: $color-main;
}

.wrapper-filter {
  display: flex;
  gap: 20px;
}
</style>