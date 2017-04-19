import Vue from 'vue';
import VueRouter from 'vue-router';


// example1 vueの初歩
// import App from './example1/App.vue';

// 親子コンポーネント１
// import App from './example2/App.vue';

// 親子コンポーネント２
// import App from './example3/App.vue';

// ルーティング
// import App from './example4/App.vue';
// import router from './example4/route';
// Vue.use(VueRouter);

// 動的ルートマッチング
// import App from './example5/App.vue';
// import router from './example5/router';

// ネストされたルーティング
import App from './example6/App.vue';
import router from './example6/router';


let vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App></App>',
  router
});