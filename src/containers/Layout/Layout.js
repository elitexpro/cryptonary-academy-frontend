import React from 'react'
import { Header } from 'containers/Header'
import {
  Box,
} from '@mui/material'

const Layout = ({ children }) => {

  return (
    <Box>
      <Header />
      <Box sx={{ pt: 10 }}>
        {children}
      </Box>
    </Box>
  )

}

export default Layout