import $ from 'jquery'

export function loadForArticle({ id }) {
    return $.get(`/api/comment?article=${id}`)
}

export function loadPart({ id }) {
    return $.get(`/api/comment?limit=10&offset=${id}`)
}
