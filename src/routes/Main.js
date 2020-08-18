import React from 'react';
import Nav from '../components/pages/home/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/pages/home/Header';
import ListArticleContainer from '../components/container/ListArticleContainer';
import CreateArticleContainer from '../components/container/CreateArticleContainer';
import DetailArticle from '../components/pages/article/DetailArticle'
function Main(match) {
    return (
            <div>
                <Router>
                <Nav id={match.match.params.id} />
                    <Switch>
                        <Route path="/article/:id/create" component={() => <CreateArticleContainer id={match.match.params.id} />} />
                        <Route path="/article/:id/myarticles" exact component={() => <ListArticleContainer id={match.match.params.id} />} />
                        <Route path="/article/:id" exact component={Header} />
                        <Route path="/article/:id/myarticles/:id_article" component={DetailArticle} />
                    </Switch>

                </Router>

            </div>

    );


}

export default Main;
