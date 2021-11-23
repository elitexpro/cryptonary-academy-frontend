import { handleActions } from 'redux-actions'
// import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    exploreTopics: [],
  }
}

export default handleActions({
  [CONSTANTS.SET_EXPLORE_TOPICS]: (state, { payload }) => ({
    ...state,
    exploreTopics: payload,
  }),

}, getInitialState())
