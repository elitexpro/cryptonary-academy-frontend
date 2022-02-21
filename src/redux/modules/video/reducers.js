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
    filteredVideos: payload,
  }),
  [requestFail(CONSTANTS.GET_FILTERED_VIDEOS)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
}, getInitialState())
