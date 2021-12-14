import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  Box,
  Grid,
} from '@mui/material'
import {
  MButton,
  MInput,
} from 'components/CustomMaterial'
import { Link as RouterLink } from 'react-router-dom'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { ForgotPasswordSentModal } from 'containers/ForgotPasswordSentModal'


const ForgotPassword = () => {
  const classes = useStyles()
  const [openSentModal, setOpenSentModal] = useState(false)

  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={0}>
          <Grid item md={12} xs={12}>
            <div className={classes.center}>
              <div className={classes.fieldArea}>
                <p className={classes.title}>Reset Password</p>
                <p className={classes.description}>Enter the email associated with your account and
                  we will send an email with instructions to reset your password. </p>

                <MInput label='Email Address' placeholder='Your email address' />

                <MButton
                  color='success'
                  variant='contained'
                  fullWidth
                  className={classes.signupBtn}
                  onClick={() => setOpenSentModal(true)}
                >
                  Send Instructions
                </MButton>

                <p className={classes.loginLink}>
                  <ArrowBackRoundedIcon />
                  <RouterLink to="/login">
                    Back to login page
                  </RouterLink>
                </p>

              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <ForgotPasswordSentModal open={openSentModal} onClose={() => setOpenSentModal(prev => !prev)} />
    </>
  )
}

export default ForgotPassword
