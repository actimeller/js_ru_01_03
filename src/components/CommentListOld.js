import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import Comment from './Comment'
import toggleOpen from '../mixins/toggleOpen'

export default React.createClass({
    mixins: [toggleOpen, LinkedStateMixin],

    getInitialState() {
        return {
            currentText: 'hello world'
        }
    },

    render: function () {
        const { isOpen } = this.state
        const actionText = isOpen ? 'hide comments' : 'show comments'

        const comments = this.props.comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText}</a>
                <ul>{isOpen ? comments : null}</ul>

                <input type="text" valueLink={this.linkState('comment')}/>
                <button onClick={this.addComment}>add comment</button>
            </div>
        )

    },
    
    addComment(){
        this.props.comments.push({
            'id': this.props.comments.length + 1,
            'name': '',
            'text': this.state.comment
        })
        this.setState({
            comment: ''
        })
    }
});