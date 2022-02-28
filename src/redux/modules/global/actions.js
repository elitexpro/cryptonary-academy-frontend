import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const setExploreTopics = createAction(CONSTANTS.SET_EXPLORE_TOPICS)
export const setPulsePinDate = createAction(CONSTANTS.SET_PULSE_PIN_DATE)
export const setFilteredPosts = createAction(CONSTANTS.SET_FILTERED_POSTS)
