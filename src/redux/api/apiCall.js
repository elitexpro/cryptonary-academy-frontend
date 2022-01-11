import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { get } from 'lodash'
import { requestFail, requestPending, requestSuccess } from './request'
import { SERVER_BASE_URL, CG_AUTH_TOKEN } from 'helpers/utils'

const defaultHeaders = (isGhostApi = false) => {
  const auth = localStorage.getItem('cryptonary_token')
  axios.defaults.baseURL = SERVER_BASE_URL
  let headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  }

  if (auth) {
    const token = JSON.parse(auth).accessToken
    headers['Authorization'] = 'Bearer ' + token
  }

  if (isGhostApi) {
    headers['CG-auth-token'] = CG_AUTH_TOKEN
  }

  return headers
}

export default ({
  type,
  isGhostApi = false,
  method, // one of 'get', 'post', 'put', 'delete'
  path,
  headers,
  success,
  fail,
  payloadOnSuccess,
  payloadOnFail
}) => function* (action) {
  const {
    body,
    params,
    success: successCallback,
    fail: failCallback
  } = (action.payload || {})

  try {
    yield put({
      type: requestPending(type)
    })

    const res = yield call(axios.request, {
      url: typeof path === 'function' ? path(action) : path,
      method: method.toLowerCase(),
      headers: Object.assign({}, defaultHeaders(isGhostApi), headers),
      data: body,
      params
    })

    successCallback && successCallback(res)
    success && success(res, action)

    yield put({
      type: requestSuccess(type),
      payload: payloadOnSuccess ? payloadOnSuccess(res.data, action) : res.data
    })
  } catch (err) {
    const errRes = get(err, 'response', err)

    if (errRes.data && (errRes.data.code === 401 && errRes.data.message === 'Please authenticate')) {
      yield put({
        type: 'IS_UNAUTHORIZED',
      })
    }

    failCallback && failCallback(errRes)
    fail && fail(errRes)

    yield put({
      type: requestFail(type),
      payload: payloadOnFail ? payloadOnFail(errRes, action) : errRes
    })
  }
}
