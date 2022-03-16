import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/alpha/constants'
import apiCall from '../api/apiCall'

const doGetAlphaList = apiCall({
  type: CONSTANTS.GET_ALPHA_LIST,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/alpha-articles',
})

const doGetAlphaTags = apiCall({
  type: CONSTANTS.GET_ALPHA_TAGS,
  isGhostApi: true,
  method: 'get',
  path: 'ghost/articles/alpha-tags',
})

const doGetLatestAlphaList = apiCall({
  type: CONSTANTS.GET_LATEST_ALPHA_LIST,
  isGhostApi: true,
  method: 'get',
  path: 'ghost/articles/latest-alpha-articles',
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_ALPHA_LIST, doGetAlphaList)
  yield takeLatest(CONSTANTS.GET_ALPHA_TAGS, doGetAlphaTags)
  yield takeLatest(CONSTANTS.GET_LATEST_ALPHA_LIST, doGetLatestAlphaList)
}
