import React from 'react'
import {
  Box,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import SvgLandingHero from 'assets/image/landing1.svg'
import { useHistory } from 'react-router-dom'
import { MButton } from 'components/CustomMaterial'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'

const HeroSection = ({ executeScroll }) => {
  const history = useHistory()

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
              <Typography variant="headTitle1" sx={{ fontSize: { sm: "56px", xs: "32px" }, lineHeight: '110%' }}>
                Stay ahead of the curve with Cryptonary
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: 472 }}>
                Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
              </Typography>

              <Box sx={{ display: { md: "flex", xs: "block" }, pt: 4, flexWrap: 'wrap' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <MButton
                      color='success'
                      variant='contained'
                      sx={{
                        py: 1.5, px: 6, mr: 2,
                        color: "#fff",
                        fontSize: '18px',
                        width: '100%'
                      }}
                      onClick={() => history.push('/signup')}
                    >
                      Get Started - its free
                    </MButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MButton
                      color='inherit'
                      variant='text'
                      sx={{
                        py: 1.5, boxShadow: "unset",
                        fontSize: '18px',
                        width: '100%'
                      }}
                      endIcon={<ArrowDownwardRoundedIcon />}
                      onClick={executeScroll}
                    >
                      Learn more
                    </MButton>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
          <img src={SvgLandingHero} alt='' style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroSection
