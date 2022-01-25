import React from 'react'
import {
  Typography,
  Box,
  Grid,
} from '@mui/material'
import EtfSVG from 'assets/image/etf.svg'

const RatingsGuide = () => {
  return (
    <Box sx={{ width: { md: "60%" }, textAlign: { md: "center" } }}>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="subTitle" color="#FFF">
            Ever wondered how good a coin was? Well, we have answers for you.
            Every month we select 15 coins of your choice and do a deep dive analysis and rank them 1 to 5.
            Get our ratings for ETH, BTC, XRP, ADA, DOGE & more.
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Box sx={{ mt: 4, px: 4 }}>
            <img src={EtfSVG} alt="" style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default RatingsGuide
