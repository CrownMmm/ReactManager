import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin';
import Button from './pages/ui/button'
import NoMatch from './pages/nomatch'
class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={() =>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Button}></Route>
                            <Route component={NoMatch}></Route>
                        </Admin>}>
                    </Route>
                    <Route path="/order/detail" component={Login}></Route>
                </App>
            </HashRouter>
        );
    }
}

export default Router;
