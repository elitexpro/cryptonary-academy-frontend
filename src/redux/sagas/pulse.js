import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/pulse/constants'
import apiCall from '../api/apiCall'

const doGetPulsesByDate = apiCall({
  type: CONSTANTS.GET_PULSES_BY_DATE,
  method: 'get',
  path: '/pulses',
})

const doGetLatestPulse = apiCall({
  type: CONSTANTS.GET_LATEST_PULSE,
  method: 'get',
  path: '/latest-pulse',
})


export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_PULSES_BY_DATE, doGetPulsesByDate)
  yield takeLatest(CONSTANTS.GET_LATEST_PULSE, doGetLatestPulse)
}
