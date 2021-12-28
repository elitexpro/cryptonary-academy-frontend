import React from 'react'
import {
  Hidden,
  Box,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-scroll'
import SvgLandingHero from 'assets/image/landing1.svg'
import { useHistory } from 'react-router-dom'
import { MButton } from 'components/CustomMaterial'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'

const HeroSection = () => {
  const history = useHistory()

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} >
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
              <Typography variant="headTitle1" sx={{ fontSize: { sm: "56px", xs: "32px" }, lineHeight: '110%' }}>
                Stay ahead of the curve with Cryptonary
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: 472 }}>
                Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
              </Typography>

              <Box sx={{ display: { md: "flex", xs: "block" }, pt: 4, flexWrap: 'wrap' }}>
                <MButton
                  color='success'
                  variant='contained'
                  sx={{
                    py: 1.5, px: 6, mb: 2, mr: 2,
                    color: "#fff",
                    fontSize: '18px',
                  }}
                  onClick={() => history.push('/signup')}
                >
                  Get Started - its free
                </MButton>
                <MButton
                  color='inherit'
                  variant='text'
                  sx={{
                    py: 1.5, mb: 2, boxShadow: "unset",
                    fontSize: '18px',
                    width: 260,
                  }}
                  endIcon={<ArrowDownwardRoundedIcon />}
                >
                  <Link
                    to="learn_more"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Learn more
                  </Link>
                </MButton>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Hidden mdDown>
          <Grid item md={6} >
            <img src={SvgLandingHero} alt='' style={{ width: "100%" }} />
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export default HeroSection
