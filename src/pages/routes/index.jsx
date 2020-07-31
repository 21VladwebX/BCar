import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home'
const Routes = () => {
    return (
        <div>
            <Switch>
                {/*<Route path="/autos">*/}
                {/*    <About />*/}
                {/*</Route>*/}
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
