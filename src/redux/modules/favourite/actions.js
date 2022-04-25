import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const addToFavourites = createAction(CONSTANTS.ADD_TO_FAVOURTIES)
export const getFavouritesList = createAction(CONSTANTS.GET_FAVOURITES_LIST)
export const removeFromFavourites = createAction(CONSTANTS.REMOVE_FROM_FAVOURITES)
export const removeBookMarkFromFavouritesItem = createAction(CONSTANTS.REMOVE_BOOKMARK_FROM_FAVOURITES)
