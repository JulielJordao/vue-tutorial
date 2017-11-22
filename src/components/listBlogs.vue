<template>
  <div id="list-blogs" v-theme:column="'narrow'">
    <h1>List Blog Title</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="articles in filteredBlogs" class="single-blog" :key="articles.title">
      <h2 v-rainbow>{{articles.title | to-uppercase}}</h2>
      <!-- <article>{{articles.body | snippet}}</article> -->
    </div>

  </div>
</template>

<script>

  import search from '../mixins/searchMixins.js';

  export default {
    data() {
      return {
        arrBlog: [],
        search: 'abc'
      }
    },
    methods: {},
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (result) {
        this.arrBlog = result.body.splice(0, 10);
      });
    },
    filters: {
      toUppercase: function (value) {
        return value.toUpperCase()
      },
    },
    computed: {
    },
    directives: {
      rainbow: function (el, bindning, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      }
    },
    mixins: [search]
  }

</script>

<style scoped>
  #list-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

</style>
