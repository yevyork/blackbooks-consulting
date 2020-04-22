import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from '../screens/Home'
import Services from '../screens/Services'
import Contact from '../screens/Contact'
import Community from '../screens/Community'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/community' component={Community} />
    </Switch>

)

export default withRouter(Routes)
