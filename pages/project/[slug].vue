<template>
  <div v-if="project">
    <div class="wrapper-project">
      <div class="card-project">
        <div class="mockup-container">
          <nuxt-link :to="`/project/${project[0].slug}`">
            <img src="/images/mac-container.png" alt="" class="mac-container">
            <img :src="project[0].image_url.formats.large.url" :alt="project[0].image_url.alternativeText" class="website">
          </nuxt-link>
        </div>
        <div class="description-project">
          <div class="wrapper-title-techno">
            <h2>{{ project[0].title }}</h2>
            <div v-if="project[0].technologies" class="wrapper-techno-project">
              <img v-for="technologie in project[0].technologies" :key="technologie.id" :src="technologie.logo.url" alt="">
            </div>
          </div>
          <div class="description" v-html="$mdRenderer.render(project[0].description)"></div>
          <div class="link-container">
            <a target="_blank" :href="project[0].project_url">Voir le projet </a>
            <div class="line"></div>
          </div>
        </div>
        <div class="nav-project">
          <nuxt-link v-if="position !== 0" ref="next" @click="navProjects" :to="`/project/${prevProject?.slug}`">précédent</nuxt-link>
          <nuxt-link v-if="position !== lengthProjects - 1" ref="prev" @click="navProjects" :to="`/project/${nextProject?.slug}`">suivant</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { findOne, find } = useStrapi()
const route = useRoute()
const { data: projects } = await useAsyncData('projects', () => find(`projects?populate=deep`))
const { data: project } = await findOne(`projects?filters[slug]=${route.params.slug}&populate=deep`)
const position = ref()
const lengthProjects = ref()
const nextProject = ref()
const prevProject = ref()

const navProjects = computed(() => {
  getPosition()
  getLengthProjects()
  nextProject.value = projects.value.data[position.value + 1]
  prevProject.value = projects.value.data[position.value - 1]
})

const getPosition = () => position.value = projects.value.data.findIndex(p => p.id === project[0].id)
const getLengthProjects = () => lengthProjects.value = projects?.value.data.length

</script>

<style scoped lang="scss">
@import '~/assets/scss/main.scss';

.wrapper-project {
  height: 100vh;
  display: flex;
  align-items: center;
}

.nav-project {
  display: flex;
  justify-content: center;
  grid-column: 1 / -1;
  gap: 20px;
  margin-top: 2rem;
}

.mockup-container {
  width: 140%;

  @media screen and (min-width : 1920px) {
    width: 100%;
  }
}
</style>