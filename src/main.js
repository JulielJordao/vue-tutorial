// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './router.js'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

// Custom directives
// Vue.directive('rainbow', {
//   bind(el, bindning, vnode){
//     el.style.color = "#"+ Math.random().toString().slice(2,8);
//   }
// });

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value === 'wide'){
      el.style.maxWidth = '1200px';
    } else if(binding.value == 'narrow'){
      el.style.maxWidth = '560px';
    }

    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding='20px';
    }
  }
});

Vue.filter('snippet', function(value){
  return value.slice(0, 100) + '...';
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
});
