import React from 'react'
import {
  Container,
  Grid,
  Hidden,
} from '@mui/material'
import PulseDatePicker from './PulseDatePicker'
import PulseList from './PulseList'
import CPROPulse from './CPROPulse'
import { Footer } from 'containers/Footer'

const Pulse = () => {
  return (
    <>
      <PulseDatePicker />
      <Container maxWidth="xl">

        <Grid container spacing={4} >
          <Grid item xs={12} md={8} >
            <PulseList />
          </Grid>

          <Hidden mdDown>
            <Grid item md={4}>
              <CPROPulse />
            </Grid>
          </Hidden>
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

export default Pulse
