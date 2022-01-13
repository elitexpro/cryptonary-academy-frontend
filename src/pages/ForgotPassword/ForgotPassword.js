import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  Stack
} from '@mui/material'
import {
  MButton,
  MInput,
} from 'components/CustomMaterial'
import { Link as RouterLink } from 'react-router-dom'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { ForgotPasswordSentModal } from 'containers/ForgotPasswordSentModal'
import { validator } from 'helpers/validator'

const ForgotPassword = () => {
  const [openSentModal, setOpenSentModal] = useState(false)
  const [email, setEmail] = useState('')
  const [validationStr, setValidationStr] = useState("")

  const handleSendInstruction = () => {
    let validation_str = validator(email, ['require', 'email'])
    setValidationStr(validation_str)

    if (validation_str) {
      return
    }

    setOpenSentModal(true)
  }

  return (
    <>
      <Box sx={{ px: { md: 0, xs: 2 }, flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item md={12} xs={12}>
            <Stack sx={{ minHeight: "calc(100vh - 80px)" }} justifyContent="center" alignItems="center">
              <Box sx={{ textAlign: "center", maxWidth: 480, width: 480, my: 4 }}>
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h4" color="#141414" sx={{ mb: 2, fontWeight: 500 }}>Forgot Password</Typography>
                  <Typography variant="subTitle" color="#858585">Enter the email associated with your account and
                    we will send an email with instructions to reset your password. </Typography>
                </Box>

                <MInput
                  label='Email Address'
                  placeholder='Your email address'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  error={validationStr}
                />

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
                  onClick={handleSendInstruction}
                >
                  Send Instructions
                </MButton>

                <Stack direction="row" justifyContent="center" sx={{ my: 5 }}>
                  <ArrowBackRoundedIcon sx={{ mr: 1 }} />
                  <Stack sx={{ height: 20 }}>
                    <RouterLink to="/login" style={{ textDecoration: "unset", color: "#858585", fontSize: 16 }}>
                      Back to login page
                    </RouterLink>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <ForgotPasswordSentModal open={openSentModal} onClose={() => setOpenSentModal(prev => !prev)} />
    </>
  )
}

export default ForgotPassword
