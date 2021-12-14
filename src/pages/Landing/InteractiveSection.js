import React from 'react'
import {
  Box,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import SvgLanding5 from 'assets/image/landing5.svg'

const LessonSection = () => {

  return (
    <Box sx={{ py: { md: 10, xs: 3 } }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} >
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Stack spacing={2} >
              <Typography variant="headTitle2">
                Interactive, first
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: { md: 520, xs: "100%" } }} >
                Cold Storage is the term given to digital wallets held offline to protect
                cryptocurrency funds from fraudulent use by others <span role="img" aria-label="cong">🎉</span>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} >
          <Box sx={{ maxWidth: { md: 420, xs: "100%" } }}>
            <img src={SvgLanding5} alt='' style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}

export default LessonSection
