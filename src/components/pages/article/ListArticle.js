import React, { useState, useEffect } from 'react';
import '../../../App.css';
import { saveChange, deleteArticle, loadArticle } from '../../../services/ArticleApi'
import { Link } from 'react-router-dom'
import EditArticleModal from './EditArticleModal'

export default function ListArticle(props) {

    const [id, setId] = useState(props.id)
    const [page, setPage] = useState({
        offset: 0,
        limit: 3
    })
    const [articles, setArticles] = useState({
        title: "",
        content: "",
        user_id_article: 0,
        id_article: "",
        allArticles: [],

    })
    console.log(articles.title)
    console.log(articles.content)
    console.log(articles.user_id_article)
    console.log(articles.id_article)
    useEffect(() => {
        // console.log(id)
        loadArticle(id, page.offset, page.limit).then(res => {
            setArticles({
                ...articles,
                allArticles: res
            })
        })
    }, [page.offset])

    const handleChange = e => {
        setArticles({
            ...articles,
            [e.target.name]: e.target.value
        })
    }

    const save = () => {
        saveChange({
            title: articles.title,
            content: articles.content,
            user_id_article: articles.user_id_article,
            id_article: articles.id_article,
        }).then(res => {
            if (res.status === 202) {
                loadArticle(id, page.offset, page.limit).then(res => setArticles({
                    ...articles,
                    allArticles: res
                }))
            }
        })

    }
    const deletetion = id => {
        deleteArticle(id)
    }
    const edit = ({ title, content, id_article, user_id_article }) => {
        setArticles({
            ...articles,
            title: title,
            content: content,
            id_article: id_article,
            user_id_article: user_id_article
        })
    }
    const prev = () => {
        setPage({
            ...page,
            offset: page.offset - 1,
        })
    }
    const next = () => {
        setPage({
            ...page,
            offset: page.offset + 1,
        })
    }
    let component

    if (articles.allArticles === null) {
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
                {articles.allArticles.map(article =>
                    <div className="col-lg-12">
                        <h1 style={{ marginTop: 20 }}>{article.title_article}</h1>
                        <p style={{ textAlign: "justify" }}>{article.content_article.substring(0, 20)}...</p>
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
                        <button type="submit" style={{ marginRight: 10 }} className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal" onClick={() => edit({
                            title: article.title_article,
                            content: article.content_article,
                            id_article: article.id_article,
                            user_id_article: article.user_id_article
                        })}>edit</button>
                        <button type="submit" className="btn btn-outline-danger"
                            onClick={() => deletetion(article.id_article)}>
                            delete
                        </button>
                    </div>
                )}
                <EditArticleModal
                    title={articles.title}
                    content={articles.content}
                    handleChange={handleChange}
                    saveChange={save} />
            </div>
    }
    let buttonPrev, buttonNext
    if (page.offset < 1) {
        buttonPrev = <button className="btn btn-outline-info" disabled>...</button>
    } else {
        buttonPrev = <button className="btn btn-outline-info" onClick={prev}>{page.offset}</button>
    }
    if (articles.allArticles.length < 3) {
        buttonNext = <button className="btn btn-outline-info" disabled>...</button>
    } else {
        buttonNext = <button className="btn btn-outline-info" onClick={next}>{page.offset + 2}</button>
    }
    return (
        <div className="container" id="list-article">
            <div className="row">
                <div className="col-lg-12 mb-4 border border-dark">
                    <h1>My Articles</h1>
                </div>
            </div>
            {component}
            <div className="pagination">
                {buttonPrev}
                <button className="btn btn-primary">{page.offset + 1}</button>
                {buttonNext}
            </div>

        </div>
    )
}
