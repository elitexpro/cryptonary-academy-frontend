import React from 'react'
import useStyles from './styles.js'
import {
  Hidden,
  Box,
  Grid,
  Link,
  Card,
} from '@mui/material'
import { Carousel } from 'components/Carousel'
import { SuccessBrand } from 'components/SuccessBrand'
import { Link as RouterLink } from 'react-router-dom'


const Verify = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={0}>
          <Grid item md={6} xs={12}>
            <div className={classes.center}>
              <div className={classes.fieldArea}>
                <SuccessBrand />
                <p className={classes.title}>Verfiy your email address</p>
                <p className={classes.description}>Please check your email for a link to verify your email address.
                  Be patient, this may take few minutes. </p>
                <p className={classes.loginLink}>Haven't received yet ? <RouterLink to="/signup">
                  <Link component="button" variant="body2">Resent Email</Link></RouterLink>
                </p>
              </div>
            </div>
          </Grid>
          <Hidden mdDown>
            <Grid item md={6} className={classes.sliderArea}>
              <div className={classes.center}>
                <Card className={classes.sliderItemArea}>
                  <Carousel />
                </Card>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </>
  )
}

export default Verify
