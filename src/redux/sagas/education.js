import { takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/education/constants'
import apiCall from '../api/apiCall'

const doGetEducationArticles = apiCall({
  type: CONSTANTS.GET_EDUCATION_ARTICLES,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/search',
})

const doGetEducationVideos = apiCall({
  type: CONSTANTS.GET_EDUCATION_VIDEOS,
  method: 'get',
  path: 'videos/search',
})


export default function* rootSaga() {
  yield takeEvery(CONSTANTS.GET_EDUCATION_ARTICLES, doGetEducationArticles)
  yield takeEvery(CONSTANTS.GET_EDUCATION_VIDEOS, doGetEducationVideos)
}
