import { handleActions } from 'redux-actions'
import { requestSuccess } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    favourites: [],
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.GET_FAVOURITES_LIST)]: (state, { payload }) => ({
    ...state,
    favourites: payload.data,
  }),
}, getInitialState())
