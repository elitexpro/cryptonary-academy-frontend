import React from 'react'
import {
  Box,
  Hidden,
} from '@mui/material'
import FooterResources from './FooterResources'
import FooterHelper from './FooterHelper'
import FooterSocial from './FooterSocial'
import FooterCompany from './FooterCompany'
import FooterSubscribe from './FooterSubscribe'

const Footer = () => {
  return (
    <Box>
      <FooterResources />
      <FooterHelper />
      <FooterSocial />
      <Hidden mdUp>
        <FooterSubscribe />
      </Hidden>
      <FooterCompany />
    </Box>
  )
}

export default Footer
