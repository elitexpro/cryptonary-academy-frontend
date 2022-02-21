import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  let authedUser = JSON.parse(localStorage.getItem('cryptonary_user') || null)
  let authedToken = JSON.parse(localStorage.getItem('cryptonary_token') || null)

  return {
    me: authedUser,
    token: authedToken,
    status: 'INIT',
    authStatus: 'INIT',
    error: null,
  }
}

export default handleActions({
  [CONSTANTS.DO_SIGNUP]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.DO_SIGNUP)]: (state, { payload }) => {
    return ({
      ...state,
      status: 'SUCCESS',
      me: payload.data,
      token: payload.meta.tokens,
    })
  },
  [requestFail(CONSTANTS.DO_SIGNUP)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
    authStatus: 'INIT',
  }),

  [CONSTANTS.DO_LOGIN]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
    authStatus: 'INIT',
  }),
  [requestSuccess(CONSTANTS.DO_LOGIN)]: (state, { payload }) => {
    const { attributes: { tokens, ...rest }, id, type } = payload.data
    return ({
      ...state,
      status: 'SUCCESS',
      me: { id, type, ...rest },
      token: tokens,
    })
  },
  [requestFail(CONSTANTS.DO_LOGIN)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    me: null,
    token: null,
    error: payload,
  }),

  [CONSTANTS.DO_REFRESH]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.DO_REFRESH)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    me: payload.data,
  }),
  [requestFail(CONSTANTS.DO_REFRESH)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    me: null,
    error: payload
  }),

  [CONSTANTS.UPDATE_USER_PROFILE]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.UPDATE_USER_PROFILE)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    me: payload.data.data,
    token: payload.data.meta.tokens,
  }),
  [requestFail(CONSTANTS.UPDATE_USER_PROFILE)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    me: null,
    token: null,
    error: payload
  }),

  [CONSTANTS.DO_LOGOUT]: (state, { payload }) => ({
    ...state,
    status: 'INIT',
    me: null,
    token: null,
    error: null,
    authStatus: 'INIT',
  }),

  [requestSuccess(CONSTANTS.DO_REFRESH_TOKEN)]: (state, { payload }) => ({
    ...state,
    token: payload.tokens,
  }),

  [CONSTANTS.DELETE_AUTH_USER]: (state, { payload }) => ({
    ...state,
    status: 'INIT',
    me: null,
    token: null,
    error: null
  }),

  [requestSuccess(CONSTANTS.CHECK_ACCOUNT_VERIFICATION)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    me: payload.data,
  }),

  [CONSTANTS.IS_UNAUTHORIZED]: (state, { payload }) => ({
    ...state,
    authStatus: 'UNAUTHORIZED',
  }),


}, getInitialState())
