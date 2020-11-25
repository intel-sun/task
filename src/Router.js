import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import Signup from "./Page/Signup"
import Login from "./Page/Login"
const Router = () =>{
   return(
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Redirect from ="*" to ="/page-not-found"/>
    </Switch>



   )
}
export default Router;


