import { all } from 'redux-saga/effects'
import global from './global'
import auth from './auth'
import article from './article'
import author from './author'

export default function* rootSaga () {
  yield all([
    auth(),
    global(),
    article(),
    author(),
  ])
}
