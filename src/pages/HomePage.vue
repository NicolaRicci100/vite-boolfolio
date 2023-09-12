<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/posts/';
import ProjectsList from '../components/projects/ProjectsList.vue';
export default {
  name: 'HomePage',
  components: { ProjectsList },
  data: () => ({ posts: [] }),
  methods: {
    fetchPosts() {
      axios.get(endpoint).then(res => { this.posts = res.data })
    }
  },
  created() {
    this.fetchPosts();
  }
}
</script>

<template>
  <ProjectsList :posts="posts" />
</template>

<style></style>