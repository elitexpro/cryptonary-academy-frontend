import React, { useState, useCallback } from 'react'
import {
  Stack,
  Box,
  Grid,
  Link,
  Container,
  Typography,
  Hidden,
  Card,
} from '@mui/material'
import {
  MButton,
  MInput,
  MAlert,
} from 'components/CustomMaterial'
import { Link as RouterLink } from 'react-router-dom'
import { Carousel } from 'components/Carousel'
import { validator } from 'helpers/validator'
import { BackLoader } from 'components/Loader'
import { useDispatch } from 'react-redux'
import { login } from 'redux/modules/auth/actions'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationStr, setValidationStr] = useState([])
  const [openAlert, setOpenAlert] = useState(false)
  const [isLoading, setIsloading] = useState(false)

  const doLogin = useCallback(() => {
    setIsloading(true)
    dispatch(login({
      body: {
        email, password
      },
      success: (res) => {
        setIsloading(false)
        history.push('/app')
      },
      fail: (e) => {
        setOpenAlert(true)
        setIsloading(false)
      }
    }))
  }, [dispatch, history, email, password])

  const handleLogin = () => {
    let validation_str = []
    validation_str.push(validator(email, ['require', 'email']))
    validation_str.push(validator(password, ['require', 'password']))

    setValidationStr(validation_str)

    const isValid = validation_str.filter(item => item).length ? false : true
    if (!isValid) {
      return
    }

    doLogin()
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <Container maxWidth="xl">
      <MAlert open={openAlert} setOpen={setOpenAlert} message='Incorrect email or password!' type="error" />
      <BackLoader open={isLoading} />

      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <Stack justifyContent="center" alignItems="center" sx={{ minHeight: "calc(100vh - 80px)" }}>
            <Box sx={{ maxWidth: '400px', width: '100%', my: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subTitle3" sx={{ color: "#141414", fontWeight: 500 }}>
                  Sign in using your Cryptonary credentials
                </Typography>
              </Box>
              <MInput
                label='Email Address'
                placeholder='Your email address'
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                error={validationStr[0]}
              />
              <MInput
                type='password'
                label='Password'
                placeholder='Your password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                error={validationStr[1]}
              />

              <Stack direction="row">
                <Box sx={{ flexGrow: 1 }} />
                <RouterLink to="/forgot-password">
                  <Link component="button" sx={{ mt: 2 }} color="#141414">
                    <Typography variant="subTitle4" >
                      Forgot password?
                    </Typography>
                  </Link>
                </RouterLink>
              </Stack>

              <MButton
                color='success'
                variant='contained'
                fullWidth
                sx={{ height: 48, my: 5, color: '#FFF', fontSize: 16 }}
                onClick={handleLogin}
              >
                Sign In
              </MButton>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="subTitle1" sx={{ color: "#555" }}>Don’t have an account? <RouterLink to="/signup">
                  <Link component="button" color="#62BE5F" sx={{ fontSize: "1.125rem" }}>Create one now</Link></RouterLink>
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

export default Login
