import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Typography,
  Stack,
  Link,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { CRYPTONARY_SUPPORT_MAIL } from 'helpers/utils'
import PageNotFoundSVG from 'assets/image/404.svg'

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

        <Link
          component="button"
          underline="none"
          variant="body2"
          href={CRYPTONARY_SUPPORT_MAIL}
          sx={{
            color: '#858585',
            border: '1px solid #EAEAEA',
            borderRadius: '4px',
            px: 2,
          }}
        >Contact us</Link>
      </Stack>
    </Box>
  )
}

export default PageNotFound
