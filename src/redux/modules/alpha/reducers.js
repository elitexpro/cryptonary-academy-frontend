import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    alphaList: [],
    alphaTags: [],
    latestAlpha: [],
    total: 0,
  }
}

export default handleActions({
  [CONSTANTS.GET_ALPHA_LIST]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ALPHA_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    alphaList: payload.posts,
    total: payload.meta.pagination.total
  }),
  [requestFail(CONSTANTS.GET_ALPHA_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
  [CONSTANTS.GET_ALPHA_TAGS]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ALPHA_TAGS)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    alphaTags: payload,
  }),
  [requestFail(CONSTANTS.GET_ALPHA_TAGS)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
  [CONSTANTS.GET_LATEST_ALPHA_LIST]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_LATEST_ALPHA_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    latestAlpha: payload.posts,
  }),
  [requestFail(CONSTANTS.GET_LATEST_ALPHA_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
}, getInitialState())
