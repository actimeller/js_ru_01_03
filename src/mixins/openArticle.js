export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },

    openArticle(openArticleId) {
        return function (ev) {
            if (ev) ev.preventDefault()
            this.setState({
                openArticleId: openArticleId
            })
        }.bind(this)
    }
}