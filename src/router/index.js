import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '../components/AboutMe.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/Contact.vue';
import NotFound from '../components/404.vue'; // Importation du composant 404

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: AboutMe },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }, // Route pour la page 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
