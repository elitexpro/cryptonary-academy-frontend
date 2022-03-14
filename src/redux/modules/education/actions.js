import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const setEducationMediaType = createAction(CONSTANTS.SET_EDUCATION_MEDIA_TYPE)
export const setEducationSearchValue = createAction(CONSTANTS.SET_EDUCATION_SEARCH_VALUE)
export const setEducationTopicTags = createAction(CONSTANTS.SET_EDUCATION_TOPIC_TAGS)
export const setEducationReadingTime = createAction(CONSTANTS.SET_EDUCATION_READING_TIME)
export const setEducationDuration = createAction(CONSTANTS.SET_EDUCATION_DURATION)
export const clearEducationState = createAction(CONSTANTS.CLEAR_EDUCATION_STATE)
export const getBeginnerArticles = createAction(CONSTANTS.GET_BEGINNER_ARTICLES)
export const getIntermediateArticles = createAction(CONSTANTS.GET_INTERMEDIATE_ARTICLES)
export const getAdvanceArticles = createAction(CONSTANTS.GET_ADVANCE_ARTICLES)
