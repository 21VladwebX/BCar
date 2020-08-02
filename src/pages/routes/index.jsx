import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import Autos from "pages/Autos";
import AutoDetail from 'pages/Autos/AutoDetail';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/autos">
                    <Autos />
                </Route>
                <Route path="/autos/:id" component={AutoDetail} />
                {/*<Route path="/employees">*/}
                {/*    <Users />*/}
                {/*</Route>*/}
                {/*<Route path="/about">*/}
                {/*    <Home />*/}
                {/*</Route>*/}
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    );
}

export default Routes;
