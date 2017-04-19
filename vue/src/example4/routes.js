import VueRouter from 'vue-router';

import PageTop from './page.top.vue';
import PageAbout from './page.about.vue';
import PageProfile from './page.profile.vue';

const routes = [
  { path: '/', component: PageTop },
  { path: '/about', component: PageAbout },
  { path: '/profile', component: PageProfile }
];

const router = new VueRouter({
  routes
});

export default router;