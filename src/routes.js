import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Auth from './components/Auth'
import Account from './components/Account'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Info from './components/Info'
import Shop from './components/Shop'
import Map from './components/Map'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/account' component={Account} />
        <Route path='/cart' component={Cart} />
        <Route path='/contact' component={Contact} />
        <Route path='/info' component={Info} />
        <Route path='/shop' component={Shop} />
        <Route path='/map' component={Map} />
    </Switch>
);