import React, { Component, PropTypes } from 'react'
import Article from './Article'
import CommentList from './CommentList'
import openArticle from '../HOC/openArticle'

class ArticleList extends Component {

    render() {
        const { openArticle } = this.props
        const articles = this.props.articles.map((article) =>
            <li key={article.id}>
                <Article article={article}
                         openArticle = {openArticle(article.id)}
                         isOpen = {article.id === this.props.openArticleId}/>
            </li>
        )
        return (
            <div>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }

}

export default openArticle(ArticleList)