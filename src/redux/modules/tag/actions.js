import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const getAllTags = createAction(CONSTANTS.GET_ALL_TAGS)
export const getTagById = createAction(CONSTANTS.GET_TAG_BY_ID)
