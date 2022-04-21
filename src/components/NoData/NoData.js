import React from 'react'
import {
  Box,
  Typography
} from '@mui/material'

const NoData = ({ minHeight }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      minHeight: minHeight,
      alignItems: 'center',
      p: 2
    }}>
      <Typography variant="h4">No Data Available!</Typography>
    </Box>
  )
}

export default NoData
