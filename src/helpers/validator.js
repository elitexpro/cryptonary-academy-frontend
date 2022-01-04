import _ from 'lodash'

const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required.',
  INVALID_EMAIL: 'Email address is invalid.',
  PASSWORD: {
    LENGTH: 'Password must be at least 10 characters long.',
    DIGIT: 'Password must contain at least 1 number.',
    LOWCASE: 'Password must contain at least 1 lowercase letter.',
    UPCASE: 'Password must contain at least 1 uppercase letter.',
    SPECIAL: 'Password must contain at least 1 special character.',
    CONFIRM: 'Please confirm new Password'
  }
}

export const validator = (value, req, confirm_value) => {
  let validText = []
  req.forEach(item => {
    switch (item) {
      case 'require':
        if (_.isString(value)) {
          (!value || _.isEmpty(value)) && validText.push(VALIDATION_MESSAGES.REQUIRED)
        } else if (_.isNumber(value)) {
          value <= 0 && validText.push(VALIDATION_MESSAGES.REQUIRED)
        }
        break
      case 'email':
        !/\S+@\S+\.\S+/.test(value) && validText.push(VALIDATION_MESSAGES.INVALID_EMAIL)
        break
      case 'password':
        if (value.length < 10) {
          return validText.push(VALIDATION_MESSAGES.PASSWORD.LENGTH)
        }
        if (!value.match(/\d/)) {
          return validText.push(VALIDATION_MESSAGES.PASSWORD.DIGIT)
        }
        if (!value.match(/[a-z]/)) {
          return validText.push(VALIDATION_MESSAGES.PASSWORD.LOWCASE)
        }
        if (!value.match(/[A-Z]/)) {
          return validText.push(VALIDATION_MESSAGES.PASSWORD.UPCASE)
        }
        if (!value.match(/[!@#$%^&*)(+=._-]/)) {
          return validText.push(VALIDATION_MESSAGES.PASSWORD.SPECIAL)
        }
        break
      case 'confirm_password':
        if (value !== confirm_value) {
          return validText.push(VALIDATION_MESSAGES.PASSWORD.CONFIRM)
        }
        break
      default:
        break
    }
  })
  return validText[0]
}