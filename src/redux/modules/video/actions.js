import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const getFilteredVideos = createAction(CONSTANTS.GET_FILTERED_VIDEOS)
