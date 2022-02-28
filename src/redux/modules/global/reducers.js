import { handleActions } from 'redux-actions'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    isLoading: false,
    pulsePinDate: Date.now(),
    status: 'INIT',
    error: null,
    exploreTopics: [],
    filteredPosts: [],
  }
}

export default handleActions({
  [CONSTANTS.SET_EXPLORE_TOPICS]: (state, { payload }) => ({
    ...state,
    exploreTopics: payload,
  }),
  [CONSTANTS.SET_PULSE_PIN_DATE]: (state, { payload }) => ({
    ...state,
    pulsePinDate: payload,
  }),
  [CONSTANTS.SET_FILTERED_POSTS]: (state, { payload }) => ({
    ...state,
    filteredPosts: payload,
  }),

}, getInitialState())
