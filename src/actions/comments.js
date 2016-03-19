import AppDispatcher from '../dispatcher'
import { loadCommentsByArticleId } from './api/comments'
import { asyncAC } from './api/utils'
import { ADD_COMMENT, LOAD_COMMENTS } from './constants'


export function addComment(comment, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {comment, articleId}
    })
}

export const loadComments = asyncAC(loadCommentsByArticleId, LOAD_COMMENTS)