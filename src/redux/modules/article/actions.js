import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const getAllArticles = createAction(CONSTANTS.GET_ALL_ARTICLES)
export const getArticleById = createAction(CONSTANTS.GET_ARTICLE_BY_ID)
