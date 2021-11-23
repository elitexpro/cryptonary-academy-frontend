import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  Hidden,
  Box,
  Grid,
  FormControlLabel,
  Link,
  Card,
} from '@mui/material'
import {
  MButton,
  MInput,
  MCheckbox,
} from 'components/CustomMaterial'
import { Carousel } from 'components/Carousel'
import { Link as RouterLink } from 'react-router-dom'
import { validator } from 'helpers/validator'


const Signup = () => {
  const classes = useStyles()
  const [isChecked, setIsChecked] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationStr, setValidationStr] = useState([])


  const handleSignup = () => {
    let validation_str = []
    validation_str.push(validator(firstName, ['require']))
    validation_str.push(validator(lastName, ['require']))
    validation_str.push(validator(email, ['require', 'email']))
    validation_str.push(validator(password, ['require', 'password']))
    validation_str.push(validator(password, ['require', 'confirm_password'], confirmPassword))

    setValidationStr(validation_str)

    const isValid = validation_str.filter(item => item).length ? false : true
    if (!isValid) {
      return
    }
  }

  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={0}>
          <Grid item md={6} xs={12}>
            <div className={classes.center}>
              <div className={classes.fieldArea}>
                <p className={classes.title}>Sign up to Crypto School</p>
                <MInput
                  label='First Name'
                  placeholder='Your first Name'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  error={validationStr[0]}
                />
                <MInput
                  label='Last Name'
                  placeholder='Your last name'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  error={validationStr[1]}
                />
                <MInput
                  label='Email Address'
                  placeholder='Your email address'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  error={validationStr[2]}
                />
                <MInput
                  type='password'
                  label='Password'
                  placeholder='Your password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  error={validationStr[3]}
                />
                <MInput
                  type='password'
                  label='Confirm Password'
                  placeholder='Your confirm password'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  error={validationStr[4]}
                />

                <FormControlLabel
                  value={isChecked}
                  sx={{ mt: 2 }}
                  control={<MCheckbox color='success' />}
                  onChange={() => setIsChecked(prev => !prev)}
                  label={
                    <span className={classes.contactLink}>I accept <Link href="/terms" target="_blank">
                      terms
                    </Link> and <Link href="/terms" target="_blank">
                        privacy policy
                      </Link>
                    </span>}
                />

                <MButton
                  color='success'
                  variant='contained'
                  fullWidth
                  disabled={!isChecked}
                  className={classes.signupBtn}
                  onClick={handleSignup}
                >
                  Sign Up
                </MButton>

                <p className={classes.loginLink}>Already have an account? <RouterLink to="/login">
                  <Link component="button" variant="body2">Sign in</Link></RouterLink>
                </p>
                <p className={classes.contactLink}>Having troubles signing up? <Link href='mailto:support@cryptonary.com'>
                  Contact our support team</Link></p>
              </div>
            </div>
          </Grid>
          <Hidden mdDown>
            <Grid item md={6} className={classes.sliderArea}>
              <div className={classes.center}>
                <Card className={classes.sliderItemArea}>
                  <Carousel />
                </Card>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </>
  )
}

export default Signup
