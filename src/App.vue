<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/posts/';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
export default {
  components: { AppHeader, ProjectsList },
  data: () => ({ posts: [] }),
  methods: {
    fetchPosts() {
      axios.get(endpoint).then(res => { this.posts = res.data })
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<template>
  <AppHeader />
  <main class="container my-5">
    <ProjectsList :posts="posts" />
  </main>
</template>

<style></style>