import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    authors: [],
    author: {},
  }
}

export default handleActions({
  [CONSTANTS.GET_ALL_AUTHORS]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ALL_AUTHORS)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    authors: payload,
  }),
  [requestFail(CONSTANTS.GET_ALL_AUTHORS)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),

  [CONSTANTS.GET_AUTOR_BY_ID]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_AUTOR_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    author: payload.authors[0],
  }),
  [requestFail(CONSTANTS.GET_AUTOR_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
}, getInitialState())
