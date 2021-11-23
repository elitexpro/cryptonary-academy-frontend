const authInfo = () => {
  const authStore = {
    tokens: JSON.parse(localStorage.getItem('cryptonary_token')),
    user: JSON.parse(localStorage.getItem('cryptonary_user')),
  }
  return authStore
}

const authClear = () => {
  localStorage.removeItem('cryptonary_token')
  localStorage.removeItem('cryptonary_user')
}

export {
  authInfo,
  authClear,
}