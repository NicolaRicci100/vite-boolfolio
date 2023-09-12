import { createRouter, createWebHistory } from 'vue-router';

// pagine
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue'

// router
const router = createRouter({
history: createWebHistory(),
linkExactActiveClass: 'active',
routes: [
  { path: '/', name: 'home', component: HomePage },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },
]
});

export { router }