<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './Components/AddBlog.vue';
import ShowBlog from './Components/ShowBlog.vue';
import Header from './Components/Header.vue';
export default {
  components:{
    'add-blog':AddBlog,
    'show-blog':ShowBlog,
    'app-header':Header
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  body{
    margin: 0%;
    font-family: 'Nunito SemiBold';
  }
</style>
