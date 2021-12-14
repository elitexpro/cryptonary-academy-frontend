import React from 'react'
import {
  Container,
  Box,
} from '@mui/material'
import PulseDatePicker from './PulseDatePicker'
import PulseContent from './PulseContent'
import { Footer } from 'containers/Footer'

const Pulse = () => {
  return (
    <Box>
      <Box sx={{ px: { md: 5, xs: 0 } }}>
        <Container maxWidth="xl">
          <PulseDatePicker />
          <PulseContent />
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Footer />
      </Container>
    </Box>
  )
}

export default Pulse
