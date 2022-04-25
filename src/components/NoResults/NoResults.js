import React from 'react'
import { useHistory } from 'react-router'
import {
  Box,
  Typography,
  Link,
  Stack,
} from '@mui/material'
import SearchNoResult from 'assets/image/search-no-result.png'

const NoResults = () => {
  const history = useHistory()

  return (
    <Stack
      spacing={6}
      alignItems="center"
      justifyContent="center"
      sx={{
        height: `calc(100vh - 240px)`
      }}
    >
      <img src={SearchNoResult} alt="" style={{ width: 120 }} />
      <Typography variant="subTitle3" color="#141414">
        Sorry, we couldn’t find any results for this search.
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="subTitle" color="#555" sx={{ mr: 0.5 }}>
          Try searching again or
        </Typography>
        <Box onClick={() => history.push('/')} sx={{ '&:hover': { cursor: 'pointer' } }}>
          <Link color="inherit">
            go back to home
          </Link>
        </Box>
      </Box>
    </Stack>
  )
}

export default NoResults
