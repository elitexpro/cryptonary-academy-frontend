import { takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/favourite/constants'
import apiCall from '../api/apiCall'

const doAddToFavourites = apiCall({
  type: CONSTANTS.ADD_TO_FAVOURTIES,
  method: 'post',
  path: 'bookmarks',
})

const doGetFavouritesList = apiCall({
  type: CONSTANTS.GET_FAVOURITES_LIST,
  method: 'get',
  path: 'bookmarks',
})

const doRemoveFromFavourites = apiCall({
  type: CONSTANTS.REMOVE_FROM_FAVOURITES,
  method: 'delete',
  path: ({ payload }) => `bookmarks/${payload.id}`,
})

export default function* rootSaga() {
  yield takeEvery(CONSTANTS.ADD_TO_FAVOURTIES, doAddToFavourites)
  yield takeEvery(CONSTANTS.GET_FAVOURITES_LIST, doGetFavouritesList)
  yield takeEvery(CONSTANTS.REMOVE_FROM_FAVOURITES, doRemoveFromFavourites)
}
