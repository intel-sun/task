import React from 'react'
import Pages from './Pages'
import {Route, Switch, Redirect} from 'react-router-dom'


const Router = () => {
    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Switch>
                <Route path='/login' component={Pages.Login}/>
                <Route exact path = '/login' component={Pages.Login}/>
                <Route path='/signup' component={Pages.SignUp}/>
                <Route path='/post' component={Pages.Post}/>
                <Redirect from='*' to ='/Notfound' component={Pages.Notfound}/>
            </Switch>


        </React.Suspense>
    )
}

export default Router;

