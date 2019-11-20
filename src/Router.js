import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginContainer from './components/login/LoginContainer'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {LoginContainer} />
            <Route exact path="/map" component= {LoginContainer} />
        </Switch>
    </BrowserRouter>
)

export default Router
