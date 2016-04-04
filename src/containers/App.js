import React, { Component, PropTypes } from 'react'
//неплохо. По Реакту - лучше вынести функционал перевода в отельный компонент. По поводу программирования вообще: решение с массивами плохо масштабируется, лчше объекты в словаре
class App extends Component {
    constructor() {
        super()
        this.state = {
            lang : 'eng'
        }
    }

    static propTypes = {

    };

    static childContextTypes = {
        lang: PropTypes.string,
        library: PropTypes.object
    }

    getChildContext() {
        return {
            lang: this.state.lang,
            library: {
                sign: ['sign in', 'войти'],
                delete: ['delete', 'удалить'],
                showComments: ['show comments', 'показать комментарии'],
                hideComments: ['hide comments', 'скрыть комментарии'],
                addComment: ['add comment', 'добавить комментарий']
            }
        }
    }

    changeLang = (ev) => {
        ev.preventDefault()
        this.setState({
            lang: this.state.lang === 'eng' ? 'ru' : 'eng'
        })
    }

    render() {
        return (
            <div>
                <div>language: <a href="#" onClick={this.changeLang}>{this.state.lang}</a></div>
                <h1>News App Name!</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App
