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
    filteredTagsName: payload.filter(item => item.isSelected).map(item => item.name),
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
  }),
  [requestSuccess(CONSTANTS.GET_EDUCATION_VIDEOS)]: (state, { payload }) => ({
    ...state,
    videos: payload.data,
  }),
}, getInitialState())
