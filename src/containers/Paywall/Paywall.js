import React, { useState } from 'react'
import {
  Stack,
  Typography,
  Link,
  Tooltip,
  Box,
  Hidden,
  Container
} from '@mui/material'
import { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/system'
import MembershipPlan from './MembershipPlan'
import { MSwitch } from 'components/CustomMaterial'
import { Link as RouterLink } from 'react-router-dom'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FiLock } from 'react-icons/fi'

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 13,
    padding: '10px 15px'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}))

const Paywall = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <Stack sx={{ background: "#141414", borderTop: "4px solid #4AAF47" }}>
      <Container maxWidth="xl">
        <Stack alignItems="center" position="relative">
          <Box sx={{ width: 64, height: 64, borderRadius: "50%", background: "#4AAF47", p: "20px", mt: -4 }} position="absolute">
            <FiLock style={{ width: 24, height: 24, color: "#FFF" }} />
          </Box>
          <Typography
            color="#FFF"
            sx={{
              width: { md: 566 },
              mb: 2,
              mt: 6,
              fontSize: { md: 32, xs: 24 }
            }}
            textAlign="center"
          >
            Cryptonary can help whether you’re an industry veteran or a crypto newbie
          </Typography>
          <Typography
            color="#FFF"
            sx={{
              width: { md: 566 },
              mb: 4,
              fontSize: { md: 18, xs: 14 }
            }}
            textAlign="center"
          >
            Join today to get full access to our basics to advance crypto courses, exclusive insights, research & analysis.
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Typography
              color="#FFF"
              sx={{
                fontSize: { md: 18, xs: 16 }
              }}
            >
              Pay by Card
            </Typography>
            <MSwitch onChange={handleChange} checked={checked} />
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                color="#FFF"
                sx={{ fontSize: { md: 18, xs: 16 } }}
              >
                <Hidden mdDown>Pay by Cryptocurrency</Hidden>
                <Hidden mdUp>Pay by Crypto</Hidden>
              </Typography>
              <LightTooltip title="We accept BTC, ETH, LTC, USDB or USDT" placement="bottom" arrow>
                <Stack alignItems="center">
                  <BsFillInfoCircleFill style={{ color: "#A2A2A2", fontSize: 16 }} />
                </Stack>
              </LightTooltip>
            </Stack>
          </Stack>
          <Box sx={{ px: 4, width: "100%", mx: 4 }}>
            <MembershipPlan />
          </Box>
        </Stack>
      </Container>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ background: "rgba(255, 255, 255, 0.04)", width: "100%", height: 64 }}
      >
        <Typography variant="subTitle" sx={{ color: "#555" }}>Already have an account?</Typography>
        <RouterLink to="/login">
          <Link component="button" color="#FFF" underline="hover">Log in</Link>
        </RouterLink>
      </Stack>
    </Stack>
  )
}

export default Paywall
