import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const getCoinRatingList = createAction(CONSTANTS.GET_COIN_RATING_LIST)
export const getCoinRatingTypeList = createAction(CONSTANTS.GET_COIN_RATING_TYPE_LIST)
export const getCoinById = createAction(CONSTANTS.GET_COIN_BY_ID)
export const getCoinNews = createAction(CONSTANTS.GET_COIN_NEWS)
