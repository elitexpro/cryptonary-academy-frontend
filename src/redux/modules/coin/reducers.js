import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    ratings: [],
    rating_types: [],
    current_coin: {},
    coin_news: [],
    totalPages: 0,
    newsTotalPages: 0,
  }
}

export default handleActions({
  [CONSTANTS.GET_COIN_RATING_LIST]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_COIN_RATING_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    ratings: payload.data,
    totalPages: payload.meta.pagination.totalPages,
  }),
  [requestFail(CONSTANTS.GET_COIN_RATING_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),

  [CONSTANTS.GET_COIN_RATING_TYPE_LIST]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_COIN_RATING_TYPE_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    rating_types: payload,
  }),
  [requestFail(CONSTANTS.GET_COIN_RATING_TYPE_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),

  [CONSTANTS.GET_COIN_BY_ID]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_COIN_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    current_coin: payload.data.attributes,
  }),
  [requestFail(CONSTANTS.GET_COIN_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
  [CONSTANTS.GET_COIN_NEWS]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_COIN_NEWS)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    coin_news: payload.posts,
    newsTotalPages: payload.meta.pagination.total,
  }),
  [requestFail(CONSTANTS.GET_COIN_NEWS)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
}, getInitialState())
