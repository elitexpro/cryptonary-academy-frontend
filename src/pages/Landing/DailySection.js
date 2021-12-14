import React from 'react'
import {
  Box,
  Grid,
  Stack,
  Typography,
  Hidden,
} from '@mui/material'
import ImgLandingDaily from 'assets/image/landing4.png'
import ImgLandingDailyBadge from 'assets/image/landing4-badge.png'

const DailySection = () => {

  return (
    <Box sx={{ py: { md: 10, xs: 3 } }}>
      <Grid container spacing={2}>
        <Hidden mdDown>
          <Grid item md={6} xs={12} >
            <Stack justifyContent="center" alignItems="center" >
              <Box sx={{ maxWidth: { md: 520, xs: "100%" } }}>
                <img src={ImgLandingDaily} alt='' style={{ width: "100%" }} />
              </Box>
            </Stack>
          </Grid>
        </Hidden>
        <Grid item md={6} xs={12} >
          <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ height: "100%" }}>
            <Stack spacing={2} >
              <Box>
                <img src={ImgLandingDailyBadge} alt='' />
              </Box>
              <Typography variant="headTitle2">
                Daily market analysis
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: { md: 520, xs: "100%" } }} >
                Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
                <br /><br />
                Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Hidden mdUp>
          <Grid item md={6} xs={12} >
            <Box sx={{ maxWidth: { md: 520, xs: "100%" } }}>
              <img src={ImgLandingDaily} alt='' style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box >
  )
}

export default DailySection
