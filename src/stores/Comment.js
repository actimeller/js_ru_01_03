import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_PART_OF_COMMENTS, _START ,_SUCCESS } from '../actions/constants'
import SimpleStore from './SimpleStore'
import { loadPartOfComments } from '../actions/comments'

class Comment extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.comment,
                        id: this.generateId()
                    })
                    break;

                case LOAD_COMMENTS_FOR_ARTICLE + _SUCCESS:
                    response.forEach(this.__add)
                    break;

                case LOAD_PART_OF_COMMENTS + _START:
                    this.loading = true
                    break;

                case LOAD_PART_OF_COMMENTS + _SUCCESS:
                    response.records.forEach(this.__add)
                    //лучше сохранять какую именно стрницу грузишь
                    this.loading = false
                    this.loaded = true
                    break;
                default: return
            }
            this.emitChange()

        })
    }
    getOrLoadComments(id) {
        if (!this.loaded && !this.loading) loadPartOfComments({id: id})
        return this.getAll()
    }
}

export default Comment
