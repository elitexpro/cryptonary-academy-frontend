import React from 'react'
import {
  Box,
} from '@mui/material'
import FooterHelper from './FooterHelper'
import FooterSocial from './FooterSocial'
import FooterCompany from './FooterCompany'
import FooterSubscribe from './FooterSubscribe'

const Footer = ({ minimal = false, showCompanyInfo = false }) => {
  return (
    <Box>
      {
        !minimal &&
        <>
          <FooterHelper />
        </>
      }
      <FooterSocial />
      {(!minimal || showCompanyInfo) &&
        <FooterSubscribe />
      }
      <FooterCompany />
    </Box>
  )
}

export default Footer
