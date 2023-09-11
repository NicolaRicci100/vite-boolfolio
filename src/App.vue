<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/posts/';
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
  data: () => ({ posts: [] }),
  methods: {
    fetchPosts() {
      axios.get(endpoint).then(res => { console.log(res.data) })
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
    <h1>Hello!</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </main>
</template>

<style></style>