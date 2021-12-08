import React from 'react'
import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import SvgArticleHeroImg from 'assets/image/article-hero-image.svg'

const HeroSection = () => {
  return (
    <Box sx={{ py: { md: 8, xs: 3 }, px: { md: 5, xs: 3 } }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} sx={{ pt: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
          <Typography variant="headTitle2"> Basics </Typography>
          <Typography variant="subTitle1" sx={{ color: "#555" }}>
            All you need to know about the basics of cryptocurrency in one place.
            Learn how Bitcoin, blockchain and altcoins work, how to actually use them, and why it matters to you.
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} >
          <Box sx={{
            backgroundImage: `url(${SvgArticleHeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: 240
          }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroSection
