import React from 'react'
import { Header } from 'containers/Header'
import {
  Box,
} from '@mui/material'
import { useLocation } from 'react-router'
import { SmallHeader } from '../Header/SmallHeader'
import { useSelector } from 'react-redux'
import { currentUserSelector } from 'redux/modules/auth/selectors'

const Layout = ({ smallHeader, children }) => {
  const location = useLocation()
  const currentUser = useSelector(currentUserSelector)
  const isSmallHeader = smallHeader.some((smallPath) => location.pathname === smallPath)
  return (
    <Box>
      {isSmallHeader && !currentUser ? <SmallHeader /> : <Header />}
      <Box sx={{ pt: 10 }}>
        {children}
      </Box>
    </Box>
  )

}

export default Layout