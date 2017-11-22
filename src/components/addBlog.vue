<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
     <div v-if="!submited">
      <form href="">
        <label>Blog Title</label>
        <input type="text" v-model="dataBlog.title" required/>
        <label>Blog Content:</label>
        <textarea v-model="dataBlog.content"></textarea>
        
        <div id="checkboxes">
          <label>Ninjas</label>
          <input type="checkbox" value="Ninja" v-model="dataBlog.categories" />
          <label>Wizards</label>
          <input type="checkbox" value="Wizards" v-model="dataBlog.categories" />
          <label>Mario</label>
          <input type="checkbox" value="Mario" v-model="dataBlog.categories" />
          <label>Cheese</label>
          <input type="checkbox" value="Cheese" v-model="dataBlog.categories" />
        </div>

        <label>Author:</label>
        <select v-model="dataBlog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
        <button v-on:click.prevent="addBlog(dataBlog)" :disabled="!dataBlog.title || !dataBlog.content">Add Blog</button>
      </form>
    </div>
    <div v-if="submited">
      <h3>Thanks for adding your post</h3>
    </div>

    <div id="preview" v-for="item in arrayBlog" :key="item.title">
      <h3>Preview Blog</h3>
      <p>Blog title: {{item.title}}</p>
      <p>Blog content: {{item.content}}</p>
      <br>
      <p>Blog Categories: </p> 
      <ul v-for="value in item.categories" :key="value">
        <li>{{value}}</li>
      </ul> 
      <p>Blog author: {{item.author}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'add-blog',
  data(){
    return {
      dataBlog: {
        title: '',
        content: '',
        categories: [

        ],
        author: ''
      },
      arrayBlog: [],
      authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submited: false
    }
  },
  methods: {  
    addBlog: function(){
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.dataBlog.title,
        body: 'this.blog.content',
        userId: 1
      }).then(function(res){
        console.log(res);
      });
    
      this.submited = true;

      
      this.arrayBlog.push(this.dataBlog);
      this.dataBlog = {title: '', content: '', categories: [], author: ''};
    }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
button {
  background-color: aquamarine;
  margin-right: 0px;
  margin-top: 10px;
  left: 0%;
  height: 100%;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label{
  display: inline-block;
}
</style>
