import React from 'react'
import { Header } from 'containers/Header'
import {
  Box,
} from '@mui/material'
import { useLocation } from 'react-router'
import { SmallHeader } from '../Header/SmallHeader'

const Layout = ({ smallHeader, children }) => {
  const location = useLocation()
  const isSmallHeader = smallHeader.some((smallPath) => location.pathname === smallPath)
  return (
    <Box>
      {isSmallHeader ? <SmallHeader /> : <Header />}
      <Box sx={{ pt: 10 }}>
        {children}
      </Box>
    </Box>
  )

}

export default Layout