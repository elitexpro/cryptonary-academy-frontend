import { handleActions } from 'redux-actions'
import * as CONSTANTS from './constants'
import { requestSuccess } from 'redux/api/request'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    searchValue: '',
    mediaType: 'unset',
    topicTags: [],
    readingTime: null,
    duration: null,
    filteredTagsName: [],
    beginnerArticles: [],
    intermediateArticles: [],
    advanceArticles: [],
  }
}

export default handleActions({
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
    beginnerArticles: [],
    intermediateArticles: [],
    advanceArticles: [],
  }),

  [requestSuccess(CONSTANTS.GET_BEGINNER_ARTICLES)]: (state, { payload }) => ({
    ...state,
    beginnerArticles: payload.posts,
  }),
  [requestSuccess(CONSTANTS.GET_INTERMEDIATE_ARTICLES)]: (state, { payload }) => ({
    ...state,
    intermediateArticles: payload.posts,
  }),
  [requestSuccess(CONSTANTS.GET_ADVANCE_ARTICLES)]: (state, { payload }) => ({
    ...state,
    advanceArticles: payload.posts,
  }),
}, getInitialState())
