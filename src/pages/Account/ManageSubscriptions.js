import React from 'react'
import moment from 'moment'
import {
  Box,
  Grid,
  Typography,
  Stack,
  Link,
  Hidden,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { FiCreditCard, FiDownload } from 'react-icons/fi'
import CryptonarySVG from 'assets/image/cryptonary.svg'

const CONTENT = [
  {
    title: 'Start Date',
    value: '22 February 2021',
    color: '#555555'
  },
  {
    title: 'Next Payment',
    value: '01 March 2021',
    color: '#555555'
  },
  {
    title: 'Ending In',
    value: '08 Days',
    color: '#E96353'
  }
]

const ORDER_HISTORY = [
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  }
]

const ManageSubscriptions = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={6} xs={12}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="subTitle" color="#555">Subscription Plan Details</Typography>
          <Box sx={{ mt: 2, mb: 4, background: "#FCFCFC", p: { md: 3, xs: 2 } }}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 4 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <img src={CryptonarySVG} alt="" style={{ height: 40, width: 40 }} />
                <Typography variant="subTitle" color="#141414">Cryptonary Pro</Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={0.5}>
                <Typography variant="subTitle1" color="#141414">£44.99</Typography>
                <Typography variant="subTitle2" color="#909090">/ month</Typography>
              </Stack>
            </Stack>
            <Grid container spacing={4}>
              <Grid item md={9} xs={12}>
                <Stack direction="row" justifyContent="space-between">
                  {CONTENT.map((item, index) => {
                    const { title, value, color } = item

                    return (
                      <Stack key={index} spacing={1}>
                        <Typography variant="subTitle2" color="#909090">{title}</Typography>
                        <Typography variant="subTitle2" color={color}>{value}</Typography>
                      </Stack>
                    )
                  })}
                </Stack>
              </Grid>
              <Grid item md={3} xs={12}>
                <MButton
                  variant="contained"
                  color="inherit"
                  sx={{
                    color: "#E96353",
                    background: "#FEF7F6",
                    width: "100%"
                  }}
                >Cancel</MButton>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="subTitle" color="#555">Payment Method</Typography>
          <Box sx={{ mt: 2, p: 3, background: "#FCFCFC" }}>
            <Stack direction="row">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <FiCreditCard color="#4AAF47" />
                    <Box>
                      <Typography variant="subTitle4" color="#141414">Credit Card</Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subTitle4" color="#141414">Leo Carder</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                  <Stack direction="row" spacing={2} sx={{ color: "#141414", fontSize: 14 }} justifyContent="flex-end">
                    <Box>....</Box>
                    <Box>....</Box>
                    <Box>....</Box>
                    <Box>7855</Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                  <Stack alignItems="flex-end">
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: "#4AAF47", fontSize: 12 }}
                    >Change</Link>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="subTitle1" color="#555">Order History</Typography>
        <Stack spacing={1} sx={{ mt: 2 }}>
          {ORDER_HISTORY.map((item, index) => {
            const { period, amount, paid_status } = item

            return (
              <Stack
                direction="row"
                key={index}
                justifyContent="space-between"
                alignItems="center"
                sx={{ fontSize: 12, color: "#555", background: "#FCFCFC", borderRadius: "4px", p: 2 }}
              >
                <Hidden mdUp>
                  <Box>{moment().format('DD MMM')}</Box>
                </Hidden>
                <Hidden mdDown>
                  <Box>{moment().format('DD MMMM YYYY')}</Box>
                </Hidden>
                <Box>{period}</Box>
                <Box>{amount}</Box>
                <Box
                  sx={{
                    p: "10px",
                    background: paid_status ? '#F1FEEC' : '#FEF7F6',
                    color: paid_status ? '#2CC96B' : '#E96353'
                  }}
                >{paid_status ? 'Paid' : 'UnPaid'}</Box>
                <FiDownload style={{ color: '#A2A2A2' }} />
              </Stack>
            )
          })}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ManageSubscriptions
