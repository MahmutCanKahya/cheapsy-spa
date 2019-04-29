import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Register from '../components/Register'
import HomePage from '../components/Adverts'

const Router=()=>(
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/register' component={Register}/>
    </Switch>
)

export default Router;