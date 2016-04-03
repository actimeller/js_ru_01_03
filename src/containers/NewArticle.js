import React, { Component, PropTypes } from 'react'

class NewArticle extends Component {
    static propTypes = {

    };

    static contextTypes = {
        router: PropTypes.object,
        user: PropTypes.string
    }

    render() {
        if (!this.context.user) this.context.router.replace('/articles')
        return (
            <div>
                <h2>New Article</h2>
            </div>
        )
    }
}

export default NewArticle