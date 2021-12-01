import React from 'react'
import {
  Box,
  Grid,
  Divider,
  Container,
  Typography,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import resReportImg from 'assets/image/res-report.svg'
import resBookImg from 'assets/image/res-book.svg'
import resLinkImg from 'assets/image/res-link.svg'


const Resources = () => {
  return (
    <Box sx={{ mt: 3, px: {md: 5, xs: 2} }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h2" sx={{ color: "#141414" }}>Resources</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <MButton color='inherit' size="small">
            View all
          </MButton>
        </Box>

        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <MButton
              color='inherit'
              variant='outlined'
              sx={{
                py: 2.5,
                pl: 3,
                color: '#000',
                borderColor: '#EAEAEA',
                backgroundColor: '#fff',
                width: '100%',
                justifyContent: 'flex-start'
              }}
              startIcon={<img src={resReportImg} alt='' />}
            >
              White-papers/ Reports
            </MButton>
          </Grid>
          <Grid item md={4} xs={12}>
            <MButton
              color='inherit'
              variant='outlined'
              sx={{
                py: 2.5,
                pl: 3,
                color: '#000',
                borderColor: '#EAEAEA',
                backgroundColor: '#fff',
                width: '100%',
                justifyContent: 'flex-start'
              }}
              startIcon={<img src={resBookImg} alt='' />}
            >
              Book Recommendations
            </MButton>
          </Grid>
          <Grid item md={4} xs={12}>
            <MButton
              color='inherit'
              variant='outlined'
              sx={{
                py: 2.5,
                pl: 3,
                color: '#000',
                borderColor: '#EAEAEA',
                backgroundColor: '#fff',
                width: '100%',
                justifyContent: 'flex-start'
              }}
              startIcon={<img src={resLinkImg} alt='' />}
            >
              Useful Links
            </MButton>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />
      </Container>
    </Box>
  )
}

export default Resources
