import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'
import { deleteArticle, loadArticleById } from '../actions/articles'
import { addComment, loadComments } from '../actions/comments'
import { commentStore } from '../stores'

class Article extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        article: PropTypes.object.isRequired
    }

    constructor() {
        super()
        this.state = {
            commentsLoading: commentStore.loading
        }
    }

    componentDidMount() {
        commentStore.addChangeListener(this.commentsChanged)
    }

    componentWillUnmount() {
        commentStore.removeChangeListener(this.commentsChanged)
    }

    commentsChanged =() => {
        this.setState({
            commentsLoading: commentStore.loading
        })
    }

    componentWillReceiveProps(nextProps) {
        const { article, isOpen } = nextProps
        if (article.loaded || article.loading) return

        if (isOpen && !this.props.isOpen) loadArticleById({id: article.id})
    }


    render() {
        return (
            <div ref="container">
                <a href = "#" onClick = {this.handleDelete}>delete</a>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return <noscript />
        if (article.loading) return <h3>Loading article</h3>
        return (
            <div>
                <p>{article.text}</p>
                {this.getCommentList()}
            </div>
        )
    }

    getCommentList() {
        const { article } = this.props
        const comments = article.getRelation('comments')
        if (this.state.commentsLoading) return <h4>comments loading...</h4>
        if (comments.includes(undefined)) return <h4 onClick={this.getComments}>comments: {comments.length}</h4>
        return  <CommentList ref= "comments"
                             comments = {comments}
                             addComment = {this.addComment}/>

    }

    getComments = () => {
        loadComments({id: this.props.article.id})
    }

    addComment = (comment) => {
        addComment(comment, this.props.article.id)
    }

    getTitle() {
        const { article: { title }, openArticle  } = this.props
        return  (
            <h3 onClick={openArticle}>
                {title}
            </h3>
        )
    }
}

export default Article