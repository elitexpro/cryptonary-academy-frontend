import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Stack,
  Link,
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
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  },
  {
    date: '22 February 2021',
    period: 'Cryptonary Pro - Monthly',
    amount: '£44.99',
    paid_status: true
  }
]

const ManageSubscriptions = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item md={6} xs={12}>
        <Box>
          <Typography variant="subTitle" color="#555">Subscription Plan Details</Typography>
          <Box sx={{ mt: 2, mb: 4, background: "#FCFCFC", p: 3 }}>
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
              <MButton
                variant="contained"
                color="inherit"
                sx={{
                  color: "#E96353",
                  background: "#FEF7F6"
                }}
              >Cancel</MButton>
            </Stack>
          </Box>
          <Typography variant="subTitle" color="#555">Payment Method</Typography>
          <Box sx={{ mt: 2, p: 3, background: "#FCFCFC" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" spacing={2} alignItems="center">
                <FiCreditCard color="#4AAF47" />
                <Typography variant="subTitle4" color="#141414">Credit Card</Typography>
              </Stack>
              <Typography variant="subTitle4" color="#141414">Leo Carder</Typography>
              <Stack direction="row" spacing={2} sx={{ color: "#141414", fontSize: 14 }}>
                <Box>....</Box>
                <Box>....</Box>
                <Box>....</Box>
                <Box>7855</Box>
              </Stack>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: "#4AAF47", fontSize: 12 }}
              >Change</Link>
            </Stack>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="subTitle1" color="#555">Order History</Typography>
        <Stack spacing={1} sx={{ mt: 2 }}>
          {ORDER_HISTORY.map((item, index) => {
            const { date, period, amount, paid_status } = item

            return (
              <Stack
                direction="row"
                key={index}
                justifyContent="space-between"
                alignItems="center"
                sx={{ fontSize: 12, color: "#555", background: "#FCFCFC", borderRadius: "4px", p: 2 }}
              >
                <Box>{date}</Box>
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
