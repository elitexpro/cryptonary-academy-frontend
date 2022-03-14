import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    videos: [],
    video: {},
    filteredVideos: [],
    beginnerVideos: [],
    intermediateVideos: [],
    advanceVideos: [],
  }
}

export default handleActions({
  [CONSTANTS.GET_FILTERED_VIDEOS]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_FILTERED_VIDEOS)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    filteredVideos: payload.data,
  }),
  [requestFail(CONSTANTS.GET_FILTERED_VIDEOS)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
  
  [requestSuccess(CONSTANTS.GET_BEGINNER_VIDEOS)]: (state, { payload }) => ({
    ...state,
    beginnerVideos: payload.data,
  }),
  [requestSuccess(CONSTANTS.GET_INTERMEDIATE_VIDEOS)]: (state, { payload }) => ({
    ...state,
    intermediateVideos: payload.data,
  }),
  [requestSuccess(CONSTANTS.GET_ADVANCE_VIDEOS)]: (state, { payload }) => ({
    ...state,
    advanceVideos: payload.data,
  }),
}, getInitialState())
