import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/video/constants'
import apiCall from '../api/apiCall'

const doGetFilteredVideos = apiCall({
  type: CONSTANTS.GET_FILTERED_VIDEOS,
  isGhostApi: false,
  method: 'get',
  path: 'videos/search',
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_FILTERED_VIDEOS, doGetFilteredVideos)
}
