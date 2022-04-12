import React, { useRef } from 'react'
import {
  Container,
  Box,
  Hidden,
} from '@mui/material'
import HeroSection from './HeroSection'
import LessonSection from './LessonSection'
import ArticleSection from './ArticleSection'
import DailySection from './DailySection'
import InteractiveSection from './InteractiveSection'
import LibrarySection from './LibrarySection'
import { Paywall } from 'containers/Paywall'
import { Footer } from 'containers/Footer'

const Landing = () => {
  const myRef = useRef(null)

  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Box sx={{ background: "#FFF" }}>
        <Container maxWidth="xl">
          <HeroSection executeScroll={executeScroll} />
        </Container>
      </Box>
      <Box sx={{ background: "#FFF" }}>
        <Container maxWidth="xl" ref={myRef}>
          <ArticleSection id="learn_more" />
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
      <Hidden mdDown>
        <Box sx={{ background: "#FAFAFA" }}>
          <Container maxWidth="xl">
            <InteractiveSection />
          </Container>
        </Box>
      </Hidden>
      <Box sx={{ background: "#FFF" }}>
        <Container maxWidth="xl">
          <LibrarySection />
        </Container>
      </Box>
      <Paywall />
      <Container maxWidth="xl">
        <Footer minimal={true} />
      </Container >
    </>
  )
}

export default Landing
