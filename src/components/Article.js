import React, { Component, PropTypes } from 'react'

class ArticleList extends Component {
    static propTypes = {
        article: PropTypes.object,
        deleteArticle: PropTypes.func
    };

    render() {
        const { article } = this.props
        return (
            <h1>
                <a onClick={this.handleDelete}>[x]</a> - {article.title}
            </h1>
        )
    }
    handleDelete = (ev) => {
        const { article, deleteArticle } = this.props
        ev.preventDefault()
        deleteArticle(article.id)
    }
}

export default ArticleList