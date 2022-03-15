import { handleActions } from 'redux-actions'
import * as CONSTANTS from './constants'
// import { requestSuccess } from 'redux/api/request'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    searchValue: '',
    tag: 'all',
    sortBy: 'unset',
  }
}

export default handleActions({
  [CONSTANTS.SET_NEWS_SORTBY]: (state, { payload }) => ({
    ...state,
    sortBy: payload
  }),
  [CONSTANTS.SET_NEWS_SEARCH_VALUE]: (state, { payload }) => ({
    ...state,
    searchValue: payload
  }),
  [CONSTANTS.SET_NEWS_TAG]: (state, { payload }) => ({
    ...state,
    tag: payload
  }),
  [CONSTANTS.CLEAR_NEWS_STATE]: (state, { payload }) => ({
    ...state,
    searchValue: '',
    sortBy: 'unset',
    tag: 'all',
  }),
}, getInitialState())
