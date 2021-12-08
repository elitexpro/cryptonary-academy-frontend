import React from 'react'
import { Container, Box } from '@mui/material'
import HeroSection from './HeroSection'
import FilterBar from './FilterBar'
import Basics from './Basics'
import MustKnow from './MustKnow'
import QuizSection from 'components/QuizSection'
import DeepDives from './DeepDives'
import { Footer } from 'containers/Footer'


const Home = () => {

  return (
    <>
      <Box sx={{ backgroundColor: "#141414" }}>
        <Container maxWidth="xl">
          <HeroSection />
        </Container>
      </Box>

      <Container maxWidth="xl" >
        <FilterBar />
        <Basics />
        <MustKnow />
        <QuizSection />
        <DeepDives />
        <Footer />
      </Container>
    </>
  )
}

export default Home
