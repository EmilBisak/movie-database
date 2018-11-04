import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from './Movies';
import Form from './Form';
import SingleMovie from './SingleMovie'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Movies} />
            <Route path='/addMovie' component={Form} />
            <Route path='/singlemovie/:id' component={SingleMovie}/>
        </Switch>
    </main>
)

export default Main;