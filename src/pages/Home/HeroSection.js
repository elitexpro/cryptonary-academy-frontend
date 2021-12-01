import React from 'react'
import {
  Hidden,
  Box,
  Grid,
  Typography,
  Paper,
} from '@mui/material'
import heroImg from 'assets/image/hero-image.svg'
import { MButton } from 'components/CustomMaterial'

const HeroSection = () => {
  return (
    <Box sx={{ px: { md: 4, xs: 2 }, py: { md: 6, xs: 4 }, color: "#FFF", flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item md={6} xs={12} sx={{ display: 'inline-grid' }}>
          <Typography variant="headTitle2" sx={{ color: "#FFF" }}>
            Crypto knowledge for all
          </Typography>
          <Typography varaint="subTitle">
            Cold Storage is the term given to digital wallets held offline to protect
            cryptocurrency funds from fraudulent use by others ...
          </Typography>
          <MButton
            color='success'
            variant='contained'
            sx={{
              mt: 4,
              color: "#FFF",
              fontSize: 16,
              width: { md: 136, xs: 200 },
              height: 48,
            }}
          >
            Start here
          </MButton>
        </Grid>
        <Hidden mdDown>
          <Grid item md={6}>
            <Paper sx={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#000",
              height: 240
            }} />
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export default HeroSection
