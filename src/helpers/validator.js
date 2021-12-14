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
        if (value.length < 10) {
          return validText.push('password must be at least 10 characters')
        }
        if (!value.match(/\d/)) {
          return validText.push('password must contain at least 1 number')
        }
        if (!value.match(/[a-z]/)) {
          return validText.push('password must contain at least 1 lowercase letter')
        }
        if (!value.match(/[A-Z]/)) {
          return validText.push('password must contain at least 1 uppercase letter')
        }
        if (!value.match(/[!@#$%^&*)(+=._-]/)) {
          return validText.push('password must contain at least 1 special letter')
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