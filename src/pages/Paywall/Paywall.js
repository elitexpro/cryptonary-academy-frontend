import React from 'react'
import {
  Stack,
  Typography,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { useHistory } from 'react-router-dom'

const Paywall = () => {
  const history = useHistory()

  return (
    <Stack sx={{ minHeight: `calc(100vh - 80px)` }} justifyContent="center" alignItems="center">
      <Typography variant="headTitle2" sx={{ mb: 2 }}>Premium Content</Typography>
      <Typography variant="subTitle" color="#141414" sx={{ mb: 4 }}>
        To read the full article, please login or buy a subscription.
      </Typography>

      <MButton
        variant='contained'
        color='success'
        sx={{ fontSize: '16px', px: 2, color: '#FFF' }}
        onClick={() => history.push('/login')}
      >
        Log in
      </MButton>
    </Stack>
  )
}

export default Paywall
