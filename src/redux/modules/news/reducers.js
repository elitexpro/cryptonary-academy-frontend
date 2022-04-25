import { handleActions } from 'redux-actions'
import * as CONSTANTS from './constants'
import { requestSuccess } from 'redux/api/request'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    searchValue: '',
    tag: 'all',
    sortBy: 'unset',
    filteredNews: [],
  }
}

export default handleActions({
  [CONSTANTS.SET_NEWS_SORTBY]: (state, { payload }) => ({
    ...state,
    sortBy: payload,
    filteredNews: [],
  }),
  [CONSTANTS.SET_NEWS_SEARCH_VALUE]: (state, { payload }) => ({
    ...state,
    searchValue: payload,
    filteredNews: [],
  }),
  [CONSTANTS.SET_NEWS_TAG]: (state, { payload }) => ({
    ...state,
    tag: payload,
    filteredNews: [],
  }),
  [CONSTANTS.CLEAR_NEWS_STATE]: (state, { payload }) => ({
    ...state,
    searchValue: '',
    sortBy: 'unset',
    tag: 'all',
  }),
  [requestSuccess(CONSTANTS.GET_FILTERED_NEWS)]: (state, { payload }) => {
    let { filteredNews } = state
    filteredNews = filteredNews.concat(payload.posts)

    return {
      ...state,
      filteredNews,
    }
  },

  [CONSTANTS.SET_NEWS_ITEM_BOOK_MARK]: (state, { payload }) => {
    const { method, data } = payload
    const filteredNews = state.filteredNews.map(item => {
      if (method === 'MARKED') {
        if (item.id === data.attributes.itemId) {
          item.bookmarkId = parseInt(data.id)
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
      filteredNews,
    })
  },
}, getInitialState())
