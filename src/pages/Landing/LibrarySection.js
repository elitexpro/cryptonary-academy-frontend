import React from 'react'
import {
  Box,
  Grid,
  Stack,
  Typography,
  Hidden,
} from '@mui/material'
import ImgLanding6 from 'assets/image/landing6.png'

const LibrarySection = () => {

  return (
    <Box sx={{ py: { md: 10, xs: 3 } }}>
      <Grid container spacing={2}>
        <Hidden mdDown>
          <Grid item md={6} xs={12} >
            <Stack justifyContent="center" alignItems="center" >
              <Box sx={{ maxWidth: { md: 580, xs: "100%" } }}>
                <img src={ImgLanding6} alt='' style={{ width: "100%" }} />
              </Box>
            </Stack>
          </Grid>
        </Hidden>
        <Grid item md={6} xs={12} >
          <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ height: "100%" }}>
            <Stack spacing={2} >
              <Typography variant="headTitle2">
                Ever-growing library
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: { md: 520, xs: "100%" } }} >
                Cold Storage is the term given to digital wallets held offline
                to protect cryptocurrency funds from fraudulent use by others
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Hidden mdUp>
          <Grid item md={6} xs={12} >
            <Box sx={{ maxWidth: { md: 580, xs: "100%" } }}>
              <img src={ImgLanding6} alt='' style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box >
  )
}

export default LibrarySection
