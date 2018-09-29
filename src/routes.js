import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './components/About';
import Display from './components/Display';
import Counter from './components/Counter';
import Home from './components/Home';

export default (
    <Switch>
        <Route path='/about' component={About} />
        <Route path='/display' component={About} />
        <Route path='/counter' component={Counter} />
        <Route path='/' component={Home} />
    </Switch>
)