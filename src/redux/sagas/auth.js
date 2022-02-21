import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/auth/constants'
import apiCall from '../api/apiCall'

const doSignup = apiCall({
  type: CONSTANTS.DO_SIGNUP,
  method: 'post',
  path: 'auth/signup',
  success: ({ data }, action) => {
    localStorage.setItem('cryptonary_token', JSON.stringify(data.meta.tokens))
    localStorage.setItem('cryptonary_user', JSON.stringify(data.data))
  }
})

const doLogin = apiCall({
  type: CONSTANTS.DO_LOGIN,
  method: 'post',
  path: 'auth/login',
  success: ({ data }, action) => {
    const { attributes: { tokens, ...rest }, id, type } = data.data

    localStorage.setItem('cryptonary_token', JSON.stringify(tokens))
    localStorage.setItem('cryptonary_user', JSON.stringify({ id, type, ...rest }))
  }
})

const doLogout = apiCall({
  type: CONSTANTS.DO_LOGOUT,
  method: 'post',
  path: 'auth/logout',
})

const doResetPassword = apiCall({
  type: CONSTANTS.RESET_PASSWORD,
  method: 'post',
  path: 'auth/reset-password',
})

const doForgotPassword = apiCall({
  type: CONSTANTS.FORGOT_PASSWORD,
  method: 'post',
  path: 'auth/forgot-password',
})


//----------------------Pending for next step----------------

const doRefresh = apiCall({
  type: CONSTANTS.DO_REFRESH,
  method: 'post',
  path: 'auth/refresh',
  success: (res, action) => {
    localStorage.setItem('cryptonary_user', JSON.stringify(res.data))
  }
})

const doUpdateUserProfile = apiCall({
  type: CONSTANTS.UPDATE_USER_PROFILE,
  method: 'post',
  path: 'users/profile-picture',
  success: (res, action) => {
    localStorage.setItem('cryptonary_user', JSON.stringify(res.data))
  }
})

const doCheckEmailValidation = apiCall({
  type: CONSTANTS.CHECK_EMAIL_VALIDATION,
  method: 'post',
  path: 'auth/check-email-validation',
})

const doRefreshToken = apiCall({
  type: CONSTANTS.DO_REFRESH_TOKEN,
  method: 'post',
  path: 'auth/refresh-tokens',
  success: (res, action) => {
    localStorage.setItem('cryptonary_token', JSON.stringify(res.data))
  }
})

const doDeleteUser = apiCall({
  type: CONSTANTS.DELETE_AUTH_USER,
  method: 'post',
  path: 'auth/delete-user',
})

const doRequestAccountVerify = apiCall({
  type: CONSTANTS.REQUEST_ACCOUNT_VERIFY,
  method: 'get',
  path: 'auth/request-verify',
})

const doCheckAccountVerification = apiCall({
  type: CONSTANTS.CHECK_ACCOUNT_VERIFICATION,
  method: 'get',
  path: ({ payload }) => `/auth/verify-email/${payload.token}/`,
  success: (res, action) => {
    localStorage.setItem('cryptonary_user', JSON.stringify(res.data))
  }
})


export default function* rootSaga() {
  yield takeLatest(CONSTANTS.DO_SIGNUP, doSignup)
  yield takeLatest(CONSTANTS.DO_LOGIN, doLogin)
  yield takeLatest(CONSTANTS.DO_LOGOUT, doLogout)
  yield takeLatest(CONSTANTS.RESET_PASSWORD, doResetPassword)
  yield takeLatest(CONSTANTS.FORGOT_PASSWORD, doForgotPassword)

  yield takeLatest(CONSTANTS.DO_REFRESH, doRefresh)
  yield takeEvery(CONSTANTS.CHECK_EMAIL_VALIDATION, doCheckEmailValidation)
  yield takeLatest(CONSTANTS.DO_REFRESH_TOKEN, doRefreshToken)
  yield takeLatest(CONSTANTS.UPDATE_USER_PROFILE, doUpdateUserProfile)
  yield takeLatest(CONSTANTS.DELETE_AUTH_USER, doDeleteUser)
  yield takeLatest(CONSTANTS.REQUEST_ACCOUNT_VERIFY, doRequestAccountVerify)
  yield takeLatest(CONSTANTS.CHECK_ACCOUNT_VERIFICATION, doCheckAccountVerification)

}
