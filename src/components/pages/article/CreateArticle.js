import React, { useState } from 'react';
import '../../../App.css'
import { createArticle } from '../../../services/ArticleApi'

export default function CreateArticle(props) {
    const [state, setState] = useState({
        article_title: "",
        article_content: "",
        id: props.id
    })
    const newArticle = (event) => {
        event.preventDefault()
        const article = {
            title_article: state.article_title,
            content_article: state.article_content
        }
        createArticle(state.id, article)
        setState({
            ...state,
            article_title: "",
            article_content: ""
        })

    }
    let button;
    if (state.article_title === "" || state.article_content === "") {
        button = <button className="btn btn-secondary btn-lg" type="submit" disabled>Create</button>
    } else {
        button = <button className="btn btn-primary btn-lg" type="submit" onClick={newArticle}>Create</button>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mb-4 border border-dark">
                    <h1>Create new article</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form>
                        <div class="form-group">
                            <label for="article-title">Article title</label>
                            <input type="text" class="form-control" autoComplete="off" onChange={e => setState({...state, article_title : e.target.value})} name="article_title" />
                        </div>

                        <div class="form-group">
                            <label for="article-content">Article Content</label>
                            <textarea class="form-control" name="article_content" onChange={e => setState({...state, article_content : e.target.value})} rows="8"></textarea>
                        </div>
                        {button}
                    </form>
                </div>

            </div>
        </div>
    )
}
