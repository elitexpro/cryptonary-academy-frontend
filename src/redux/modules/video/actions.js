import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const getFilteredVideos = createAction(CONSTANTS.GET_FILTERED_VIDEOS)
export const getBeginnerVideos = createAction(CONSTANTS.GET_BEGINNER_VIDEOS)
export const getIntermediateVideos = createAction(CONSTANTS.GET_INTERMEDIATE_VIDEOS)
export const getAdvanceVideos = createAction(CONSTANTS.GET_ADVANCE_VIDEOS)
export const getVideoById = createAction(CONSTANTS.GET_VIDEO_BY_ID)
export const getRelatedVideos = createAction(CONSTANTS.GET_RELATED_VIDEOS)
