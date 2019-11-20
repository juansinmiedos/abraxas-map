import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginContainer from './components/login/LoginContainer'
import MapContainer from './components/map/MapContainer'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {LoginContainer} />
            <Route exact path="/map" component= {MapContainer} />
        </Switch>
    </BrowserRouter>
)

export default Router
