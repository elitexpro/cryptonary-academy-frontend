import React from 'react'
import {
  Hidden,
  Box,
  Grid,
  Typography,
  Stack,
} from '@mui/material'
import heroImg from 'assets/image/hero-image.svg'

const HeroSection = () => {
  return (
    <Box sx={{ px: { md: 4, xs: 0 }, py: { md: 6, xs: 4 }, color: "#FFF", flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item md={6} xs={12} >
          <Stack justifyContent="center" alignItems="flex-start" sx={{ height: "100%" }}>
            <Typography variant="headTitle2" sx={{ color: "#FFF" }}>
              Crypto knowledge for all
            </Typography>
            <Typography varaint="subTitle" sx={{ mt: 1 }}>
              Cold Storage is the term given to digital wallets held offline to protect
              cryptocurrency funds from fraudulent use by others ...
            </Typography>
          </Stack>
        </Grid>
        <Hidden mdDown>
          <Grid item md={6}>
            <Box sx={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#141414",
              height: 240
            }} />
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export default HeroSection
