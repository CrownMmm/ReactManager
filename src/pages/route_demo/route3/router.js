import React from 'react'
import { HashRouter as Router, Route ,Switch} from 'react-router-dom'
import Main from './Main'
import Info from './info'
import Topic from './../route1/topic'
import About from './../route1/about'
import NoMatch from './NoMatch'

import Home from './Home'
export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}