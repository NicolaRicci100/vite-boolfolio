<script>
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'ProjectsList',
  components: { ProjectCard },
  props: { posts: Array }
};
</script>

<template>
  <section id="projects-list">
    <h1 class="mb-3">I miei progetti</h1>
    <div v-if="posts.length">
      <ProjectCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <h3 v-else>Nessun progetto postato</h3>
  </section>
</template>

<style></style>
