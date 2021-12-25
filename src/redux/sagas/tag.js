import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/tag/constants'
import apiCall from '../api/apiCall'

const doGetAllAuthors = apiCall({
  type: CONSTANTS.GET_ALL_TAGS,
  method: 'get',
  path: 'ghost/tags',
})

const doGetAuthorById = apiCall({
  type: CONSTANTS.GET_TAG_BY_ID,
  method: 'get',
  path: ({ payload }) => `ghost/tags/${payload.id}/`,
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_ALL_TAGS, doGetAllAuthors)
  yield takeLatest(CONSTANTS.GET_TAG_BY_ID, doGetAuthorById)
}
