<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const apiBaseUri = 'http://localhost:8000/api/posts/';
export default {
  name: 'ProjectDetailPage',
  components: { ProjectCard },
  data: () => ({
    post: null,
  }),
  methods: {
    getPost() {
      const endpoint = apiBaseUri + this.$route.params.id;
      axios.get(endpoint).then(res => { this.post = res.data });
    }
  },
  created() {
    this.getPost();
  }

};
</script>

<template>
  <h1>Pagina dettaglio del progetto</h1>
  <ProjectCard v-if="post" :post="post" :isDetail="true" />
</template>

<style></style>