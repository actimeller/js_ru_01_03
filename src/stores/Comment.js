import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, _START, _SUCCESS, _FAIL, LOAD_COMMENTS } from '../actions/constants'
import SimpleStore from './SimpleStore'
import { loadComments } from '../actions/comments'

class Comment extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.comment,
                        id: this.generateId()
                    })
                    break;
                case LOAD_COMMENTS + _START:
                    this.loading = true
                    break;

                case LOAD_COMMENTS + _SUCCESS:
                    response.forEach(this.__add)
                    this.loading = false
                    this.loaded = true
                    break;

                case LOAD_COMMENTS + _FAIL:
                    this.error = error
                    this.loaded = false
                    this.loading = false
                    break;

                default: return
            }
            this.emitChange()
        })
    }
}

export default Comment