import React from "react";
//import SignupForm from './component.'
import "../index.css"
import "bootstrap/dist/css/bootstrap.css"


function LoginForm(){
return(
    <div>
        <div className="h2">
        <h2> You can join with </h2>
        </div>
        <div className="email">
                <label>Email: </label>
                <input type ='email' placeholder= "name@gmail.com"/>            
        </div>
        <div className="password"> 
        <label>Password: </label>
        <input type ="password" placeholder="8 digit long"/>
        </div>
    
        <button type="button" class="btn btn-success">Login</button>
        <h6>Don't have an account? <a href ="/signup">Sign Up now </a>
        </h6> 
        

    </div>
);
}

//charkra-ui

export default LoginForm
