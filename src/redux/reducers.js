import { combineReducers } from 'redux'
import global from './modules/global/reducers'
import auth from './modules/auth/reducers'
import article from './modules/article/reducers'
import author from './modules/author/reducers'
import tag from './modules/tag/reducers'
import coin from './modules/coin/reducers'
import video from './modules/video/reducers'
import pulse from './modules/pulse/reducers'
import education from './modules/education/reducers'
import alpha from './modules/alpha/reducers'
import news from './modules/news/reducers'

export default combineReducers({
  auth,
  global,
  article,
  author,
  tag,
  coin,
  video,
  pulse,
  education,
  alpha,
  news,
})
