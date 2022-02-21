import { all } from 'redux-saga/effects'
import global from './global'
import auth from './auth'
import article from './article'
import author from './author'
import tag from './tag'
import coin from './coin'
import video from './video'

export default function* rootSaga () {
  yield all([
    auth(),
    global(),
    article(),
    author(),
    tag(),
    coin(),
    video(),
  ])
}
