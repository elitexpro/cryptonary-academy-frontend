import React from 'react'
import { Container, Box } from '@mui/material'
import HeroSection from './HeroSection'
import FilterBar from './FilterBar'
import Basics from './Basics'
import MustKnow from './MustKnow'
import DeepDives from './DeepDives'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'


const Education = () => {

  return (
    <>
      <Box sx={{ backgroundColor: "#141414" }}>
        <Container maxWidth="xl">
          <HeroSection />
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mb: 8 }} >
        <FilterBar />
        <Basics />
        <MustKnow />
        <DeepDives />
      </Container>
      <Paywall />
      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default Education
