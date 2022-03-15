import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const setNewsSortBy = createAction(CONSTANTS.SET_NEWS_SORTBY)
export const setNewsSearchValue = createAction(CONSTANTS.SET_NEWS_SEARCH_VALUE)
export const setNewsTag = createAction(CONSTANTS.SET_NEWS_TAG)
export const clearNewsState = createAction(CONSTANTS.CLEAR_NEWS_STATE)
export const getFilteredNews= createAction(CONSTANTS.GET_FILTERED_NEWS)
