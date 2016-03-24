import React from 'react'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import App from './containers/App'
import Articles from './containers/Articles'
import ArticlePage from './containers/ArticlePage'
import NewArticle from './containers/NewArticle'
import CommentsPagination from './containers/CommentsPagination'

export default (
    <Router history = {browserHistory}>
        <Route path="/" component = {App}>
            <Route path ="/articles" component = {Articles}>
                <Route path = "new" component = {NewArticle} />
                <Route path = ":id" component = {ArticlePage} />
            </Route>
            <Route path="/comments/:id" component= {CommentsPagination} />
        </Route>
    </Router>
)