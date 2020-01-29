import React from 'react';
// @ts-ignore
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SelectDevice from './Screens/SelectDevice';
import Home from './Screens/Home';
import TrailLevel from './Screens/TrailLevel';
import TrailTest from './Screens/TrailTest';
import Result from './Screens/Result';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SelectDevice}/>
                <Route path="/menu" exact component={Home}/>
                <Route path="/trailtest/:type" exact component={TrailTest}/>
                <Route path="/traillevel" exact component={TrailLevel}/>
                <Route path="/result" exact component={Result}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;