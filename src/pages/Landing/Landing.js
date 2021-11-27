import React from 'react'
import {
  Container,
  Box,
} from '@mui/material'
import HeroSection from './HeroSection'
import LessonSection from './LessonSection'
import ArticleSection from './ArticleSection'
import DailySection from './DailySection'
import InteractiveSection from './InteractiveSection'
import LibrarySection from './LibrarySection'
import BlackSection from './BlackSection'
import { Footer } from 'containers/Footer'

const Landing = () => {

  return (
    <>
      <Box sx={{ background: "#FAFAFA" }}>
        <Container maxWidth="xl">
          <HeroSection />
        </Container>
      </Box>
      <Box sx={{ background: "#FFF" }}>
        <Container maxWidth="xl">
          <ArticleSection />
        </Container>
      </Box>
      <Box sx={{ background: "#FAFAFA" }}>
        <Container maxWidth="xl">
          <LessonSection />
        </Container>
      </Box>
      <Box sx={{ background: "#FFF" }}>
        <Container maxWidth="xl">
          <DailySection />
        </Container>
      </Box>
      <Box sx={{ background: "#FAFAFA" }}>
        <Container maxWidth="xl">
          <InteractiveSection />
        </Container>
      </Box>
      <Box sx={{ background: "#FFF" }}>
        <Container maxWidth="xl">
          <LibrarySection />
        </Container>
      </Box>
      <BlackSection />
      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default Landing
