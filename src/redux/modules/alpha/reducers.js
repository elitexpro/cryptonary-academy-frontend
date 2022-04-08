import { handleActions } from 'redux-actions'
import { requestSuccess } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    alphaList: [],
    alphaTags: [],
    latestAlpha: [],
    total: 0,
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.GET_ALPHA_LIST)]: (state, { payload }) => ({
    ...state,
    alphaList: payload.posts,
    total: payload.meta.pagination.total
  }),
  [requestSuccess(CONSTANTS.GET_ALPHA_TAGS)]: (state, { payload }) => ({
    ...state,
    alphaTags: payload,
  }),
  [requestSuccess(CONSTANTS.GET_LATEST_ALPHA_LIST)]: (state, { payload }) => ({
    ...state,
    latestAlpha: payload.posts,
  }),

  [CONSTANTS.SET_ALPHA_ITEM_BOOK_MARK]: (state, { payload }) => {
    const { method, data } = payload
    const alphaList = state.alphaList.map(item => {
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
      alphaList,
    })
  },
}, getInitialState())
