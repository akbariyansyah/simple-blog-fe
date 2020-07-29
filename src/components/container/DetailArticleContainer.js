import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailArticle from '../pages/article/DetailArticle'


class DetailArticleContainer extends Component {
    render() {
        console.log(this.props.title)
        return (
            <div className="container">
                <DetailArticle
                    title={this.props.title}
                    content={this.props.content}
                    id={this.props.id}
                    id_article={this.props.id_article}
                    />

            </div>
        )
    }
}
export default DetailArticleContainer;

