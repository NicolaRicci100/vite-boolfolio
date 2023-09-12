<script>
export default {
  name: 'ProjectCard',
  props: { post: Object, isDetail: Boolean },
  computed: {
    projectDate() {
      const date = new Date(this.post.created_at);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;

      const projectDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

      return projectDate;
    },
    textAbstract() {
      const textAbstract = this.post.content.slice(0, 400);
      return textAbstract + '...';
    }
  }
};
</script>

<template>
  <div class="jumbotron p-2 bg-light rounded-3">
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ projectDate }}</h6>
        <div class="clearfix">
          <img class="float-start me-2" style="width: 10rem;" :src="post.image" :alt="post.title">
          <p class="card-text">{{ isDetail ? post.content : textAbstract }}</p>
        </div>
        <div class="d-flex justify-content-end align-items-center">
          <RouterLink class="btn btn-outline-secondary" :to="{ name: 'project-detail', params: { id: post.id } }">Dettagli
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>