import React from 'react'
import {
  Typography,
  Box,
} from '@mui/material'
import EtfSVG from 'assets/image/etf.svg'

const RatingsGuide = () => {
  return (
    <Box sx={{ width: "60%", textAlign: "center" }}>
      <Typography variant="subTitle" color="#FFF">
        Ever wondered how good a coin was? Well, we have answers for you.
        Every month we select 15 coins of your choice and do a deep dive analysis and rank them 1 to 5.
        Get our ratings for ETH, BTC, XRP, ADA, DOGE & more.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <img src={EtfSVG} alt="" />
      </Box>
    </Box>
  )
}

export default RatingsGuide
