import { takeLatest, takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/video/constants'
import apiCall from '../api/apiCall'

const doGetFilteredVideos = apiCall({
  type: CONSTANTS.GET_FILTERED_VIDEOS,
  method: 'post',
  path: 'videos/search',
})

const doGetBeginnerVideos = apiCall({
  type: CONSTANTS.GET_BEGINNER_VIDEOS,
  method: 'post',
  path: 'videos/search',
})

const doGetIntermediateVideos = apiCall({
  type: CONSTANTS.GET_INTERMEDIATE_VIDEOS,
  method: 'post',
  path: 'videos/search',
})

const doGetAdvanceVideos = apiCall({
  type: CONSTANTS.GET_ADVANCE_VIDEOS,
  method: 'post',
  path: 'videos/search',
})

const doGetVideoById = apiCall({
  type: CONSTANTS.GET_VIDEO_BY_ID,
  method: 'get',
  path: ({ payload }) => `videos/${payload.id}`,
})

const doGetRelatedVideos = apiCall({
  type: CONSTANTS.GET_RELATED_VIDEOS,
  method: 'post',
  path: 'videos/search',
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_FILTERED_VIDEOS, doGetFilteredVideos)
  yield takeEvery(CONSTANTS.GET_BEGINNER_VIDEOS, doGetBeginnerVideos)
  yield takeEvery(CONSTANTS.GET_INTERMEDIATE_VIDEOS, doGetIntermediateVideos)
  yield takeEvery(CONSTANTS.GET_ADVANCE_VIDEOS, doGetAdvanceVideos)
  yield takeEvery(CONSTANTS.GET_VIDEO_BY_ID, doGetVideoById)
  yield takeEvery(CONSTANTS.GET_RELATED_VIDEOS, doGetRelatedVideos)
}
