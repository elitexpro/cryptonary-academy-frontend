import React, { useState } from 'react'
import useStyles from './styles.js'
import {
  Box,
  Grid,
  Dialog,
  DialogContent,
} from '@mui/material'
import {
  MButton,
  MInput,
} from 'components/CustomMaterial'
import { SuccessBrand } from 'components/SuccessBrand'
import { useHistory } from 'react-router-dom'


const ResetPassword = () => {
  const classes = useStyles()
  const history = useHistory()
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={0}>
          <Grid item md={12} xs={12}>
            <div className={classes.center}>
              <div className={classes.fieldArea}>
                <p className={classes.title}>Reset your password</p>
                <p className={classes.description}>Your new password must be different from previous used passwords.</p>

                <MInput type='password' label='Password' placeholder='Your password' />
                <MInput type='password' label='Confirm Password' placeholder='Your confirm password' />

                <MButton
                  color='success'
                  variant='contained'
                  fullWidth
                  className={classes.signupBtn}
                  onClick={() => setOpenModal(true)}
                >
                  Reset Password
                </MButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Dialog
        onClose={() => setOpenModal(prev => !prev)}
        open={openModal}
      >
        <DialogContent sx={{ textAlign: 'center' }}>
          <SuccessBrand />
          <p className={classes.sentTitle}>Password reset Instructions has been sent!</p>
          <MButton
            color='success'
            variant='contained'
            className={classes.signupBtn}
            onClick={() => history.push('/login')}
          >
            Login using new password
          </MButton>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ResetPassword
