import ShowBlog from './Components/ShowBlog'
import AddBlog from './Components/AddBlog'
import SingleBlog from './Components/SingleBlog'
export default[
    {path:'/' ,component:ShowBlog},
    {path:'/add' ,component:AddBlog},
    {path:'/add/:id' ,component:AddBlog},
    {path:'/blog/:id',component:SingleBlog}
]