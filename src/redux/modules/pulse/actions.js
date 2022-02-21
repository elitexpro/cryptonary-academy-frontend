import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const getPulsesByDate = createAction(CONSTANTS.GET_PULSES_BY_DATE)
export const getLatestPulse = createAction(CONSTANTS.GET_LATEST_PULSE)
