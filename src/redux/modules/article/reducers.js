import { handleActions } from 'redux-actions'
import { requestSuccess } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    articles: [],
    article: {},
    filteredArticles: [],
    filteredPosts: [],
    authors: [],
    totalAuthorsCount: 0,
    totalFilteredCount: 0,
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.GET_ALL_ARTICLES)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    articles: payload,
  }),

  [requestSuccess(CONSTANTS.GET_ARTICLE_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    article: payload.posts[0],
  }),

  [requestSuccess(CONSTANTS.GET_FILTERED_ARTICLES)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    filteredArticles: payload.posts,
    totalFilteredCount: payload.meta.pagination.total,
  }),

  [requestSuccess(CONSTANTS.GET_AUTHORS_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    authors: payload.users,
    totalAuthorsCount: payload.meta.pagination.total
  }),

  [CONSTANTS.SET_FILTERED_ARTICLES_ITEM_BOOK_MARK]: (state, { payload }) => {
    const { method, data } = payload
    const filteredArticles = state.filteredArticles.map(item => {
      if (method === 'MARKED') {
        if (item.id === data.attributes.itemId) {
          item.bookmarkId = data.id
          item.isBookmarked = true
        }
      } else {
        if (item.id === data.id) {
          delete item['bookmarkId']
          delete item['isBookmarked']
        }
      }
      return item
    })

    return ({
      ...state,
      filteredArticles,
    })
  },

  [CONSTANTS.SET_ARTICLE_ITEM_BOOK_MARK]: (state, { payload }) => {
    const { method, data } = payload
    const article = state.article

    if (method === 'MARKED') {
      article.bookmarkId = data.id
      article.isBookmarked = true
    } else {
      delete article['bookmarkId']
      delete article['isBookmarked']
    }

    return ({
      ...state,
      article,
    })
  },
}, getInitialState())
