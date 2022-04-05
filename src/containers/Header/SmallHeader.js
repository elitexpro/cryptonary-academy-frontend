import React from 'react'
import { Stack, Typography } from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { Logo } from 'components/Logo'
import { useHistory } from 'react-router'
import {
  smallHeaderGeneralStyles,
  contactLinkStyles,
  loginButtonStyles
} from './styles'

export const SmallHeader = () => {
  const history = useHistory()
  const pushTo = (route) => () => history.push(route)
  return (
    <Stack
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      sx={smallHeaderGeneralStyles}
    >
      <Logo sizes={{ width: 140 }}/>
      <Stack 
        display="flex"
        justifyContent="center"
        flexDirection="row"
      >
        <Typography
          lineHeight="40px"
          color="#909090"
          sx={contactLinkStyles}
          onClick={pushTo('/contact')}
        >
          Need help?
        </Typography>
        <MButton
          variant='outlined'
          color='inherit'
          sx={loginButtonStyles}
          onClick={pushTo('/login')}
        > Sign in
          </MButton>
      </Stack>
    </Stack>
  )
}