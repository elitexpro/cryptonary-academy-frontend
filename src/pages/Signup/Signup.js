import React, { useState, useCallback } from 'react'
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
  MAlert,
} from 'components/CustomMaterial'
import { BackLoader } from 'components/Loader'
import { Carousel } from 'components/Carousel'
import { Link as RouterLink } from 'react-router-dom'
import { validator } from 'helpers/validator'
import { useDispatch } from 'react-redux'
import { signup } from 'redux/modules/auth/actions'
import { useHistory } from 'react-router-dom'
import { CRYPTONARY_SUPPORT_MAIL } from 'helpers/utils'
import sliderImg from 'assets/image/slider.png'

const CAROUSELS = [
  {
    title: 'Tailored to power your learning',
    description: `We’re excited to start delivering you insightful crypto knowledge.
     Answer a few questions to help us recommend personalized content to you.`,
    image: sliderImg
  },
  {
    title: 'Tailored to power your learning',
    description: `We’re excited to start delivering you insightful crypto knowledge.
    Answer a few questions to help us recommend personalized content to you.`,
    image: sliderImg
  },
  {
    title: 'Tailored to power your learning',
    description: `We’re excited to start delivering you insightful crypto knowledge.
    Answer a few questions to help us recommend personalized content to you.`,
    image: sliderImg
  }
]

const CAROUSEL_ITEM_STYLE = {
  imageStyle: { width: "320px" },
  titleStyle: { fontSize: "24px", color: "#141414", fontWeight: 500 },
  descriptionStyle: { color: "#555", fontSize: "16px" }
}

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isChecked, setIsChecked] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationStr, setValidationStr] = useState([])
  const [openAlert, setOpenAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Error on Signup')
  const [isLoading, setIsloading] = useState(false)

  const doSignup = useCallback(() => {
    setIsloading(true)
    dispatch(signup({
      body: {
        firstName, lastName, email, password
      },
      success: (res) => {
        setIsloading(false)
        history.push('/app')
      },
      fail: (e) => {
        if (e.status === 422) {
          setErrorMessage(e.data.error)
          setOpenAlert(true)
        } else {
          setOpenAlert(true)
        }
        setIsloading(false)
      }
    }))
  }, [dispatch, history, firstName, lastName, email, password])

  const handleSignup = () => {
    let validation_str = []
    validation_str.push(validator(firstName, ['require']))
    validation_str.push(validator(lastName, ['require']))
    validation_str.push(validator(email, ['require', 'email']))
    validation_str.push(validator(password, ['require', 'password']))
    validation_str.push(validator(password, ['require', 'confirm_password'], confirmPassword))

    setValidationStr(validation_str)

    const isValid = !validation_str.filter(item => item).length
    if (!isValid) {
      return
    }

    doSignup()
  }

  return (
    <Box>
      <MAlert open={openAlert} setOpen={setOpenAlert} message={errorMessage} type="error" />
      <BackLoader open={isLoading} />

      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <Stack justifyContent="center" alignItems="center" sx={{ minHeight: "calc(100vh - 80px)" }}>
            <Box sx={{ maxWidth: '500px', width: '100%', my: 4 }}>
              <Container>
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
                    href={CRYPTONARY_SUPPORT_MAIL} color="#555">
                    Contact our support team</Link>
                  </Typography>
                </Box>
              </Container>
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
                maxWidth: 440,
              }}>
                <Carousel data={CAROUSELS} style={CAROUSEL_ITEM_STYLE} />
              </Card>
            </Stack>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export default Signup
