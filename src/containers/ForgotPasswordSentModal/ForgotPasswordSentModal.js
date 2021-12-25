import React from 'react'
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Link,
  Typography,
  Stack,
  Box,
} from '@mui/material'

import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { SuccessBrand } from 'components/SuccessBrand'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))


const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const ForgotPasswordSentModal = ({ open, onClose }) => {

  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        open={open}
      >
        <BootstrapDialogTitle onClose={onClose}></BootstrapDialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <SuccessBrand />
          <Stack sx={{ my: 4 }}>
            <Typography variant="subTitle3" color="#141414" sx={{ fontWeight: 500, mb: 2 }}>
              Password reset Instructions has been sent!
            </Typography>
            <Typography variant="subTitle" color="#858585">
              Please check your inbox and follow the instructions in the email to reset your password.
              Be patient, this may take few minutes.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography variant="subTitle" color="#858585" sx={{ mr: 1 }}>
                Haven't received yet ?
              </Typography>
              <Link component="button" variant="body2" style={{ color: "#62BE5F", fontSize: 16, textDecoration: "unset" }}>
                Resend email
              </Link>
            </Box>
          </Stack>
        </DialogContent>
      </BootstrapDialog>
    </>
  )

}

export default ForgotPasswordSentModal