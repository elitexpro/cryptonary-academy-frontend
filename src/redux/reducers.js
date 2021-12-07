import { combineReducers } from 'redux'
import global from './modules/global/reducers'
import article from './modules/article/reducers'

export default combineReducers({
  global,
  article
})
