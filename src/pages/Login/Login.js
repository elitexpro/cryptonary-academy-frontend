import React from 'react'
import useStyles from './styles.js'
import {
  Hidden,
  Box,
  Grid,
  Link,
  Card,
} from '@mui/material'
import {
  MButton,
  MInput,
} from 'components/CustomMaterial'
import { Carousel } from 'components/Carousel'
import { Link as RouterLink } from 'react-router-dom'


const Login = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={0}>
          <Grid item md={6} xs={12}>
            <div className={classes.center}>
              <div className={classes.fieldArea}>
                <p className={classes.title}>Sign in using your Cryptonary credentials</p>
                <MInput label='Email Address' placeholder='Your email address' />
                <MInput type='password' label='Password' placeholder='Your password' />

                <RouterLink to="/forgot-password">
                  <Link component="button" variant="body2" className={classes.forgotLink}>Forgot password?</Link>
                </RouterLink>

                <MButton
                  color='success'
                  variant='contained'
                  fullWidth
                  className={classes.signupBtn}
                >
                  Sign In
                </MButton>

                <p className={classes.loginLink}>Don’t have an account? <RouterLink to="/signup">
                  <Link component="button" variant="body2">Create one now</Link></RouterLink>
                </p>
                <p className={classes.contactLink}>Having troubles signing up? <Link href='mailto:support@cryptonary.com'>
                  Contact our support team</Link>
                </p>
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

export default Login
