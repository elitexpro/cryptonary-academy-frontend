import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/global/constants'
import apiCall from '../api/apiCall'

const doGetCoinRatingsLiveData = apiCall({
  type: CONSTANTS.GET_COIN_RATINGS_LIVE_DATA,
  method: 'get',
  path:
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano&vs_currencies=usd&include_24hr_change=true`,
})

export default function* rootSaga() {
  // yield takeLatest(CONSTANTS.GET_TRANSCRIPT, doGetTranscript)
  yield takeLatest(CONSTANTS.GET_COIN_RATINGS_LIVE_DATA, doGetCoinRatingsLiveData)
}
