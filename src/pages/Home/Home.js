import React from 'react'
import {
  Container,
  Box,
} from '@mui/material'
import HeroSection from './HeroSection'
import FeaturedNews from './FeaturedNews'
import LatestNews from './LatestNews'
import NewsSection from './NewsSection'
import { CryptoPro } from 'containers/CryptoPro'
import { Footer } from 'containers/Footer'

const Home = () => {

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <HeroSection />
      </Container>

      <Box sx={{ background: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <FeaturedNews />
          <NewsSection />
        </Container>
      </Box>

      <CryptoPro />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <LatestNews />
      </Container>

      <Container maxWidth="xl">
        <Footer minimal={true} />
      </Container >
    </>
  )
}

export default Home
