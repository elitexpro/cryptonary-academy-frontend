import { handleActions } from 'redux-actions'
import * as CONSTANTS from './constants'
import { requestSuccess } from 'redux/api/request'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    searchValue: '',
    mediaType: 'article',
    topicTags: [],
    tabTag: 'all',
    readingTime: null,
    duration: null,
    filteredTagsName: [],
    articles: [],
    videos: [],
    educationMetaInfo: {},
  }
}

export default handleActions({
  [CONSTANTS.SET_EDUCATION_TAB_TAG]: (state, { payload }) => ({
    ...state,
    tabTag: payload
  }),
  [CONSTANTS.SET_EDUCATION_MEDIA_TYPE]: (state, { payload }) => ({
    ...state,
    mediaType: payload
  }),
  [CONSTANTS.SET_EDUCATION_SEARCH_VALUE]: (state, { payload }) => ({
    ...state,
    searchValue: payload
  }),
  [CONSTANTS.SET_EDUCATION_READING_TIME]: (state, { payload }) => ({
    ...state,
    readingTime: payload
  }),
  [CONSTANTS.SET_EDUCATION_DURATION]: (state, { payload }) => ({
    ...state,
    duration: payload
  }),
  [CONSTANTS.SET_EDUCATION_TOPIC_TAGS]: (state, { payload }) => ({
    ...state,
    filteredTagsName: payload.filter(item => item.isSelected).map(item => item.slug),
    topicTags: payload
  }),
  [CONSTANTS.CLEAR_EDUCATION_STATE]: (state, { payload }) => ({
    ...state,
    searchValue: '',
    mediaType: 'unset',
    topicTags: [],
    articles: [],
    videos: [],
  }),

  [requestSuccess(CONSTANTS.GET_EDUCATION_ARTICLES)]: (state, { payload }) => ({
    ...state,
    articles: payload.posts,
    educationMetaInfo: payload.meta,
  }),
  [requestSuccess(CONSTANTS.GET_EDUCATION_VIDEOS)]: (state, { payload }) => ({
    ...state,
    videos: payload.data,
    educationMetaInfo: payload.meta,
  }),

  [CONSTANTS.SET_EDUCATION_ITEM_BOOK_MARK]: (state, { payload }) => {
    const { method, data } = payload
    const articles = state.articles.map(item => {
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
      articles,
    })
  },
}, getInitialState())
