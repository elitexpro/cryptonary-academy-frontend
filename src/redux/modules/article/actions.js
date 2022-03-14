import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const getAllArticles = createAction(CONSTANTS.GET_ALL_ARTICLES)
export const getArticlesByTags = createAction(CONSTANTS.GET_ARTICLES_BY_TAGS)
export const getFeaturedArticles = createAction(CONSTANTS.GET_FEATURED_ARTICLES)
export const getArticleById = createAction(CONSTANTS.GET_ARTICLE_BY_ID)
export const getLatestNews = createAction(CONSTANTS.GET_LATEST_NEWS)
export const getFilteredArticles = createAction(CONSTANTS.GET_FILTERED_ARTICLES)
