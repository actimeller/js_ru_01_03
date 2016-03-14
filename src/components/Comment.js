import React, { Component, PropTypes } from 'react'
import CommentBody from './CommentBody'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    };

    render() {
        return (
            CommentBody(this.props)
        )
    }
}

export default Commento