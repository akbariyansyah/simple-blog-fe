import React, { Component } from 'react'
import ListArticle from '../pages/article/ListArticle';
import { connect } from 'react-redux';

class ListArticleContainer extends Component {
    render() {
        return (
            <>
                <ListArticle
                    articles={this.props.articles}
                    clicked={this.props.getallarticles}
                    id={this.props.id}
                    editArticle={this.props.editarticle}
                    title={this.props.title}
                    content={this.props.content}
                    handleChange={this.props.handlechange}
                    saveChange={this.props.savechange}
                    deleteArticle={this.props.deletearticle}
                    loadArticle={this.props.loadarticle}
                >
                </ListArticle>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        title: state.title,
        content: state.content,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getallarticles: articles => dispatch({ type: 'GETARTICLES', data: articles }),
        editarticle: article => dispatch({ type: "EDITARTICLE", data: article }),
        handlechange: e => dispatch({ type: "HANDLECHANGE", data: { name: [e.target.name], value: e.target.value }}),
        deletearticle : (id) => dispatch({type : "DELETEARTICLE", data:id}),
        savechange : () => dispatch({type : "SAVECHANGE"}),
        loadarticle : () => dispatch({type : "LOADARTICLE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListArticleContainer);