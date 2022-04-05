import React from 'react'
import {
  Box,
} from '@mui/material'
import FooterResources from './FooterResources'
import FooterHelper from './FooterHelper'
import FooterSocial from './FooterSocial'
import FooterCompany from './FooterCompany'
import FooterSubscribe from './FooterSubscribe'

const Footer = ({ minimal = false, noCompanyInfo = false }) => {
  return (
    <Box>
      {
        !minimal &&
        <>
          <FooterResources />
          <FooterHelper />
        </>
      }
      <FooterSocial />
      {!noCompanyInfo && !minimal &&
        <FooterSubscribe />
      }
      <FooterCompany />
    </Box>
  )
}

export default Footer
