import React from 'react'
import useStyles from './styles.js'
import {
  Hidden,
  Box,
  Grid,
} from '@mui/material'
import heroImg from 'assets/image/hero-image.svg'
import { MButton } from 'components/CustomMaterial'

const HeroSection = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={0}>
          <Grid item md={6} xs={12} sx={{ display: 'inline-grid' }}>
            <div className={classes.headerText}>
              Crypto knowledge for all
            </div>
            <div className={classes.subHeaderText}>
              Cold Storage is the term given to digital wallets held offline to protect
              cryptocurrency funds from fraudulent use by others ...
            </div>
            <MButton
              color='success'
              variant='contained'
              className={classes.startButton}
            >
              Start here
            </MButton>
          </Grid>
          <Hidden mdDown>
            <Grid item md={6} className={classes.heroSectionImg}>
              <img src={heroImg} alt='' />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </>
  )
}

export default HeroSection
