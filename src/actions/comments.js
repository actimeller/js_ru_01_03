import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from './constants'

export function addComment(articleId, id, name, text) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            articleId,
            id,
            name,
            text
        }
    })
}