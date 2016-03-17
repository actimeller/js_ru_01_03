import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../HOC/toggleOpen'
import linkedState from 'react-addons-linked-state-mixin'
import { addComment } from '../actions/comments'
import { commentStore } from '../stores'

const CommentList = React.createClass({
    mixins: [linkedState],
    propTypes: {
        comments: PropTypes.array
    },
    getInitialState() {
        return {
            comment: '',
            comments: commentStore.getAll()
        }
    },
    render() {
        const { isOpen, comments, toggleOpen } = this.props
        const actionText = isOpen ? 'hide comments' : 'show comments'

        const commentItems = comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <a href = "#" onClick = {toggleOpen}>{actionText}</a>
                <ul>{isOpen ? commentItems : null}</ul>
                {this.getInput()}
            </div>
        )
    },
    getInput() {
        if (!this.props.isOpen) return null
        return <div>
            <input valueLink={this.linkState("comment")}/>
            <a href="#" onClick={this.handleAddComment}>add comment</a>
        </div>
    },

    handleAddComment(ev) {
        ev.preventDefault()
        addComment(this.props.articleId, this.state.comments.length + 1, 'name', this.state.comment)
        this.setState({
            comment: '',
            comments: commentStore.getAll()
        })
    }
})


export default toggleOpen(CommentList)