import React, { useState, useEffect } from 'react';

import '../../../App.css'

import EditArticleModal from './EditArticleModal'
import { loadArticle } from '../../../services/ArticleApi'
import { Link } from 'react-router-dom'
export default function ListArticle(props) {

    const [id, setId] = useState(props.id)
    const [page, setPage] = useState({
        display: 1,
        offset: 0,
        limit: 3,
        keyword: ""
    })
    useEffect(() => {
        loadArticle(id,page.offset,page.limit,page.keyword).then(res => props.clicked(res))
    }, [page.offset])

    const edit = ({ title, content, id_article, user_id_article }) => {
        const article = {
            title: title,
            content: content,
            id_article: id_article,
            user_id_article: user_id_article
        }
        props.editArticle(article)
    }
    const handleChange = e => {
        setPage({
            ...page,
            [e.target.name]: e.target.value
        })
    }
    const search = keyword => {
        loadArticle(id,page.offset,page.limit,keyword).then(res => props.clicked(res))
    }
    const prev = () => {
        setPage({
            ...page,
            offset: page.offset - 3,
            display: page.display - 1
        })
        console.log(page.offset)
    }
    const next = () => {
        setPage({
            ...page,
            offset: page.offset + 3,
            display: page.display + 1
        })
        console.log(page.offset)

    }
    let component

    if (props.articles === null) {
        component =
            <div className="row">
                <div className="col-lg-12">
                    <div class="jumbotron jumbotron-fluid" id="jumbotron">
                        <div class="container">
                            <h1 class="display-4">Anda belum membuat artikel <i class="fa fa-frown-o" aria-hidden="true"></i></h1>
                            <p class="lead">klik tab 'create article' dan mulai menulis artikel baru</p>
                        </div>
                    </div>
                </div>
            </div>
    } else {
        component =
            <div className="row">
                {props.articles.map(article =>
                    <diV className="col-lg-12">
                        <h1 style={{ marginTop: 20 }}>{article.title_article}</h1>
                        <p>{article.content_article.substring(1, 50)}...</p>
                        <p>posted : <span>{article.created_at}</span> </p>
                        <Link to={{
                            pathname: `/article/${article.user_id_article}/myarticles/${article.id_article}`
                            , state: {
                                title: article.title_article,
                                content: article.content_article,
                                id_article: article.id_article,
                                user_id_article: article.user_id_article
                            }
                        }}>
                            <button type="submit" style={{ marginRight: 10 }} className="btn btn-outline-primary" onClick={() => edit({
                                title: article.title_article,
                                content: article.content_article,
                                id_article: article.id_article,
                                user_id_article: article.user_id_article
                            })
                            }>Read more</button>
                        </Link>
                        <button type="submit" style={{ marginRight: 10 }} className="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => edit({
                            title: article.title_article,
                            content: article.content_article,
                            id_article: article.id_article,
                            user_id_article: article.user_id_article
                        })}>edit</button>
                        <button type="submit" className="btn btn-outline-danger"
                            onClick={() => props.deleteArticle(article.id_article)}>
                            delete
                        </button>
                    </diV>
                )}
                <EditArticleModal
                    title={props.title}
                    content={props.content}
                    handleChange={props.handleChange}
                    saveChange={props.saveChange} />
            </div>
    }
    let buttonPrev, buttonNext
    if (page.offset < 1) {
        buttonPrev = <button className="btn btn-outline-info" disabled>...</button>
    } else {
        buttonPrev = <button className="btn btn-outline-info" onClick={prev}>{page.display - 1}</button>
    }
    if (props.articles.length < 3) {
        buttonNext = <button className="btn btn-outline-info" disabled>...</button>
    } else {
        buttonNext = <button className="btn btn-outline-info" onClick={next}>{page.display + 1}</button>
    }
    return (
        <div className="container" id="list-article">
            <div className="row">
                <div className="col-lg-12 mb-4 border border-dark">
                    <h1>My Articles</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 mb-4 border border-dark">
                    <h4>Search articles...</h4>
                    <div class="input-group mb-3">
                        <input type="text" name="keyword" onChange={handleChange} class="form-control" placeholder="Enter title article" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" onClick={() => search(page.keyword)} type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {component}
            <div className="pagination mb-3 mt-4">
                {buttonPrev}
                <button className="btn btn-primary">{page.display}</button>
                {buttonNext}
            </div>
        </div>
    )
}
