import React from 'react'
import {
  Container,
  Box,
} from '@mui/material'
import HeroSection from './HeroSection'
import HighLight from './HighLight'
import FeaturedNews from './FeaturedNews'
import NewsSection from './NewsSection'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'

const News = () => {

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <HeroSection />
        <HighLight />
      </Container>

      <Box sx={{ background: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <FeaturedNews />
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 4, mb: 10 }}>
        <NewsSection />
      </Container>

      <Paywall />

      <Container maxWidth="xl">
        <Footer />
      </Container >
    </>
  )
}

export default News
