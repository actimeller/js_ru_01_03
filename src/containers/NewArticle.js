import React, { Component, PropTypes } from 'react'

class NewArticle extends Component {
    static propTypes = {

    };

    static contextTypes = {
        router: PropTypes.object,
        user: PropTypes.string
    }

    render() {
        //ошибка в консоли из-за этого вызова. В методе рендер нельзя ничего менять, только строить новую структуру. Редирект - это сайд-эффект
        if (!this.context.user) this.context.router.replace('/articles')
        return (
            <div>
                <h2>New Article</h2>
            </div>
        )
    }
}

export default NewArticle
