import React from 'react'
import {
  Box,
  Stack,
  Typography,
  Rating,
  Grid,
  Tooltip,
  Divider,
  Link
} from '@mui/material'
import { useSelector } from 'react-redux'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const Overview = ({ coin }) => {
  const currentUser = useSelector(currentUserSelector)

  const coinOverview = [
    {
      title: 'Update',
      content: coin ? coin.infoUpdate : `
        China’s crackdown on mining earlier this year certainly had a negative impact in the short-term, however it did force geographical
        decentralisation of the hashrate which was around 65% down to around 40%, centralised in China.
        An advantage for Bitcoin's decentralisation.
      `
    },
    {
      title: 'Risk',
      content: coin ? coin.infoRisk : `
        Single person/entity (Satoshi Nakamoto) owning 1 million BTC which represents ~5% of the entire supply.
      `
    },
    {
      title: 'Cryptonary’s take',
      content: coin ? coin.infoCTake : `
        Bitcoin is becoming a world class Store-of-Value and a force to be reckoned with, it has embodied
        the term “Decentralised Money” and given back people their freedom. Nonetheless, that does not mean Bitcoin will always reign as the
        largest cryptocurrency by market capitalisation as there are many more with better economic models and larger addressable markets.
      `
    },
  ]

  const ratingOverview = [
    {
      name: 'Value Accrual',
      value: coin ? coin.infoValueAccural : 2.0,
    },
    {
      name: 'Team & Developers',
      value: coin ? coin.infoTeamDeveloper : 1.0,
    },
    {
      name: 'Tokenomic Allocation',
      value: coin ? coin.infoTokenomicAllocation : 5.0,
    },
    {
      name: 'Usage',
      value: coin ? coin.infoUsageReview : 4.0,
    },
    {
      name: 'Community Strength:',
      value: coin ? coin.infoCommunityReview : 4.0,
    },
  ]

  return (
    <Grid container spacing={6} sx={{ px: !currentUser && 2, py: 4 }}>
      <Grid item md={8} xs={12}>
        <Stack spacing={4} sx={{ py: 2 }}>
          {coinOverview.map((item, index) => {
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
          {ratingOverview.map((item, index) => {
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
                  <Rating value={value ? value : 0} precision={0.1} size="small" readOnly />
                  <Typography variant="subTitle1" color="#141414">({value ? value.toFixed(1) : '0.0'})</Typography>
                </Stack>
              </Stack>
            )
          })}
        </Stack>
        {currentUser &&
          <Box>
            <Divider sx={{ my: 4 }} />

            <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
              <Typography variant="subTitle1" color="#141414">About {coin ? coin.tokenName : 'Bitcoin'}</Typography>
              <Link href="#" underline="hover" color="inherit" sx={{ color: '#4AAF47' }}>Learn more</Link>
            </Stack>

            <Typography variant="subTitle" color="#555">
              {coin ? coin.infoAbout : `
                Created in 2009, Bitcoin is the first ever cryptocurrency. It introduced the concept of a decentralized currency
                that can be exchanged peer-to-peer without the need of a central authority or other intermediaries.
              `}
            </Typography>
          </Box>
        }
      </Grid>
    </Grid>
  )
}

export default Overview
