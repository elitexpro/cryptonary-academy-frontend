import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Link,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import PageNotFoundSVG from 'assets/image/404.svg'

const PageNotFound = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ mb: 4 }}>
        <img src={PageNotFoundSVG} alt="" />
      </Box>
      <Typography variant="h4" color="#141414">
        Sorry. the content you’re looking for doesn’t exist.
      </Typography>
      <Stack sx={{ mt: 4 }} spacing={2} direction='row'>
        <MButton variant="contained" color="success" sx={{ color: '#FFF' }}>
          Go to Homepage
        </MButton>
        <Box sx={{ border: '1px solid #EAEAEA', py: 1, px: 2, borderRadius: '4px' }}>
          <Link href='#' sx={{ color: "#858585" }} underline="hover">Contact us</Link>
        </Box>
      </Stack>
    </Box>
  )
}

export default PageNotFound
