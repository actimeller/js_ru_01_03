import React, { Component, PropTypes } from 'react'
import Comment from '../components/Comment'
import { commentStore } from '../stores'

class CommentsPagination extends Component {
    static propTypes = {};

    constructor(props) {
        super(props)
        this.state = {
            comments: commentStore.getOrLoadComments(props.params.id),
            loading: commentStore.loading
        }
    }

    componentDidMount() {    
        commentStore.addChangeListener(this.commentsChanged)
    }

    componentWillUnmount() {
        commentStore.removeChangeListener(this.commentsChanged)
    }

    commentsChanged =(props) => {
        const { id } = (props || this.props).params
        this.setState({
            comments: commentStore.getOrLoadComments(id),
            loading: commentStore.loading
        })
    }

    render() {
        const { loading, comments } = this.state;
        const commentItems = comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>)
        if (loading) return <h1>Loading...</h1>
        return <ul>{commentItems}</ul>
    }


}

export default CommentsPagination