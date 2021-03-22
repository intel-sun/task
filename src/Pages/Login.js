import React from "react"
import LoginForm from "../component/LoginForm"
import Navigate from '../Navbar'

function BlogApp(){
return(
<div class="auth-wrapper">
    <Navigate/>
    <LoginForm/>
</div>
);
}

export default BlogApp