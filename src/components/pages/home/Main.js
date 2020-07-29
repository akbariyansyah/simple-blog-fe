import React from 'react';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import ListArticleContainer from '../../container/ListArticleContainer';
import CreateArticleContainer from '../../container/CreateArticleContainer';
import DetailArticleContainer from '../../container/DetailArticleContainer'
import DetailArticle from '../article/DetailArticle';
function Main(match) {
    return (
            <div className="container">
                <Router>
                <Nav id={match.match.params.id} />
                    <Switch>
                        <Route path="/article/:id" exact component={Header} />
                        <Route path="/article/:id/create" component={() => <CreateArticleContainer id={match.match.params.id} />} />
                        <Route path="/article/:id/myarticles" exact component={() => <ListArticleContainer id={match.match.params.id} />} />
                        <Route path="/article/:id/myarticles/:id_article" component={DetailArticle} />
                    </Switch>

                </Router>

            </div>

    );


}

export default Main;
