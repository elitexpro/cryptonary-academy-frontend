import { takeLatest, takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/article/constants'
import apiCall from '../api/apiCall'

const doGetAllArticles = apiCall({
  type: CONSTANTS.GET_ALL_ARTICLES,
  isGhostApi: true,
  method: 'get',
  path: 'ghost/articles',
})

const doGetArticleById = apiCall({
  type: CONSTANTS.GET_ARTICLE_BY_ID,
  isGhostApi: true,
  method: 'get',
  path: ({ payload }) => `ghost/articles/${payload.id}/`,
})

const doGetFeaturedArticles = apiCall({
  type: CONSTANTS.GET_FEATURED_ARTICLES,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/featured',
})

const doGetLatestNews = apiCall({
  type: CONSTANTS.GET_ALL_ARTICLES,
  isGhostApi: true,
  method: 'get',
  path: 'ghost/articles/latest-news',
})

const doGetFilteredArticles = apiCall({
  type: CONSTANTS.GET_FILTERED_ARTICLES,
  isGhostApi: true,
  method: 'post',
  path: 'ghost/articles/search',
})

export default function* rootSaga() {
  yield takeEvery(CONSTANTS.GET_ALL_ARTICLES, doGetAllArticles)
  yield takeLatest(CONSTANTS.GET_ARTICLE_BY_ID, doGetArticleById)
  yield takeEvery(CONSTANTS.GET_FEATURED_ARTICLES, doGetFeaturedArticles)
  yield takeEvery(CONSTANTS.GET_LATEST_NEWS, doGetLatestNews)
  yield takeEvery(CONSTANTS.GET_FILTERED_ARTICLES, doGetFilteredArticles)
}
