import React from 'react'
import {
  Box,
  Grid,
  Stack,
  Typography,
  IconButton,
} from '@mui/material'
import ImgLandingLesson from 'assets/image/landing3.png'
import { MButton } from 'components/CustomMaterial'
import { useHistory } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'

const LessonSection = () => {
  const history = useHistory()

  return (
    <Box sx={{ py: { md: 10, xs: 3 } }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} >
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Stack spacing={2} >
              <Typography variant="headTitle2">
                Engaging video lessons
              </Typography>

              <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: { md: 520, xs: "100%" } }} >
                Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
                <br /><br />
                Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
              </Typography>

              <Box sx={{ pt: 4 }}>
                <MButton
                  variant='outlined'
                  color='inherit'
                  sx={{ fontSize: '16px', px: 2, color: '#555' }}
                  onClick={() => history.push('/app')}
                >
                  View more
                </MButton>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} >
          <Box sx={{ maxWidth: { md: 520, xs: "100%" } }}>
            <img src={ImgLandingLesson} alt='' style={{ width: "100%" }} />

            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton>
                <ArrowBackRoundedIcon />
              </IconButton>

              <IconButton>
                <ArrowForwardRoundedIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}

export default LessonSection
