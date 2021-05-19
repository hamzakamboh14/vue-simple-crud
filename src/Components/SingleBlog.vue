<template>
    <div id="single-blog">
        <div  id="preview">
        <h3>Preview Blog</h3>
        <p><b>Blog title:</b> {{blog.title}}</p>
        <p><b>Blog Content:</b> </p>
        <p>{{blog.content}}</p>
        <p><b>Category:</b></p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <p><b>Author:</b> {{blog.author}}</p>
    </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
           id:this.$route.params.id,
            blog:{}        
        }
    },
    created(){
          this.$http.get('https://vue-cli-playlist-default-rtdb.firebaseio.com/post/'+this.id+'.json')
        .then(function(data){
            return data.json()
        })
        .then(function(data){
            this.blog = data
        })

    }
}
</script>
<style scoped>
 #single-blog{
        max-width: 800px;
        margin: 0 auto;
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
    #preview{
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
      background: #ccc;
  }
</style>