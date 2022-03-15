import { takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/news/constants'
import apiCall from '../api/apiCall'

const doGetFilteredNews = apiCall({
  type: CONSTANTS.GET_FILTERED_NEWS,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/search',
})

export default function* rootSaga() {
  yield takeEvery(CONSTANTS.GET_FILTERED_NEWS, doGetFilteredNews)
}
