import React from 'react'
import {
  Container,
  Box,
} from '@mui/material'
import HeroSection from './HeroSection'
import FeaturedNews from './FeaturedNews'
import FeaturedPodcast from './FeaturedPodcast'
import NewsSection from './NewsSection'
import CoinMarketing from './CoinMarketing'
import { CryptoPro } from 'containers/CryptoPro'
import { Footer } from 'containers/Footer'
import { Paywall } from 'containers/Paywall'

const Home = () => {

  return (
    <>
      <CoinMarketing />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <HeroSection />
      </Container>

      <Box sx={{ background: "#FAFAFA" }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <FeaturedNews />
          <NewsSection />
        </Container>
      </Box>

      <Box sx={{ background: "#141414" }}>
        <FeaturedPodcast />
      </Box>
      <CryptoPro />

      {/* <Container maxWidth="xl" sx={{ py: 4 }}>
        <LatestNews />
      </Container> */}

      <Box sx={{ mt: 4 }}>
        <Paywall />
      </Box>

      <Container maxWidth="xl">
        <Footer minimal showCompanyInfo />
      </Container >
    </>
  )
}

export default Home
