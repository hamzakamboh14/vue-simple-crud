import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Router from './Router';

// HTTP resource
Vue.use(VueResource);

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  routes:Router,
  mode:'history'
});

// directives

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value === "wide"){
      el.style.maxWidth = "1200px"
    }
    else if(binding.value === "narrow"){
      el.style.maxWidth = "560px"
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px'
    }
  }
});

// Global filters


Vue.filter('snippet',function(value){
  return value.slice(0,100)+"..."
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
