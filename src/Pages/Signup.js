import React from "react"
import SignupForm from "../component/SignupForm"
import Navigate from '../Navbar'

function BlogApp(){
return(
    <div className="auth-wrapper">
        <div className="row p-5">
            <div className="col-6 mx-auto">
                {/* <Navigate/> */}
                <SignupForm/>
            </div>
        </div>
    </div>
);
}

export default BlogApp