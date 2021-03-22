import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
//import axios from "./axios"


function App(){
    return(
        
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
        );
    }
export default App;