import Article from '../components/Article'
import { deleteArticle } from '../actions/articles'
import { connect } from 'react-redux'


import React, { Component, PropTypes } from 'react'

class Articles extends Component {
    static propTypes = {
        articles: PropTypes.array,
        deleteArticle: PropTypes.func
    };

    
    render() {
        const { articles, deleteArticle } = this.props
        return (

        <div>
          {
            articles.map((article) => {
              return (
                    <Article key={article.id} article={article} deleteArticle={deleteArticle}/>
                )
            })
          }
        </div>

        )
    }
}

export default connect((state) => {
    const { articles } = state
    return { articles }
}, {
    deleteArticle
})(Articles)