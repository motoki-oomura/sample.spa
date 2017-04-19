import VueRouter from 'vue-router';
import UserComponent from './user.component.vue';

const routes = [
  { path: '/user/:id', component: UserComponent }
];

export default new VueRouter({
  routes
});