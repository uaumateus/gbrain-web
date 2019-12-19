import React from 'react';
// @ts-ignore
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Screens/Home';
import TrailTest from './Screens/TrailTest';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/trailtest" exact component={TrailTest}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;