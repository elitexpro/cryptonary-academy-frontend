import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const setEducationMediaType = createAction(CONSTANTS.SET_EDUCATION_MEDIA_TYPE)
export const setEducationSearchValue = createAction(CONSTANTS.SET_EDUCATION_SEARCH_VALUE)
export const setEducationTopicTags = createAction(CONSTANTS.SET_EDUCATION_TOPIC_TAGS)
export const setEducationReadingTime = createAction(CONSTANTS.SET_EDUCATION_READING_TIME)
export const setEducationTabTag = createAction(CONSTANTS.SET_EDUCATION_TAB_TAG)
export const setEducationDuration = createAction(CONSTANTS.SET_EDUCATION_DURATION)
export const clearEducationState = createAction(CONSTANTS.CLEAR_EDUCATION_STATE)
export const getEducationArticles = createAction(CONSTANTS.GET_EDUCATION_ARTICLES)
export const getEducationVideos = createAction(CONSTANTS.GET_EDUCATION_VIDEOS)