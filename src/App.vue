<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
    <!-- <list-blogs></list-blogs> -->
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs':listBlogs,
    'app-header':header
  },
  data(){
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
