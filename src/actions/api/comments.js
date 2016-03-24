import $ from 'jquery'

export function loadForArticle({ id }) {
    return $.get(`/api/comment?article=${id}`)
}

export function loadPart({ id }) {
    console.info('api --- ', id);
    return $.get(`/api/comment?limit=10&offset=${id}`)
}
