import React, { useState } from 'react'
import {
  Box,
  Grid,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from '@mui/material'
import {
  MButton,
  MInput,
} from 'components/CustomMaterial'
import { SuccessBrand } from 'components/SuccessBrand'
import { useHistory } from 'react-router-dom'


const ResetPassword = () => {
  const history = useHistory()
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Box sx={{ px: { md: 0, xs: 2 }, flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item md={12} xs={12}>
            <Stack sx={{ minHeight: "calc(100vh - 80px)" }} justifyContent="center" alignItems="center">
              <Box sx={{ textAlign: "center", maxWidth: 480, width: 480, my: 4 }}>
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h4" color="#141414" sx={{ mb: 2, fontWeight: 500 }}>Reset Password</Typography>
                  <Typography variant="subTitle" color="#858585">
                    Your new password must be different from previous used passwords.
                  </Typography>
                </Box>

                <MInput type='password' label='Password' placeholder='Your password' />
                <MInput type='password' label='Confirm Password' placeholder='Your confirm password' />

                <MButton
                  color='success'
                  variant='contained'
                  fullWidth
                  sx={{
                    color: "#FFF",
                    height: 48,
                    mt: 5,
                    fontSize: 16,
                  }}
                  onClick={() => setOpenModal(true)}
                >
                  Reset Password
                </MButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Dialog
        onClose={() => setOpenModal(prev => !prev)}
        open={openModal}
        fullWidth
      >
        <DialogContent sx={{ textAlign: 'center' }}>
          <SuccessBrand />
          <Box sx={{ mt: 3 }}>
            <Typography variant="subTitle3" color="#141414">Your password has been reset successfully!</Typography>
          </Box>
          <MButton
            color='success'
            variant='contained'
            sx={{
              color: "#FFF",
              height: 48,
              mt: 4,
              fontSize: 16,
            }}
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
