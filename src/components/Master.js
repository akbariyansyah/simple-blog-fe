import React from 'react';
import Register from './pages/user/RegisterForm'
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/home/Main';
import LoginForm from '../components/pages//user/LoginForm';

export default function Master() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" exact component={LoginForm} />
                    <Route path="/register" component={Register} />
                    <Route path="/article/:id" component={Main} />
                    <Route path="*" component={LoginForm} />
                </Switch>

            </Router>

        </div>
    );


}

