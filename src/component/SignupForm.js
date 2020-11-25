import React from "react"
import "bootstrap/dist/css/bootstrap.css"


function SignupForm(){

    return(
        <div>
            <div className="firstname">
            <label>First Name: </label>
            <input type = 'firstname' placeholder="example Jane"/>
            </div>
            <div className="lastname">
            <label>Last Name: </label>   
            <input type ="lastname" placeholder="example Doe"/>
            </div>
            <div className="email">
            <label>Email: </label>
            <input type = 'email' placeholder="name@gmail.com"/>
            </div>
            <div className="password">
            <label>Password: </label>
            <input type = "password"/>
            </div>
            <div className="confirmPassword">
            <label>Confirm Password: </label>
            <input type ="password"/>
            </div>
           
            <label className="FormField__Checkbox" >
            <input className ="FormField__Checkbox" type="Checkbox" name ="hasAgreed" /> I agree to all the statements in <a href ="" className="FormField__Terms Link">terms of service</a>
            </label>
            <button>Sign Up</button>
        </div>

    );
}

export default SignupForm