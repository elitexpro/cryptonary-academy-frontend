import React from 'react'
import useStyles from './styles.js'
import {
  Box,
  Grid,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import resReportImg from 'assets/image/res-report.svg'
import resBookImg from 'assets/image/res-book.svg'
import resLinkImg from 'assets/image/res-link.svg'


const Resources = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.basicsBox} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex' }}>
          <div className={classes.sectionTitle}>Resources</div>
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
      </Box>
    </>
  )
}

export default Resources
