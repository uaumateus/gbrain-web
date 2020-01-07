import React from 'react';
// @ts-ignore
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Screens/Home';
import TrailLevel from './Screens/TrailLevel';
import TrailTest from './Screens/TrailTest';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/trailtest/:type" exact component={TrailTest}/>
                <Route path="/traillevel" exact component={TrailLevel}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;