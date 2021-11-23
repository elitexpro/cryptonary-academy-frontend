import _ from 'lodash'

export const validator = (value, req, confirm_value) => {
  let validText = []
  req.forEach(item => {
    switch (item) {
      case 'require':
        if (_.isString(value)) {
          (!value || _.isEmpty(value)) && validText.push('This field must be required.')
        } else if (_.isNumber(value)) {
          value <= 0 && validText.push('This field must be required.')
        }
        break
      case 'email':
        !/\S+@\S+\.\S+/.test(value) && validText.push('Email address is invalid.')
        break
      case 'password':
        if (value.length < 8) {
          return validText.push('password must be at least 8 characters')
        }
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          return validText.push('password must contain at least 1 letter and 1 number.')
        }
        break
      case 'confirm_password':
        if (value !== confirm_value) {
          return validText.push('Please confirm new password.')
        }
        break
      default:
        break
    }
  })
  return validText[0]
}