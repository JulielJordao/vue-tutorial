<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="articles in filteredBlogs" class="single-blog" :key="articles.id">
      <router-link v-bind:to="'/blog/' + articles.id"><h2 v-rainbow>{{articles.title | to-uppercase}}</h2></router-link>
      <article>{{articles.content | snippet}}</article>
    </div>

  </div>
</template>

<script >

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
      this.$http.get('https://vue-tutorial-c96d5.firebaseio.com/post.json').then(function (data) {
        return data.json();
      }).then(function(data){
        var blogsArray = [];
        for (let key in data){
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.arrBlog = blogsArray;
      })
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
  #show-blogs {
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
