<template>  
  <div id="add-blog">
    <h1 v-if="update">Update Blog Post</h1>
    <h1 v-else>Add a new Blog Post</h1>
    
     <form v-if="update">
        <label>Blog Title</label>
        <input type="text"  v-model.lazy="update.title" required/>
        <label>Blog Content:</label>
        <textarea  v-model.lazy="update.content" style="height:200px"></textarea>
        <div id="checkbox">
            <label>Ninjas</label>
            <input type="checkbox" value="News" v-model="update.categories"/>
            <label>wizards</label>
            <input type="checkbox" value="Article" v-model="update.categories"/>
            <label>Mario</label>
            <input type="checkbox" value="Study" v-model="update.categories"/>
            <label>Cheese</label>
            <input type="checkbox" value="other" v-model="update.categories"/>
            <br>
            <label>Authors</label>
            <select v-model="update.author">
                <option  v-for="author in authors">{{author}}</option>
            </select><br>
            <button v-on:click.prevent="updated">Update Blog</button>
        </div>
    </form>

    <form v-else >
        <label>Blog Title</label>
        <input type="text"  v-model.lazy="blog.title" required/>
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkbox">
            <label>News</label>
            <input type="checkbox" value="News" v-model="blog.categories"/>
            <label>Article</label>
            <input type="checkbox" value="Article" v-model="blog.categories"/>
            <label>Study</label>
            <input type="checkbox" value="Study" v-model="blog.categories"/>
            <label>other</label>
            <input type="checkbox" value="other" v-model="blog.categories"/>
            <br>
            <label>Authors</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <br>
            <button v-on:click.prevent="post">Add Blog</button>
        </div>
    </form>
    
  </div>
</template>

<script>
export default {
created(){
    if(this.$route.params.id){
        this.update=true;
        this.$http.get('https://vue-cli-playlist-default-rtdb.firebaseio.com/post/'+this.id+'.json')
        .then(function(data){    
          this.update =data.body;
        })
    }
},
  data () {
    return {
    id:this.$route.params.id,
     blog:{
        title:"",
        content:"",
        categories:[],
        author:""
     },
     update:{},
     authors:['Author 1', 'Author 2', 'Author 3'],
     submitted:false,
     update:false
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://vue-cli-playlist-default-rtdb.firebaseio.com/post.json',this.blog)
          .then(function(data){
              this.$router.push('/')
          })
      },
      updated(){
          this.$http.put('https://vue-cli-playlist-default-rtdb.firebaseio.com/post/'+this.id+'.json',this.update)
          .then(function(data){
              this.update = false
              this.$router.push('/')
              
          })

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
  input[type="text"],textarea{
      display: block;
      width: 100%;
      padding: 8px;
  }
  #preview{
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
  }
#checkbox input{
    display: inline-block;
    margin-right: 10px;
}
#checkbox label{
    display: inline-block;
}
</style>
