import React from 'react'
import useStyles from './styles.js'
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Link,
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
  const classes = useStyles()

  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        open={open}
      >
        <BootstrapDialogTitle onClose={onClose}></BootstrapDialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <SuccessBrand />
          <p className={classes.title}>Password reset Instructions has been sent!</p>
          <p className={classes.description}>
            Please check your inbox and use the instructions in the email to reset your password.
            Be patient, this may take few minutes.
          </p>
          <p className={classes.resendLink}>Haven't received yet ? <Link component="button" variant="body2">Resend email</Link></p>
        </DialogContent>
      </BootstrapDialog>
    </>
  )

}

export default ForgotPasswordSentModal