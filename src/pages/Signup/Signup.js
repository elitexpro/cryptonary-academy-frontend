import React, { useState } from 'react'
import {
  Hidden,
  Box,
  Grid,
  FormControlLabel,
  Link,
  Card,
  Typography,
  Stack,
  Container,
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
    <Container maxWidth="xl">
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <Stack justifyContent="center" alignItems="center">
            <Box sx={{ maxWidth: '400px', width: '100%', my: 4 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>Sign up to Crypto School</Typography>
              </Box>
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
                  <Typography variant="subTitle" sx={{ color: "#858585" }}>I accept <Link
                    href="/terms" target="_blank" color="#000">terms
                  </Link> and <Link href="/terms" target="_blank" color="#000">privacy policy</Link>
                  </Typography>
                }
              />

              <MButton
                color='success'
                variant='contained'
                fullWidth
                disabled={!isChecked}
                sx={{ height: 48, my: 5, color: '#FFF', fontSize: 16 }}
                onClick={handleSignup}
              >
                Sign Up
              </MButton>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subTitle1" sx={{ color: "#555" }}>Already have an account? <RouterLink to="/login">
                  <Link component="button" color="#62BE5F" sx={{ fontSize: "1.125rem" }}>Sign in</Link></RouterLink>
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", mt: 10 }}>
                <Typography variant="subTitle" sx={{ color: "#858585" }}>Having troubles signing up? <Link
                  href='mailto:support@cryptonary.com' color="#555">
                  Contact our support team</Link>
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Hidden mdDown>
          <Grid item md={6} sx={{ backgroundColor: '#F6F8FE' }}>
            <Stack justifyContent="center" alignItems="center" sx={{ position: 'sticky', top: 'calc((100vh - 550px) / 2 )' }}>
              <Card sx={{
                mb: 3,
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                width: '100%',
                maxWidth: 550,
                height: 550,
              }}>
                <Carousel />
              </Card>
            </Stack>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default Signup
