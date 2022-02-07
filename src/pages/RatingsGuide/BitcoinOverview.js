import React from 'react'
import {
  Box,
  Stack,
  Typography,
  Rating,
  Divider,
  Grid,
  Hidden,
} from '@mui/material'
import BitcoinSVG from 'assets/image/bitcoin.svg'
import Overview from 'components/CoinOverview'

const HEADERS = ['Name', 'Type', 'Sector', 'Rating']

const BitcoinOverview = () => {
  return (
    <Box sx={{ px: { md: 10 }, py: 6 }}>
      <Box
        sx={{
          px: 4,
          mb: 1,
          background: "#FAFAFA",
          height: 48,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Grid container>
          {HEADERS.map((item, index) => (
            index === 1 || index === 2 ?
              <Hidden mdDown key={index}>
                <Grid item md={3} xs={6}>
                  <Typography variant="subTitle" color="subTitle">{item}</Typography>
                </Grid>
              </Hidden> :
              <Grid item key={index} md={3} xs={6}>
                <Typography variant="subTitle" color="subTitle">{item}</Typography>
              </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: 1, border: "1px solid #E4E4E4", px: 2 }}>
        <Box sx={{ px: 2, py: 2 }}>
          <Grid container alignItems="center">
            <Grid item md={3} xs={6}>
              <Stack direction="row" alignItems="center">
                <img src={BitcoinSVG} alt="" style={{ width: 40, height: 40 }} />
                <Box sx={{ ml: 2, mr: 0.5 }}>
                  <Typography variant="subTitle1" color="#555">Bitcoin</Typography>
                </Box>
                <Box>
                  <Typography variant="subTitle4" color="#858585">BTC</Typography>
                </Box>
              </Stack>
            </Grid>
            <Hidden mdDown>
              <Grid item md={3} xs={6}>
                <Typography variant="subTitle1" color="#555">Currency/Commodity</Typography>
              </Grid>
            </Hidden>
            <Hidden mdDown>
              <Grid item md={3} xs={6}>
                <Typography variant="subTitle1" color="#555">Currencies</Typography>
              </Grid>
            </Hidden>
            <Grid item md={3} xs={6}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Rating defaultValue={3.2} precision={0.1} size="small" readOnly />
                <Typography variant="subTitle1" color="#141414">3.2</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Overview />
      </Box>
    </Box>
  )
}

export default BitcoinOverview
