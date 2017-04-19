import Vue from 'vue';
import VueRouter from 'vue-router';
import UserComponent from './user.component.vue';
import UserProfileComponent from './user.profile.component.vue';
import UserPostComponent from './user.post.component.vue';

// vue-routerモジュールを使用する宣言
Vue.use(VueRouter);

const UserRoutes = [
  { path: '/user/:id/profile', name: 'user-profile', component: UserProfileComponent, props: true },
  { path: '/user/:id/post', name: 'user-post', component: UserPostComponent, props: true }
];

const routes = [
  {
    path: '/user/:id',
    name: 'user',
    component: UserComponent,
    children: UserRoutes,
    props: true,
    meta: {
      requiresAuth: true
    }
  }
];


// ルーティングインスタンスを生成し export
export default new VueRouter({
  mode: 'history',
  routes
})