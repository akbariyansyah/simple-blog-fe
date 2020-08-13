import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateArticle from '../pages/article/CreateArticle'

class CreateArticleContainer extends Component {
    render() {
        return (
            <div>
                <CreateArticle
                    handlChange={this.props.handlechange}
                    title={this.props.title}
                    content={this.props.content}
                    id={this.props.id}
                    createArticle={this.props.createarticle} />

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        content: state.content,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createarticle: (id, article) => dispatch({ type: "CREATEARTICLE", data: { id: id, article: article } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticleContainer);
