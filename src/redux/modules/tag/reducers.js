import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    tags: [],
    tag: {},
  }
}

export default handleActions({
  [CONSTANTS.GET_ALL_TAGS]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ALL_TAGS)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    tags: payload.tags,
  }),
  [requestFail(CONSTANTS.GET_ALL_TAGS)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),

  [CONSTANTS.GET_TAG_BY_ID]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_TAG_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    tag: payload.tags[0],
  }),
  [requestFail(CONSTANTS.GET_TAG_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
}, getInitialState())
