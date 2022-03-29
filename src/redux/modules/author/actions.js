import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const getAllAuthors = createAction(CONSTANTS.GET_ALL_AUTHORS)
export const getAuthorById = createAction(CONSTANTS.GET_AUTOR_BY_ID)
export const getLatestArticlesOfAuthor = createAction(CONSTANTS.GET_LATEST_ARTICLES)
