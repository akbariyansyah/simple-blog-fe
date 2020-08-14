import React from 'react';
import Register from '../components/pages/user/RegisterForm'
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main';
import UserContainer from '../components/container/UserContainer';

export default function Master() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={UserContainer} />
                    <Route path="/register" component={Register} />
                    <Route path="/article/:id" component={Main} />
                    <Route path="*" component={UserContainer} />
                </Switch>

            </Router>

        </div>
    );


}

