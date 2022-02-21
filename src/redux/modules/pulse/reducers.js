import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    pulse: [],
  }
}

export default handleActions({
  [CONSTANTS.GET_PULSES_BY_DATE]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_PULSES_BY_DATE)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    pulse: payload,
  }),
  [requestFail(CONSTANTS.GET_PULSES_BY_DATE)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),

}, getInitialState())
