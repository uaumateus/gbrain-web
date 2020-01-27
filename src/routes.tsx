import React, {useEffect, useState} from 'react';
// @ts-ignore
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Screens/Home';
import TrailLevel from './Screens/TrailLevel';
import TrailTest from './Screens/TrailTest';
import Result from './Screens/Result';

function Routes () {
    const [userLogin, setUserLogin] = useState<boolean>(false);
    const ws = new WebSocket('wss://localhost:6868')
    useEffect(() => {
        ws.onopen = () => {
            console.log('connected')
        }
        ws.onclose = () => {
            console.log('disconnected')
        }
        getInfos();
    }, []);

    useEffect(() => {
        getInfos();
    }, [userLogin]);

    function getInfos() {
        setTimeout(() => {
            getUserLogin();
            
        }, 1000);
    }

    function getUserLogin(){
        ws.send(JSON.stringify({"id": 1, "jsonrpc": "2.0", "method": "getUserLogin"}));
        ws.onmessage = (evt : any) => {
            if(JSON.parse(evt.data)['result'].length === 0)
                setUserLogin(false);
            else
                setUserLogin(true);
        }
    }


    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/trailtest/:type" exact component={TrailTest}/>
                <Route path="/traillevel" exact component={TrailLevel}/>
                <Route path="/result" exact component={Result}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;