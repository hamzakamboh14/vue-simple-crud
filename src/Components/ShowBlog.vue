<template>
  <div id="show-blogs"  v-theme:column="''">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search"  placeholder="Search Title" />
    <div v-for="blog in filteredBlogs" class="single-blog" >
       <router-link v-bind:to="'/blog/'+blog.id"> <h2 v-rainbow >{{blog.title  | to-uppercase}}</h2></router-link>
        <article>{{blog.content | snippet}}</article>
    <div class="btn" >
     <button class="btn-danger" v-on:click="DeleteBlog(blog.id)">Delete Blog</button>
        <router-link class="btn-success" v-bind:to="'/add/'+blog.id">Update Blog</router-link>
    </div>

    </div>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
        blogs:[],
        search:""
    }
  },
  methods:{
      DeleteBlog(id){
         return this.$http.delete('https://vue-cli-playlist-default-rtdb.firebaseio.com/post/'+id+'.json')
          .then(function(){
            location.reload()
          })
      }
  },
  created(){
        this.$http.get('https://vue-cli-playlist-default-rtdb.firebaseio.com/post.json')
        .then(function(data){
          return data.json()
        })
        .then(function(data){
          var blogArray = [];
          for(let key in data){
            data[key].id = key
            blogArray.push(data[key]) 
          }
          this.blogs = blogArray
        })

  },
  computed:{
      filteredBlogs(){
          return this.blogs.filter(blog => {
              return blog.title.match(this.search)
          })
      }
  },
  //local filters
  filters:{
    toUppercase(value){
  return value.toUpperCase()
    }
  },
  //local directives
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
             el.style.color = "#" + Math.random().toString().slice(2,8);
            }
      }
  }
}
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    #show-blogs a{
      text-decoration: none;
    }
    
    #show-blogs input{
        width: 100%;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    .btn{
      margin-top: 20px;
    }
    .btn-success{
      margin: 15px 1px 0 0;
      width: 30px;
      padding: 5px;
      border-radius: 100px;
      background: #007bff;
      text-decoration: none;
      color: white;
      font-size: 1.3vw;
      cursor: pointer;
    }
    .btn-danger{
      margin: 15px 1px 0 0;
      width: 100px;
      padding: 5px;
      border-radius: 100px;
      background: #dc3545;
      text-decoration: none;
      color: white;
      font-size: 1.3vw;
      cursor: pointer;
      border: 0px solid;
    }
</style>
