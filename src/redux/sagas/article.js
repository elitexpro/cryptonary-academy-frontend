import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/article/constants'
import apiCall from '../api/apiCall'

const doGetAllArticles = apiCall({
  type: CONSTANTS.GET_ALL_ARTICLES,
  method: 'get',
  path: 'ghost/articles',
})

const doGetArticleById = apiCall({
  type: CONSTANTS.GET_ARTICLE_BY_ID,
  method: 'get',
  path: ({ payload }) => `ghost/articles/${payload.id}/`,
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_ALL_ARTICLES, doGetAllArticles)
  yield takeLatest(CONSTANTS.GET_ARTICLE_BY_ID, doGetArticleById)
}
