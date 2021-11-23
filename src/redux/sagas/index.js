import { all } from 'redux-saga/effects'
import global from './global'
import auth from './auth'

export default function* rootSaga () {
  yield all([
    auth(),
    global()
  ])
}
