import { takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/education/constants'
import apiCall from '../api/apiCall'

const doGetBeginnerArticles = apiCall({
  type: CONSTANTS.GET_BEGINNER_ARTICLES,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/search',
})

const doGetIntermediateArticles = apiCall({
  type: CONSTANTS.GET_INTERMEDIATE_ARTICLES,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/search',
})

const doGetAdvanceArticles = apiCall({
  type: CONSTANTS.GET_ADVANCE_ARTICLES,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/search',
})


export default function* rootSaga() {
  yield takeEvery(CONSTANTS.GET_BEGINNER_ARTICLES, doGetBeginnerArticles)
  yield takeEvery(CONSTANTS.GET_INTERMEDIATE_ARTICLES, doGetIntermediateArticles)
  yield takeEvery(CONSTANTS.GET_ADVANCE_ARTICLES, doGetAdvanceArticles)
}
