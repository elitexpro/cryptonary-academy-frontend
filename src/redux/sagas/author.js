import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/author/constants'
import apiCall from '../api/apiCall'

const doGetAllAuthors = apiCall({
  type: CONSTANTS.GET_ALL_AUTHORS,
  isGhostApi: true,
  method: 'get',
  path: 'ghost/authors',
})

const doGetAuthorById = apiCall({
  type: CONSTANTS.GET_AUTOR_BY_ID,
  isGhostApi: true,
  method: 'get',
  path: ({ payload }) => `ghost/authors/${payload.id}/`,
})

const doGetLatestArticles = apiCall({
  type: CONSTANTS.GET_LATEST_ARTICLES,
  isGhostApi: true,
  method: 'get',
  path: ({ payload }) => `ghost/authors/${payload.slug}/articles`,
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_ALL_AUTHORS, doGetAllAuthors)
  yield takeLatest(CONSTANTS.GET_AUTOR_BY_ID, doGetAuthorById)
  yield takeLatest(CONSTANTS.GET_LATEST_ARTICLES, doGetLatestArticles)
}
