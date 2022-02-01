import React from 'react'
import {
  Box,
  Stack,
  Typography,
  Rating,
  Divider,
  Grid,
  Tooltip,
  Hidden,
} from '@mui/material'
import BitcoinSVG from 'assets/image/bitcoin.svg'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const HEADERS = ['Name', 'Type', 'Sector', 'Rating']

const COIN_OVERVIEW = [
  {
    title: 'Description',
    content: `Created in 2009, Bitcoin is the first ever cryptocurrency.
              It introduced the concept of a decentralized currency that can be exchanged
              peer-to-peer without the need of a central authority or other intermediaries.`,
  },
  {
    title: 'Update',
    content: `China’s crackdown on mining certainly had a negative impact in the short-term,
              but it did force geographical decentralisation of the hashrate which was always 65% centralised in China.`,
  },
  {
    title: 'Risk',
    content: 'Single person/entity (Satoshi Nakamoto) owning 1 Million BTC which represents ~5% of the entire supply.',
  },
]

const RATING_OVERVIEW = [
  {
    name: 'Value Accrual',
    value: 2.0,
  },
  {
    name: 'Team & Developers',
    value: 1.0,
  },
  {
    name: 'Tokenomic Allocation',
    value: 5.0,
  },
  {
    name: 'Usage',
    value: 4.0,
  },
  {
    name: 'Community Strength:',
    value: 4.0,
  },
]

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
        <Grid container spacing={6} sx={{ px: 2, py: 4 }}>
          <Grid item md={8} xs={12}>
            <Stack spacing={4} sx={{ py: 2 }}>
              {COIN_OVERVIEW.map((item, index) => {
                const { title, content } = item

                return (
                  <Stack spacing={1} key={index} value={index}>
                    <Typography variant="subTitle" color="#232A45">{title}</Typography>
                    <Typography variant="subTitle" color="#858585">{content}</Typography>
                  </Stack>
                )
              })}
            </Stack>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box sx={{ mb: 3, fontSize: 20, color: "#000" }}>Rating Overview</Box>
            <Stack spacing={2}>
              {RATING_OVERVIEW.map((item, index) => {
                const { name, value } = item

                return (
                  <Stack direction="row" key={index} justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="subTitle" color="#555">{name}</Typography>
                      <Tooltip title={name} placement="bottom" arrow>
                        <Stack alignItems="center">
                          <BsFillInfoCircleFill style={{ color: "#A2A2A2", fontSize: 16 }} />
                        </Stack>
                      </Tooltip>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating defaultValue={value} size="small" readOnly />
                      <Typography variant="subTitle1" color="#141414">({value})</Typography>
                    </Stack>
                  </Stack>
                )
              })}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default BitcoinOverview
