import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Typography,
  Stack,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { CRYPTONARY_SUPPORT_MAIL } from 'helpers/utils'
import PageNotFoundSVG from 'assets/image/404.png'

const PageNotFound = () => {
  const history = useHistory()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: "calc(100vh - 80px)",
        justifyContent: 'center',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <img src={PageNotFoundSVG} alt="" />
      </Box>

      <Typography variant="h4" color="#141414">
        Sorry. the content you’re looking for doesn’t exist.
      </Typography>

      <Stack sx={{ mt: 4 }} spacing={2} direction='row'>
        <MButton
          variant="contained"
          color="success"
          sx={{
            color: '#FFF',
          }}
          onClick={() => history.push('/')}
        >Go to Homepage</MButton>

        <MButton
          variant="outlined"
          color="inherit"
          onClick={(e) => {
            window.location.href = CRYPTONARY_SUPPORT_MAIL
            e.preventDefault()
          }}
          sx={{ px: 2, color: '#858585' }}
        >Contact us</MButton>
      </Stack>
    </Box>
  )
}

export default PageNotFound
